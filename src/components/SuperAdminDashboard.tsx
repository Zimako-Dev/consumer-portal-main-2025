import { useState, useEffect, useRef } from 'react';
import { DollarSign, FileText, Users, CreditCard, Building2, MessageCircle } from 'lucide-react';
import SuperAdminNav from './SuperAdminNav';
import ChangeLog from './ChangeLog';
import CustomerDashboard from './CustomerDashboard';
import QueryManagement from './QueryManagement';
import CreateAdminUser from './CreateAdminUser';

import SuperPaymentReminder from './SuperPaymentReminder';
import StatsCard from './StatsCard';
import FeatureCard from './FeatureCard';
import ZimakoAIChatBot from './ZimakoAIChatBot';
import ActiveUsersCard from './analytics/ActiveUsersCard';
import AdminMeterReadings from './AdminMeterReadings';
import WhatsAppDashboard from './WhatsAppDashboard';
import BulkSMSDashboard from './BulkSMSDashboard';
import BulkEmailDashboard from './BulkEmailDashboard';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import SessionManager from '../utils/sessionManager';
import { trackUserActivity } from '../utils/activityTracker';
import toast from 'react-hot-toast';
import jellyfishBg from '../assets/jellyfish-bg.svg';
import '../styles/dashboard.css';
import ReportsLayout from './ReportsLayout';

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good Morning';
  if (hour < 18) return 'Good Afternoon';
  return 'Good Evening';
};

export default function SuperAdminDashboard({ onLogout }: { onLogout: () => void }) {
  const { isDarkMode } = useTheme();
  const { currentUser, userData } = useAuth();
  const sessionManagerRef = useRef<SessionManager | null>(null);

  // Log user data for debugging
  useEffect(() => {
    console.log('Current User:', currentUser);
    console.log('User Data:', userData);
  }, [currentUser, userData]);

  const [currentView, setCurrentView] = useState<'dashboard' | 'changelog' | 'reports' | 'customerdashboard' | 'queries' | 'createAdmin' | 'payment-reminder' | 'meter-readings' | 'whatsapp-dashboard' | 'bulk-sms-dashboard' | 'bulk-email-dashboard'>('dashboard');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [statsData, setStatsData] = useState([
    {
      title: "Book Value",
      value: "Loading...",
      change: 0,
      icon: <DollarSign className="text-blue-500" size={24} />,
      iconBgColor: "bg-blue-100 dark:bg-blue-900/20"
    },
    {
      title: "Active Accounts",
      value: "Loading...",
      change: 0,
      icon: <Users className="text-purple-500" size={24} />,
      iconBgColor: "bg-purple-100 dark:bg-purple-900/20"
    },
    {
      title: "Total Meters",
      value: "Loading...",
      change: -1.8,
      icon: <Building2 className="text-orange-500" size={24} />,
      iconBgColor: "bg-orange-100 dark:bg-orange-900/20"
    },
    {
      title: "Total Payments",
      value: "Loading...",
      change: 8.0,
      icon: <CreditCard className="text-green-500" size={24} />,
      iconBgColor: "bg-green-100 dark:bg-green-900/20"
    }
  ]);

  // Function to fetch active users count
  const fetchActiveUsers = async () => {
    try {
      if (!db) {
        console.error('Firestore instance is null');
        return;
      }
      
      // Create Firestore query for current active users
      const customersRef = collection(db, 'customers');
      const activeUsersQuery = query(
        customersRef,
        where('accountStatus', 'in', ['ACTIVE', 'Active'])
      );

      // Create query for previous month's data
      const previousMonthQuery = query(
        customersRef,
        where('accountStatus', 'in', ['INACTIVE', 'Inactive'])
      );

      // Execute queries
      const [currentSnapshot, previousSnapshot] = await Promise.all([
        getDocs(activeUsersQuery),
        getDocs(previousMonthQuery)
      ]);

      const currentActiveUsers = currentSnapshot.size;
      const previousActiveUsers = previousSnapshot.size;
      const totalCustomers = currentActiveUsers + previousActiveUsers;

      // Calculate percentage of active users
      const change = totalCustomers > 0 
        ? ((currentActiveUsers / totalCustomers) * 100) - 50 // Normalize around 50% for the change indicator
        : 0;

      console.log('Active customers found:', {
        currentActive: currentActiveUsers,
        previousInactive: previousActiveUsers,
        total: totalCustomers,
        change: change
      });

      // Update stats data
      setStatsData(prevStats => prevStats.map(stat => 
        stat.title === "Active Accounts" 
          ? {
              ...stat,
              value: currentActiveUsers.toLocaleString(),
              change: Number(change.toFixed(1))
            }
          : stat
      ));

    } catch (error) {
      console.error('Error fetching active users:', error);
      // Update with error state
      setStatsData(prevStats => prevStats.map(stat => 
        stat.title === "Active Accounts" 
          ? {
              ...stat,
              value: "Error",
              change: 0
            }
          : stat
      ));
    }
  };

  // Function to fetch total revenue (outstanding balance)
  const fetchTotalRevenue = async () => {
    try {
      if (!db) {
        console.error('Firestore instance is null');
        return;
      }
      
      const customersRef = collection(db, 'customers');
      const querySnapshot = await getDocs(customersRef);
      
      let totalRevenue = 0;
      
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        
        // Check if outstandingTotalBalance exists
        if (data.outstandingTotalBalance && data.outstandingTotalBalance !== 'N/A') {
          // Convert to number if it's a string
          const amount = typeof data.outstandingTotalBalance === 'string' 
            ? parseFloat(data.outstandingTotalBalance.replace(/[^0-9.-]/g, ''))
            : data.outstandingTotalBalance;
          
          if (!isNaN(amount)) {
            totalRevenue += amount;
            
            console.log('Added outstanding balance:', {
              accountNumber: data.accountNumber,
              originalValue: data.outstandingTotalBalance,
              parsedAmount: amount,
              runningTotal: totalRevenue
            });
          }
        }
      });

      console.log('Final revenue calculation:', {
        totalRevenue,
        totalAccounts: querySnapshot.size
      });

      // Update stats data
      setStatsData(prevStats => prevStats.map(stat => 
        stat.title === "Book Value" 
          ? {
              ...stat,
              value: `R${totalRevenue.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}`,
              change: 0 // Since we're not tracking monthly changes
            }
          : stat
      ));

    } catch (error) {
      console.error('Error fetching total revenue:', error);
      setStatsData(prevStats => prevStats.map(stat => 
        stat.title === "Book Value" 
          ? {
              ...stat,
              value: "Error",
              change: 0
            }
          : stat
      ));
    }
  };

  // Function to fetch total payments
  const fetchTotalPayments = async () => {
    try {
      if (!db) {
        console.error('Firestore instance is null');
        return;
      }
      
      const customersRef = collection(db, 'customers');
      const querySnapshot = await getDocs(customersRef);
      
      let totalPayments = 0;
      
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        
        // Check if lastPaymentAmount exists and is a number
        if (typeof data.lastPaymentAmount === 'number') {
          // Convert negative payment to positive
          const amount = data.lastPaymentAmount < 0 ? -data.lastPaymentAmount : data.lastPaymentAmount;
          
          totalPayments += amount;
          
          console.log('Added payment:', {
            accountNumber: data.accountNumber,
            originalAmount: data.lastPaymentAmount,
            convertedAmount: amount,
            runningTotal: totalPayments
          });
        }
      });

      console.log('Final payments calculation:', {
        totalPayments,
        totalAccounts: querySnapshot.size
      });

      // Update stats data with positive values
      setStatsData(prevStats => prevStats.map(stat => 
        stat.title === "Total Payments" 
          ? {
              ...stat,
              value: `R${totalPayments.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}`,
              change: 0 // Since we're not tracking monthly changes
            }
          : stat
      ));

    } catch (error) {
      console.error('Error fetching total payments:', error);
      setStatsData(prevStats => prevStats.map(stat => 
        stat.title === "Total Payments" 
          ? {
              ...stat,
              value: "Error",
              change: 0
            }
          : stat
      ));
    }
  };

  // Function to fetch total meters consumption
  const fetchTotalMeters = async () => {
    try {
      if (!db) {
        console.error('Firestore instance is null');
        return;
      }
      
      // Get reference to the meter readings collection for September 2024
      const meterReadingsRef = collection(db, 'meterReadings', '2024', '09');
      const querySnapshot = await getDocs(meterReadingsRef);
      
      let totalConsumption = 0;
      let previousTotal = 0;
      let processedMeters = 0;
      
      for (const customerDoc of querySnapshot.docs) {
        const data = customerDoc.data();
        
        // Check if Consumption exists and is a number
        if (typeof data.Consumption === 'number') {
          totalConsumption += data.Consumption;
          processedMeters++;
          
          console.log('Added consumption:', {
            customerNumber: customerDoc.id,
            consumption: data.Consumption,
            runningTotal: totalConsumption
          });
        }
      }

      console.log('Final meter calculation:', {
        totalConsumption,
        processedMeters,
        totalDocuments: querySnapshot.size
      });

      // Update stats data
      setStatsData(prevStats => prevStats.map(stat => 
        stat.title === "Total Meters" 
          ? {
              ...stat,
              value: totalConsumption.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) + " kWh", // Added kWh unit since this is consumption
              change: previousTotal > 0 
                ? Number(((totalConsumption - previousTotal) / previousTotal * 100).toFixed(1))
                : 0
            }
          : stat
      ));

    } catch (error) {
      console.error('Error fetching total meters:', error);
      setStatsData(prevStats => prevStats.map(stat => 
        stat.title === "Total Meters" 
          ? {
              ...stat,
              value: "Error",
              change: 0
            }
          : stat
      ));
    }
  };



  // Initialize session timeout manager
  useEffect(() => {
    // Create session manager with 5 minute timeout
    sessionManagerRef.current = new SessionManager(handleSessionTimeout, 5 * 60 * 1000);
    
    // Start monitoring user activity
    sessionManagerRef.current.startMonitoring();
    
    console.log('SuperAdminDashboard: Session timeout monitoring initialized');
    
    // Clean up on component unmount
    return () => {
      if (sessionManagerRef.current) {
        sessionManagerRef.current.stopMonitoring();
        console.log('SuperAdminDashboard: Session timeout monitoring stopped on unmount');
      }
    };
  }, []);

  // Handle session timeout
  const handleSessionTimeout = async () => {
    console.log('SuperAdminDashboard: Session timed out due to inactivity');
    
    // Track the timeout event
    if (currentUser?.uid) {
      try {
        await trackUserActivity(currentUser.uid, 'session', 'SuperAdminDashboard', {
          action: 'timeout',
          reason: 'inactivity',
          duration: '5 minutes',
          userRole: 'superadmin'
        });
      } catch (error) {
        console.error('Error tracking session timeout:', error);
      }
    }
    
    // Show a toast notification
    toast.error('Your session has expired due to inactivity. You will be logged out.');
    
    // Perform logout after a short delay to allow the toast to be seen
    setTimeout(async () => {
      await handleLogout();
    }, 1500);
  };

  // Modify the existing logout handler to stop session monitoring
  const handleLogout = async (): Promise<boolean> => {
    try {
      console.log('Initiating logout from SuperAdminDashboard...');
      
      // Stop session monitoring
      if (sessionManagerRef.current) {
        sessionManagerRef.current.stopMonitoring();
      }
      
      // Call the onLogout prop function
      await onLogout();
      console.log('Logout successful');
      return true; // Return true to indicate successful logout
    } catch (error) {
      console.error('Error during logout:', error);
      return false; // Return false to indicate failed logout
    }
  };

  // Fetch data when component mounts
  useEffect(() => {
    fetchActiveUsers();
    fetchTotalRevenue();
    fetchTotalPayments();
    fetchTotalMeters();
  }, []);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-dark-bg' : 'bg-gray-50'}`}>
      <div className="flex flex-col h-screen">
        {/* Top Navigation */}
        <SuperAdminNav onLogout={handleLogout} onViewChange={setCurrentView} currentView={currentView} />

        {/* Content Area */}
        <div className="flex-1 overflow-auto">
          <main className={`${currentView === 'queries' ? 'h-full' : 'max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'}`}>
            {currentView === 'changelog' ? (
              <ChangeLog />
            ) : currentView === 'reports' ? (
              <ReportsLayout />
            ) : currentView === 'customerdashboard' ? (
              <CustomerDashboard 
                onLogout={handleLogout} 
                userEmail={currentUser?.email || ''}
                userName={userData?.fullName || ''}
                accountNumber={userData?.accountNumber || ''} />
            ) : currentView === 'queries' ? (
              <div className="h-full">
                <QueryManagement />
              </div>
            ) : currentView === 'createAdmin' ? (
              <div className="p-8">
                <CreateAdminUser onClose={() => setCurrentView('dashboard')} />
              </div>
            ) : currentView === 'payment-reminder' ? (
              <SuperPaymentReminder />
            ) : currentView === 'meter-readings' ? (
              <div className="p-8">
                <AdminMeterReadings />
              </div>
            ) : currentView === 'whatsapp-dashboard' ? (
              <WhatsAppDashboard />
            ) : currentView === 'bulk-sms-dashboard' ? (
              <BulkSMSDashboard />
            ) : currentView === 'bulk-email-dashboard' ? (
              <BulkEmailDashboard />
            ) : (
              // Dashboard View with new greeting and stats cards
              <div className="flex flex-col items-center justify-center min-h-[70vh] p-6">
                <div className="text-center mb-12">
                  <h1 className="text-4xl md:text-6xl font-playfair mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent animate-fade-in">
                    {getGreeting()},
                  </h1>
                  <h2 className="text-3xl md:text-5xl font-playfair text-gray-800 dark:text-gray-200 animate-fade-in-delayed">
                    {userData?.fullName || userData?.name || (currentUser?.email?.split('@')[0]?.split('.')?.[0] + ' ' + currentUser?.email?.split('@')[0]?.split('.')?.[1])?.replace(/\b\w/g, l => l.toUpperCase()) || 'Super Admin'}
                  </h2>
                  <p className="mt-8 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-fade-in-delayed leading-relaxed">
                    Welcome to your super admin dashboard. Here you can manage reports, view analytics, and handle customer queries.
                  </p>
                </div>
                
                {/* Stats Cards Grid */}
                <div className="w-full max-w-7xl animate-fade-in-delayed" style={{ animationDelay: '0.6s' }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {statsData.map((stat, index) => (
                      <StatsCard
                        key={index}
                        title={stat.title}
                        value={stat.value}
                        change={stat.change}
                        icon={stat.icon}
                        iconBgColor={stat.iconBgColor}
                      />
                    ))}
                  </div>

                  {/* Feature Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="relative">
                      <FeatureCard
                        title="Welcome back"
                        value="Rofhiwa Mudau"
                        icon={<MessageCircle className="w-5 h-5 text-blue-400" />}
                        metric="Super Admin"
                        description="Need assistance? Click here to chat with Zimako AI"
                        onClick={() => setIsChatOpen(true)}
                        bgGradient="linear-gradient(135deg, rgba(37, 99, 235, 0.2), rgba(126, 34, 206, 0.2))"
                        bgImage={jellyfishBg}
                      />
                    </div>
                    <FeatureCard
                      title="Query Resolution Rate"
                      value="95"
                      progressValue={95}
                      trend={2.5}
                      trendText="vs last period"
                      description="Percentage of customer queries resolved successfully"
                    />
                    <FeatureCard
                      title="Statement Distributions"
                      value="12,847"
                      metric="statements sent"
                      progressValue={98}
                      trend={5.3}
                      trendText="this month"
                      description="Total number of statements successfully distributed in December"
                      icon={<FileText className="w-5 h-5 text-emerald-400" />}
                    />
                    <ActiveUsersCard />
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* ChatBot Modal */}
      <ZimakoAIChatBot
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        userName="Rofhiwa Mudau"
      />
    </div>
  );
}