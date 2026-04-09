const onboardingSections = [
  {
    id: 1,
    title: 'Getting Started',
    description: 'Create your TranslaTalk account in just a few steps. Sign up with your email or phone number, set up your profile, and start connecting with friends around the world.',
    steps: [
      { title: 'Visit the Sign-Up Page', description: 'Open TranslaTalk and tap "Create Account" on the welcome screen.' },
      { title: 'Enter Your Email or Phone', description: 'Provide a valid email address or phone number for account registration.' },
      { title: 'Create a Password', description: 'Set a strong password combining uppercase, lowercase, numbers, and symbols.' },
      { title: 'Complete Your Profile', description: 'Add your name, profile picture, and bio to personalize your account.' },
      { title: 'Verify Your Identity', description: 'Check your email or SMS for a verification code and confirm it.' },
    ],
    images: [
    //   { source: require('../../assets/userManual/signUp.png'), caption: 'Sign-up screen with account creation options' },
    ],
    keyPoints: [
      'Choose a strong, unique password for account security',
      'Verify your email or phone number to unlock all features',
      'Complete your profile to help friends find you easily',
      'Set a profile picture for better community engagement',
    ],
  },
  {
    id: 2,
    title: 'Login & Profile Setup',
    description: 'Learn how to securely access your account and set up your profile. Keep your login credentials safe and personalize your profile information.',
    steps: [
      { title: 'Open the Login Page', description: 'Launch TranslaTalk and navigate to the login section.' },
      { title: 'Enter Credentials', description: 'Input your email/phone number and password.' },
      { title: 'Two-Factor Authentication (if enabled)', description: 'Complete additional security verification if required.' },
      { title: 'Access Your Dashboard', description: 'You\'re now logged in and ready to explore TranslaTalk.' },
    ],
    images: [
    //   { source: require('../../assets/userManual/logIn.png'), caption: 'Login page interface' },
    ],
    keyPoints: [
      'Never share your password with anyone',
      'Use a secure password manager to store credentials',
      'Enable two-factor authentication for extra security',
      'Log out on shared devices after use',
    ],
  },
  {
    id: 3,
    title: 'Profile Management',
    description: 'Manage your profile settings, customize your appearance, and control your privacy preferences.',
    features: [
      { icon: 'person-circle', title: 'Profile Picture', description: 'Upload and update your profile photo from device or camera.' },
      { icon: 'create', title: 'Edit Bio', description: 'Add a personal bio to let others know more about you.' },
      { icon: 'settings', title: 'Privacy Settings', description: 'Control who can see your profile, messages, and activity status.' },
      { icon: 'notifications', title: 'Notification Preferences', description: 'Customize alerts for messages, calls, and other activities.' },
    ],
    images: [
    //   { source: require('../../assets/userManual/profile.png'), caption: 'User profile view with personal information' },
    ],
  },
  {
    id: 4,
    title: 'Adding Contacts & Friends',
    description: 'Connect with friends and build your contact list. Add people by username, phone number, or from your existing contacts.',
    steps: [
      { title: 'Tap Add Contact Button', description: 'Navigate to contacts section and click the add button.' },
      { title: 'Search for Friends', description: 'Enter their username, email, or phone number to find them.' },
      { title: 'Send Friend Request', description: 'Send a friend request and wait for their confirmation.' },
      { title: 'Start Chatting', description: 'Once accepted, begin messaging with your new friend.' },
    ],
    images: [
    //   { source: require('../../assets/userManual/addContact01.jpeg'), caption: 'Step 1: Contact search interface' },
    //   { source: require('../../assets/userManual/addContact02.jpeg'), caption: 'Step 2: Friend request preview' },
    //   { source: require('../../assets/userManual/addContact03.jpeg'), caption: 'Step 3: Confirmation and messaging' },
    ],
  },
  {
    id: 5,
    title: 'Chat Interface & Message Status',
    description: 'Understanding message status indicators helps you know if your messages have been delivered and read. TranslaTalk uses a traffic light system.',
    keyPoints: [
      '🔴 Red: Message sent to your device (local status)',
      '🟡 Yellow: Message delivered to the server',
      '🟢 Green: Message has been read by recipient',
      'Timestamps show when messages were sent and read',
    ],
    images: [
    //   { source: require('../../assets/userManual/trafficLight.jpeg'), caption: 'Message status indicators - Red, Yellow, Green system' },
    ],
    features: [
      { icon: 'checkmark-done', title: 'Message Delivery', description: 'Watch your messages progress from sent to delivered to read.' },
      { icon: 'time', title: 'Timestamps', description: 'See exactly when messages were sent and read.' },
      { icon: 'eye', title: 'Read Receipts', description: 'Know when your message has been seen by the recipient.' },
    ],
  },
];

export default onboardingSections;