export const trainingData = [
  {
    intent: "greeting",
    patterns: [
      "Hello",
      "Hi",
      "Hey there",
      "Good morning",
      "Good afternoon",
      "Good evening",
      "Good day",
      "Greetings",
      "morning",
      "afternoon",
      "evening",
      "night",
      "hey",
      "hi there",
      "howdy",
      "yo",
      "hiya",
      "greetings and salutations",
      "good day to you",
      "pleased to meet you",
      "start chat",
      "begin chat",
      "start conversation",
      "need to talk",
      "is anyone there",
      "are you available",
      "anyone available",
      "anyone here",
      "anyone around",
      "is this working",
      "hi need help",
      "hello assistance needed",
      "hey quick question",
      "hi there problem",
      "hello issue",
      "excuse me",
      "pardon me",
      "if you're available",
      "hope you can help"
    ],
    responses: [
      "👋 Hello! How can I assist you today?",
      "Hi there! Welcome to Mohokare Consumer Portal. What can I help you with?",
      "Hello! I'm here to help with any questions about your account, billing, or services.",
      "Greetings! How may I be of assistance today?",
      "Hi! I'm your Mohokare assistant. What brings you here today?",
      "Welcome! How can I make your experience better today?"
    ]
  },
  {
    intent: "farewell",
    patterns: [
      // Basic farewells
      "Goodbye",
      "Bye",
      "See you later",
      "Have a good day",
      "Farewell",
      "Bye bye",
      // Gratitude with farewell
      "Thanks, goodbye",
      "Thank you, bye",
      "Thanks for your help",
      "Thank you for assisting",
      "Appreciate your help, goodbye",
      "Thanks for everything",
      // Task completion
      "That's all I needed",
      "I'm done now",
      "All done here",
      "Got what I needed",
      "Mission accomplished",
      "Everything's sorted",
      // Time-specific farewells
      "Good night",
      "Have a good evening",
      "Have a nice day",
      "Enjoy your day",
      "Have a great rest of your day",
      // Casual/Informal
      "Catch you later",
      "Take it easy",
      "Peace out",
      "Catch you on the flip side",
      "See ya",
      "Later",
      // Action-based endings
      "signing off",
      "logging off",
      "disconnecting now",
      "closing chat",
      "ending session",
      "wrapping up",
      // Future reference
      "talk to you later",
      "until next time",
      "see you next time",
      "will come back later",
      "might return later",
      // Polite exits
      "must go now",
      "have to leave",
      "need to run",
      "got to dash",
      "time to go",
      // Status indicators
      "end chat",
      "finish chat",
      "done chatting",
      "chat complete",
      "conversation ended",
      // Urgent exits
      "got to go urgently",
      "need to go now",
      "must leave immediately",
      "rushing off",
      // Combined gratitude and farewell
      "thanks and goodbye",
      "appreciate it, bye",
      "grateful for help, goodbye",
      "thank you and take care",
      // Regional variations
      "cheerio",
      "adios",
      "ciao",
      "au revoir",
      // Professional closings
      "best regards",
      "kind regards",
      "regards",
      "signing off now",
      // Satisfaction indicators
      "all good now, thanks",
      "perfect, goodbye",
      "that helps, bye",
      "solved my problem, goodbye",
    ],
    responses: [
      "Goodbye! Have a great day! 👋",
      "Take care! Feel free to come back if you need anything else.",
      "Thanks for chatting! Have a wonderful day! 😊",
      "Bye! Don't hesitate to reach out if you need further assistance.",
      "See you later! Remember, we're here 24/7 if you need help."
    ]
  },
  {
    intent: "thank_you",
    patterns: [
      "Thanks",
      "Thank you",
      "Thanks a lot",
      "I appreciate it",
      "Thank you so much",
      "Thanks for your help",
      "That was helpful",
      "You've been great",
      "Appreciate your help"
    ],
    responses: [
      "You're welcome! 😊 Happy to help!",
      "It's my pleasure! Don't hesitate to ask if you need anything else.",
      "Glad I could help! Have a great day! ✨",
      "You're most welcome! Is there anything else you'd like to know?",
      "Anytime! Your satisfaction is our priority. 🌟"
    ]
  },
  {
    intent: "help",
    patterns: [
      // Existing patterns...
      "Can you help me?",
      "I need assistance",
      "Help me please",
      "Please help",
      "I need help",
      "Could you assist me?",
      "Um, I need some help please",
      "Well, I was wondering if you could help",
      "So, I'm having trouble with",
      "Actually, I need assistance with",
      // Direct requests
      "assist me please",
      "requesting help",
      "need support",
      "support needed",
      "assistance required",
      "require assistance",
      "seeking help",
      "looking for assistance",
      // Urgent/Immediate needs
      "help needed urgently",
      "immediate assistance required",
      "need help right now",
      "urgent help needed",
      // Question forms
      "would you be able to help",
      "is there someone who can help",
      "can someone assist me",
      "how can I get help",
      "where can I find help",
      // Polite/Formal requests
      "kindly assist me",
      "would appreciate some help",
      "requesting your assistance",
      "may I get some help",
      "if you could help me",
      // Informal/Conversational
      "stuck with something",
      "having some trouble here",
      "not sure what to do",
      "bit confused here",
      "need a hand with this",
      "can't figure this out",
      // Problem-focused
      "running into issues",
      "facing a problem",
      "got a problem here",
      "something's not working",
      "having difficulty with",
      // Assistance variations
      "need guidance",
      "could use some help",
      "assistance please",
      "support assistance needed",
      "require some guidance",
    ],
    responses: [
      "Of course! What do you need help with? 😊",
      "Sure, I'm here to help. Please tell me more.",
      "Happy to assist! What can I do for you?",
    ],
  },
  {
    intent: "account_inquiry",
    patterns: [
      // Basic account queries
      "I want to check my account",
      "Can you show me my account details",
      "Where can I find my account info",
      "How do I access my account",
      "Need to see my account",
      // Access issues
      "can't access my account",
      "cannot access account",
      "unable to access account",
      "trouble accessing account",
      "account access problem",
      "account login issues",
      "problems with account access",
      "having trouble with my account",
      "account not accessible",
      "can't get into my account",
      // Account information
      "show account details",
      "display account information",
      "view account info",
      "check account status",
      "see account balance",
      "account overview",
      "account summary",
      // Navigation queries
      "where is my account page",
      "how to get to my account",
      "find my account section",
      "locate account details",
      "navigate to account",
      // Login related
      "login not working",
      "can't sign in",
      "login failed",
      "password not working",
      "forgot login details",
      "reset account access",
      // Account management
      "manage my account",
      "update account details",
      "change account information",
      "modify account settings",
      "edit account",
      // Specific account features
      "account settings location",
      "account preferences",
      "account configuration",
      "account dashboard",
      "account portal",
      // Technical issues
      "account error message",
      "account page not loading",
      "account system down",
      "technical problems with account",
      "account glitch",
      // Security concerns
      "secure account access",
      "account security",
      "protect my account",
      "account verification",
      "verify account",
      // Time-based queries
      "temporary account issues",
      "account access timeout",
      "account locked out",
      "account temporarily unavailable",
      // User status
      "new account access",
      "first time account login",
      "existing account access",
      "old account login",
      // Combined with other intents
      "help with account access",
      "need assistance with account",
      "support for account issues",
      "guidance on account",
      // Urgent queries
      "immediate account access needed",
      "urgent account help",
      "critical account issue",
      // Mobile specific
      "mobile account access",
      "app account login",
      "phone account view",
      // Browser specific
      "browser account problems",
      "website account access",
      "online account viewing",
    ],
    responses: [
      "I'll help you check your account right away.",
      "I understand you're concerned about your account. Let me help you with that. 😊",
      "I'll look into your account details immediately.",
      "I see you need help with your account. I'm here to assist you! 😊",
      "Let me check that for you right away. Your account security is our priority.",
    ],
  },
  {
    intent: "password_reset",
    patterns: [
      // Basic password reset
      "I forgot my password",
      "How can I reset my password",
      "Help me recover my password",
      "Password recovery",
      "I can't log in",
      "Need to reset password",
      // Login issues
      "password not working",
      "incorrect password",
      "wrong password",
      "password error",
      "login password problem",
      "can't remember password",
      "lost my password",
      // Recovery process
      "how to recover password",
      "password recovery process",
      "steps to reset password",
      "password reset instructions",
      "guide to reset password",
      "password reset help",
      // Technical issues
      "password reset link not working",
      "reset link expired",
      "password reset failed",
      "error resetting password",
      "problem with password reset",
      "password reset page error",
      // Security concerns
      "secure password reset",
      "safe way to reset password",
      "verify identity for reset",
      "password reset verification",
      "confirm identity reset",
      // Email related
      "no reset email received",
      "password reset email missing",
      "didn't get reset link",
      "resend password reset email",
      "reset email not arriving",
      // Urgent requests
      "need urgent password reset",
      "immediate password reset",
      "emergency password recovery",
      "quick password reset",
      // Mobile specific
      "reset password on mobile",
      "app password reset",
      "phone password recovery",
      "mobile reset issues",
      // Account lockout
      "account locked password attempts",
      "too many password tries",
      "locked out of account",
      "password attempts exceeded",
      // New password setup
      "create new password",
      "change password after reset",
      "setup password again",
      "new password requirements",
      // Time-based issues
      "temporary password expired",
      "password reset timeout",
      "reset link expired",
      "password recovery time",
      // Multiple attempts
      "tried resetting multiple times",
      "repeated reset attempts",
      "password reset not working",
      "still can't reset password",
      // Alternative methods
      "other ways to reset password",
      "different reset method",
      "alternative password recovery",
      "backup reset options",
      // Support requests
      "need help with password reset",
      "password reset support",
      "assistance with reset",
      "help resetting password",
      // System specific
      "website password reset",
      "portal password recovery",
      "online reset system",
      "password reset portal",
      // Combined with other intents
      "hello need password reset",
      "hi forgot my password",
      "help with password please",
      "thanks for password reset",
    ],
    responses: [
      "I understand you're having trouble with your password. Let me help you reset it safely. 😊",
      "I'll guide you through the password reset process right away.",
      "Don't worry, I'll help you regain access to your account immediately.",
      "I understand this can be frustrating. Let me help you resolve this. 😔",
      "Security is important to us. I'll help you reset your password safely and quickly.",
    ],
  },
  {
    intent: "billing_inquiry",
    patterns: [
      // Basic billing questions
      "I have a question about my bill",
      "Can you explain this charge",
      "Where can I find my invoice",
      "Billing issues",
      "I need help with my payment",
      "Question about billing",
      // Invoice related
      "need my invoice",
      "download invoice",
      "missing invoice",
      "invoice copy request",
      "where are my invoices",
      "past invoices",
      "invoice history",
      "monthly invoice",
      // Payment issues
      "payment problem",
      "payment failed",
      "payment declined",
      "payment not going through",
      "trouble making payment",
      "payment error message",
      "payment processing issue",
      // Charge inquiries
      "unexpected charge",
      "unknown charge",
      "explain this fee",
      "what is this charge for",
      "charge clarification",
      "disputed charge",
      "double charged",
      // Billing cycle
      "billing cycle question",
      "when am I billed",
      "billing frequency",
      "next billing date",
      "billing schedule",
      "payment due date",
      // Account balance
      "current balance",
      "outstanding balance",
      "amount due",
      "check balance",
      "remaining balance",
      "account charges",
      // Payment methods
      "update payment method",
      "change payment details",
      "add new card",
      "remove payment method",
      "payment options",
      "accepted payment methods",
      // Refunds
      "refund request",
      "refund status",
      "where's my refund",
      "refund processing time",
      "cancel and refund",
      "refund policy",
      // Billing history
      "payment history",
      "transaction history",
      "past payments",
      "previous charges",
      "billing records",
      "payment log",
      // Auto-payment
      "automatic payments",
      "auto-pay setup",
      "recurring billing",
      "cancel auto-pay",
      "automatic withdrawal",
      // Price inquiries
      "pricing question",
      "cost breakdown",
      "service charges",
      "fee explanation",
      "price details",
      // Billing errors
      "billing mistake",
      "wrong amount charged",
      "billing error",
      "incorrect charge",
      "overcharged",
      // Payment confirmation
      "confirm payment",
      "payment received",
      "payment verification",
      "proof of payment",
      "payment confirmation",
      // Urgent billing
      "urgent billing issue",
      "immediate payment help",
      "critical billing problem",
      "emergency payment issue",
      // Combined queries
      "help with invoice and payment",
      "billing and payment question",
      "invoice and charge inquiry",
      "payment and refund issue",
    ],
    responses: [
      "I understand your concern about billing. Let me help you with that right away. 😊",
      "I'll check your billing details immediately.",
      "I see you have questions about your bill. I'm here to help clarify everything. 😊",
      "I understand billing issues can be stressful. Let me help you resolve this. 😔",
      "Let me look into your billing inquiry right away and find the best solution.",
    ],
  },
  {
    intent: "service_availability",
    patterns: [
      // Basic availability queries
      "Is your service available in my area",
      "Do you operate in my city",
      "Can I use your service in South Africa",
      "Where is your service available",
      "available in my area",
      "operate in my city",
      // Coverage related
      "service coverage",
      "coverage area",
      "coverage map",
      "service area",
      "areas covered",
      "regions served",
      "service reach",
      "coverage zones",
      "service territory",
      // Location specific
      "available in Johannesburg",
      "service in Pretoria",
      "operate in Cape Town",
      "available in Durban",
      "service in Port Elizabeth",
      "coverage in Bloemfontein",
      "available in East London",
      // Province specific
      "available in Gauteng",
      "service in Western Cape",
      "operate in KwaZulu-Natal",
      "coverage in Eastern Cape",
      "service in Free State",
      "available in Mpumalanga",
      "operate in Limpopo",
      "service in North West",
      "coverage in Northern Cape",
      // Regional queries
      "service in my region",
      "regional availability",
      "local service area",
      "nearby service locations",
      "closest service point",
      // Availability checks
      "check availability",
      "verify service area",
      "confirm coverage",
      "check if you operate here",
      "service check",
      "availability lookup",
      // Expansion related
      "planning to expand",
      "future coverage",
      "upcoming locations",
      "new service areas",
      "expansion plans",
      // Rural vs Urban
      "rural area coverage",
      "urban service areas",
      "metropolitan coverage",
      "suburban availability",
      "township services",
      // International
      "international coverage",
      "cross-border service",
      "neighboring countries",
      "SADC region coverage",
      "African coverage",
      // Service types
      "full service areas",
      "partial coverage areas",
      "limited service regions",
      "premium service locations",
      "basic service areas",
      // Distance related
      "service within radius",
      "coverage distance",
      "how far do you operate",
      "service boundaries",
      "distance limitations",
      // Access queries
      "can access from",
      "service accessibility",
      "access points",
      "service locations near me",
      "nearest service point",
      // Time-based availability
      "24/7 service areas",
      "operating hours by region",
      "service timing by location",
      "availability schedule",
      // Specific scenarios
      "emergency service areas",
      "special event coverage",
      "temporary service locations",
      "seasonal availability",
      // Combined queries
      "cost and availability",
      "service types and areas",
      "coverage and support",
      "availability and restrictions",
    ],
    responses: [
      "Yes, our service is available across South Africa!",
      "We currently operate in several regions. Please share your location to confirm.",
      "Our services are widely available. Let me know your area, and I'll check for you.",
      "We have extensive coverage across South Africa's major cities and provinces.",
      "Our service network covers both urban and rural areas throughout South Africa.",
      "We operate in all nine provinces of South Africa. Please specify your location for detailed information.",
      "Coverage varies by region. Share your location, and I'll provide specific availability details.",
      "Our service is available nationwide, with specialized coverage in metropolitan areas.",
      "We're constantly expanding our coverage. Let me check the latest availability in your area.",
      "While we serve most of South Africa, some features may vary by location. Let me check for your specific area.",
    ],
  },
  {
    intent: "report_issue",
    patterns: [
      // Basic issue reporting
      "I want to report a problem",
      "There's an issue with my account",
      "Something's not working",
      "I'm facing a technical problem",
      "How do I report a bug",
      // Technical issues
      "system error",
      "technical difficulties",
      "application error",
      "website not working",
      "app malfunction",
      "platform issues",
      "software problem",
      "system bug",
      // Account problems
      "account not working",
      "profile issues",
      "account error message",
      "problems with my account",
      "account malfunction",
      "account access issues",
      "profile glitch",
      // Feature specific
      "feature not working",
      "broken functionality",
      "function error",
      "tool not working",
      "service malfunction",
      "option not available",
      "button not working",
      // Performance issues
      "slow performance",
      "system lag",
      "loading problems",
      "freezing issues",
      "app crashes",
      "website timeout",
      "slow response time",
      // Display problems
      "display error",
      "screen issues",
      "visual bug",
      "interface problem",
      "layout broken",
      "formatting issues",
      "rendering problem",
      // Data related
      "data not showing",
      "missing information",
      "incorrect data",
      "data error",
      "wrong information displayed",
      "data synchronization issue",
      "information mismatch",
      // Login related
      "login problems",
      "sign-in issues",
      "authentication error",
      "verification problem",
      "credentials not working",
      "access denied issue",
      // Payment issues
      "payment error",
      "transaction problem",
      "billing issue",
      "payment processing error",
      "payment declined issue",
      "payment verification problem",
      // Security concerns
      "security issue",
      "privacy concern",
      "suspicious activity",
      "account security problem",
      "unauthorized access",
      "security breach",
      // Mobile specific
      "mobile app issue",
      "app not responding",
      "smartphone app problem",
      "tablet compatibility issue",
      "mobile version bug",
      // Browser specific
      "browser compatibility",
      "website display issue",
      "browser error",
      "page loading problem",
      "web access issue",
      // Urgent issues
      "critical error",
      "urgent problem",
      "emergency issue",
      "immediate attention needed",
      "severe malfunction",
      // Communication issues
      "notification problem",
      "message not sent",
      "communication error",
      "alert system issue",
      "email notification problem",
      // Feature requests
      "missing feature",
      "feature suggestion",
      "improvement needed",
      "functionality request",
      "enhancement suggestion",
      // User experience
      "usability issue",
      "navigation problem",
      "user interface issue",
      "accessibility problem",
      "difficulty using service",
    ],
    responses: [
      "I'm sorry you're experiencing an issue. Let me help you resolve this right away. 😔",
      "You can report technical issues via the 'Support' section in your dashboard.",
      "Thanks for bringing this up. Please provide more details so I can help.",
      "I understand you're experiencing an issue. Could you please specify what's not working correctly?",
      "Let me help you resolve this. Can you describe what happened and when you first noticed the problem?",
      "I'll guide you through our issue resolution process. First, please share more details about what you're experiencing.",
      "Your feedback helps us improve. Please explain the issue in detail, and I'll ensure it gets addressed.",
      "We take all reported issues seriously. Please provide specific details about what's not working as expected.",
      "I'm here to help resolve any problems. Could you share more information about what's happening?",
      "To better assist you, please describe: 1) What's not working 2) When it started 3) What you were trying to do",
    ],
  },
  {
    intent: "query_status",
    patterns: [
      // Basic status checks
      "What's the status of my query",
      "Can you check my request",
      "Has my issue been resolved",
      "Update on my ticket",
      "Is my query still pending",
      // Reference number based
      "check status with reference",
      "query reference status",
      "ticket number status",
      "case number update",
      "reference number check",
      "status of ticket number",
      // Time based queries
      "how long until resolution",
      "query processing time",
      "expected completion time",
      "resolution timeline",
      "waiting time for query",
      "query duration update",
      // Progress related
      "current progress",
      "query progress update",
      "stage of my request",
      "request progress status",
      "how far along is my query",
      "progress on my case",
      // Priority status
      "priority status check",
      "urgent query status",
      "priority request update",
      "emergency ticket status",
      "high priority case status",
      // Resolution checks
      "is it resolved yet",
      "resolution status",
      "problem fixed yet",
      "solution status",
      "issue resolution check",
      "completion status",
      // Assignment queries
      "who's handling my query",
      "assigned agent status",
      "support team progress",
      "case handler update",
      "assigned department status",
      // Multiple queries
      "all open queries",
      "active requests status",
      "pending tickets",
      "multiple case status",
      "all ticket updates",
      // Historical queries
      "past query status",
      "previous ticket status",
      "historical request check",
      "old case status",
      "resolved ticket history",
      // Specific department
      "technical query status",
      "billing ticket update",
      "support request progress",
      "sales query status",
      "account issue progress",
      // Status notifications
      "status alert settings",
      "notification preferences",
      "update alerts",
      "status notification check",
      "progress notifications",
      // Escalation status
      "escalated case status",
      "escalation progress",
      "elevated ticket status",
      "priority escalation update",
      "escalated query progress",
      // Follow-up queries
      "follow up status",
      "subsequent query check",
      "related ticket status",
      "linked case progress",
      "follow-up request update",
      // Status changes
      "status change history",
      "recent status updates",
      "status modification log",
      "progress changes",
      "status timeline",
      // Specific actions
      "reopen status check",
      "merged ticket status",
      "split query progress",
      "transferred case status",
      "reassigned ticket update",
      // System status
      "automated response status",
      "system ticket progress",
      "auto-generated case status",
      "system update check",
      "automated resolution status",
    ],
    responses: [
      "You can check the status of your query in the 'My Queries' section.",
      "Let me check that for you. Please provide your query reference number.",
      "To track your query, head to the dashboard and view 'My Queries'.",
      "I can help you check your query status. Could you share the reference number?",
      "Your query status can be viewed in real-time through the 'Query Tracking' dashboard.",
      "For detailed status updates, please visit the 'Query Management' section of your account.",
      "I'll help you track your query. Please provide either your reference number or query details.",
      "Status updates are available in your dashboard under 'Active Queries'.",
      "You can monitor your query progress in real-time through our tracking system.",
      "For the most current status, please check the 'Query Status' section or provide your reference number.",
    ],
  },
  {
    intent: "payment_help",
    patterns: [
      // Basic payment queries
      "How do I make a payment",
      "Can I pay online",
      "Help me with payment",
      "Where do I pay my bill",
      "Payment options",
      // Payment methods
      "payment methods available",
      "ways to pay",
      "accepted payment types",
      "payment channels",
      "payment platforms supported",
      "payment mode options",
      // Online payments
      "online payment process",
      "digital payment options",
      "electronic payment",
      "internet banking payment",
      "web payment procedure",
      "mobile payment options",
      // Card payments
      "credit card payment",
      "debit card payment",
      "card payment process",
      "how to pay by card",
      "card payment options",
      "save card details",
      // Bank transfers
      "bank transfer details",
      "EFT payment",
      "direct deposit",
      "wire transfer",
      "banking details",
      "bank account for payment",
      // Mobile payments
      "pay via app",
      "mobile wallet payment",
      "smartphone payment",
      "payment app options",
      "digital wallet accepted",
      // Payment timing
      "when to pay",
      "payment due date",
      "payment schedule",
      "payment deadline",
      "payment timeframe",
      // Automatic payments
      "set up auto-payment",
      "recurring payment",
      "automatic debit",
      "scheduled payments",
      "payment automation",
      // Payment verification
      "payment confirmation",
      "verify payment",
      "payment receipt",
      "proof of payment",
      "payment acknowledgment",
      // Payment issues
      "payment not going through",
      "payment failed",
      "payment declined",
      "payment error",
      "payment problem",
      // International payments
      "international payment",
      "foreign currency payment",
      "overseas payment",
      "cross-border payment",
      "global payment options",
      // Payment limits
      "payment limits",
      "maximum payment amount",
      "minimum payment required",
      "payment restrictions",
      "transaction limits",
      // Payment security
      "secure payment",
      "payment safety",
      "protected payment",
      "payment security measures",
      "safe transaction methods",
      // Payment processing
      "payment processing time",
      "how long to process",
      "payment clearing time",
      "processing duration",
      "payment settlement time",
      // Payment history
      "view payment history",
      "past payments",
      "payment records",
      "transaction history",
      "payment log",
      // Payment notifications
      "payment alerts",
      "payment reminders",
      "payment confirmation email",
      "payment notification settings",
      "payment status updates",
      // Partial payments
      "partial payment options",
      "pay in installments",
      "split payment",
      "payment plan",
      "staggered payment",
    ],
    responses: [
      "You can make payments directly from your dashboard under the 'Payments' section.",
      "We offer various payment methods online. Please go to 'Payments' to proceed.",
      "Need help with payments? Just head over to your dashboard and click 'Payments'.",
      "To make a payment, log into your account and select 'Make Payment' from the dashboard.",
      "We accept multiple payment methods including credit cards, EFT, and digital wallets. Visit the 'Payment Options' page.",
      "For secure online payments, navigate to the 'Payments' section in your account dashboard.",
      "Setting up automatic payments is easy - just visit 'Payment Settings' in your dashboard.",
      "You can view all payment options and process a payment through our secure payment gateway.",
      "Need to make a payment? Click 'Pay Now' in your dashboard for instant secure payment processing.",
      "For payment assistance, visit the 'Payment Help Center' or proceed to make a payment via your dashboard.",
    ],
  },
  {
    intent: "feedback",
    patterns: [
      // Basic feedback requests
      "I'd like to give feedback",
      "Can I share my thoughts",
      "I have some suggestions",
      "Where can I leave feedback",
      "I want to review your service",
      // Conversational feedback requests
      "can I tell you what I think",
      "mind if I share my opinion",
      "would like to share my experience",
      "let me tell you about my experience",
      "got some thoughts to share",
      "want to tell you something",
      "need to share my experience",
      "like to give you my thoughts",
      "want to let you know about",
      // Feedback about specific experiences
      "about my recent experience",
      "regarding my last interaction",
      "about the service I received",
      "concerning my recent usage",
      "about my interaction today",
      "regarding your service",
      "about using your platform",
      "about my account experience",
      // Compliments and positive feedback
      "wanted to say thank you",
      "really impressed with",
      "great job with the",
      "appreciate the service",
      "excellent work on",
      "loving the new",
      "really happy with",
      "impressed by your",
      // Constructive feedback
      "could be better if",
      "needs improvement in",
      "should consider changing",
      "might want to look at",
      "could improve by",
      "suggestion about your",
      "think you should",
      "would be better with",
      // Rating intentions
      "want to rate your",
      "give you stars for",
      "rate this service",
      "leave a rating",
      "score this experience",
      "rate my interaction",
      // Survey related
      "complete a survey",
      "fill out feedback form",
      "take your survey",
      "answer feedback questions",
      "participate in survey",
      // Specific aspect feedback
      "feedback about your website",
      "about your mobile app",
      "about your customer service",
      "regarding your platform",
      "about your interface",
      "about your payment system",
      // Emotional feedback
      "not happy with",
      "really satisfied with",
      "disappointed in",
      "pleased with",
      "frustrated with",
      "delighted by",
      // Feature feedback
      "suggestion for a feature",
      "new feature idea",
      "missing functionality",
      "would like to see",
      "should add this",
      // Problem reporting
      "having trouble with",
      "experiencing issues with",
      "problem with your",
      "not working properly",
      "issue with the",
      // General comments
      "just wanted to say",
      "thought you should know",
      "wanted to mention",
      "quick comment about",
      "brief feedback about",
      // Time-sensitive feedback
      "feedback from today",
      "about earlier today",
      "from my recent visit",
      "from yesterday's experience",
      "about this morning's",
      // Process feedback
      "process improvement",
      "workflow feedback",
      "system feedback",
      "procedure suggestions",
      "operation feedback",
      // Feature requests
      "request new feature",
      "feature suggestion",
      "new functionality idea",
      "product enhancement",
      "service addition",
      // Bug reports
      "report issue feedback",
      "bug feedback",
      "error report",
      "problem feedback",
      "technical issue review",
      // Anonymous feedback
      "anonymous feedback",
      "private feedback",
      "confidential suggestions",
      "discreet feedback",
      "unnamed review",
      // Feedback requests
      "where's your feedback form",
      "how to submit feedback",
      "feedback submission process",
      "way to give feedback",
      "feedback options",
    ],
    responses: [
      "Thank you for your feedback! We really appreciate your input. 😊",
      "We value your opinion! Thank you for helping us improve.",
      "Thank you for taking the time to provide feedback! 😊",
      "I appreciate you sharing your thoughts with us.",
      "Your feedback is important to us. Thank you for helping us serve you better! 😊",
    ],
  },
  // Add more intents specific to your business
];
