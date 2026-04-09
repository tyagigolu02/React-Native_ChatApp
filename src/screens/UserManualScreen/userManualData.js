export const userManualSections = [
  {
    id: 1,
    title: 'Getting Started',
    description:
      'Create your TranslaTalk account in just a few steps. Sign up with your email or phone number, set up your profile, and start connecting with friends around the world.',
    steps: [
      {
        title: 'Visit the Sign-Up Page',
        description: 'Open TranslaTalk and tap "Create Account" on the welcome screen.',
      },
      {
        title: 'Enter Your Email or Phone',
        description: 'Provide a valid email address or phone number for account registration.',
      },
      {
        title: 'Create a Password',
        description: 'Set a strong password combining uppercase, lowercase, numbers, and symbols.',
      },
      {
        title: 'Complete Your Profile',
        description: 'Add your name, profile picture, and bio to personalize your account.',
      },
      {
        title: 'Verify Your Identity',
        description: 'Check your email or SMS for a verification code and confirm it.',
      },
    ],
    images: [
      {
        source: require('../../../assets/userManual/signUp.png'),
        caption: 'Sign-up screen with account creation options',
      },
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
    description:
      'Learn how to securely access your account and set up your profile. Keep your login credentials safe and personalize your profile information.',
    steps: [
      {
        title: 'Open the Login Page',
        description: 'Launch TranslaTalk and navigate to the login section.',
      },
      {
        title: 'Enter Credentials',
        description: 'Input your email/phone number and password.',
      },
      {
        title: 'Two-Factor Authentication (if enabled)',
        description: 'Complete additional security verification if required.',
      },
      {
        title: 'Access Your Dashboard',
        description: 'You\'re now logged in and ready to explore TranslaTalk.',
      },
    ],
    images: [
      {
        source: require('../../../assets/userManual/logIn.png'),
        caption: 'Login page interface',
      },
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
    description:
      'Manage your profile settings, customize your appearance, and control your privacy preferences.',
    features: [
      {
        icon: 'person-circle',
        title: 'Profile Picture',
        description: 'Upload and update your profile photo from device or camera.',
      },
      {
        icon: 'create',
        title: 'Edit Bio',
        description: 'Add a personal bio to let others know more about you.',
      },
      {
        icon: 'settings',
        title: 'Privacy Settings',
        description: 'Control who can see your profile, messages, and activity status.',
      },
      {
        icon: 'notifications',
        title: 'Notification Preferences',
        description: 'Customize alerts for messages, calls, and other activities.',
      },
    ],
    images: [
      {
        source: require('../../../assets/userManual/profile.png'),
        caption: 'User profile view with personal information',
      },
    ],
  },

  {
    id: 4,
    title: 'Adding Contacts & Friends',
    description:
      'Connect with friends and build your contact list. Add people by username, phone number, or from your existing contacts.',
    steps: [
      {
        title: 'Tap Add Contact Button',
        description: 'Navigate to contacts section and click the add button.',
      },
      {
        title: 'Search for Friends',
        description: 'Enter their username, email, or phone number to find them.',
      },
      {
        title: 'Send Friend Request',
        description: 'Send a friend request and wait for their confirmation.',
      },
      {
        title: 'Start Chatting',
        description: 'Once accepted, begin messaging with your new friend.',
      },
    ],
    images: [
      {
        source: require('../../../assets/userManual/addContact01.jpeg'),
        caption: 'Step 1: Contact search interface',
      },
      {
        source: require('../../../assets/userManual/addContact02.jpeg'),
        caption: 'Step 2: Friend request preview',
      },
      {
        source: require('../../../assets/userManual/addContact03.jpeg'),
        caption: 'Step 3: Confirmation and messaging',
      },
    ],
  },

  {
    id: 5,
    title: 'Chat Interface & Message Status',
    description:
      'Understanding message status indicators helps you know if your messages have been delivered and read. TranslaTalk uses a traffic light system.',
    keyPoints: [
      '🔴 Red: Message sent to your device (local status)',
      '🟡 Yellow: Message delivered to the server',
      '🟢 Green: Message has been read by recipient',
      'Timestamps show when messages were sent and read',
    ],
    images: [
      {
        source: require('../../../assets/userManual/trafficLight.jpeg'),
        caption: 'Message status indicators - Red, Yellow, Green system',
      },
    ],
    features: [
      {
        icon: 'checkmark-done',
        title: 'Message Delivery',
        description: 'Watch your messages progress from sent to delivered to read.',
      },
      {
        icon: 'time',
        title: 'Timestamps',
        description: 'See exactly when messages were sent and read.',
      },
      {
        icon: 'eye',
        title: 'Read Receipts',
        description: 'Know when your message has been seen by the recipient.',
      },
    ],
  },

  {
    id: 6,
    title: 'Real-Time Translation',
    description:
      'Break language barriers with TranslaTalk\'s built-in real-time translation feature. Translate messages instantly into your preferred language.',
    steps: [
      {
        title: 'Receive a Message',
        description: 'Get a message in a different language.',
      },
      {
        title: 'Tap Translate Button',
        description: 'Click the translate icon on the message.',
      },
      {
        title: 'View Translation',
        description: 'See the message translated to your selected language.',
      },
      {
        title: 'Auto-Translate (Optional)',
        description: 'Enable auto-translation in settings for automatic translation of all incoming messages.',
      },
    ],
    images: [
      {
        source: require('../../../assets/userManual/langTrans.jpeg'),
        caption: 'Translation feature interface',
      },
      {
        source: require('../../../assets/userManual/translated.png'),
        caption: 'Translated message display',
      },
    ],
    keyPoints: [
      'Supports 50+ languages for translation',
      'Translation happens instantly on device',
      'Original message remains visible alongside translation',
      'Enable auto-translate for hands-free communication',
    ],
  },

  {
    id: 7,
    title: 'Scheduled Messages',
    description:
      'Schedule messages to be sent at a specific time. Perfect for sending birthday wishes, reminders, or messages to friends in different time zones.',
    steps: [
      {
        title: 'Compose Your Message',
        description: 'Type the message you want to schedule.',
      },
      {
        title: 'Tap Schedule Option',
        description: 'Instead of Send, tap the schedule button.',
      },
      {
        title: 'Select Date & Time',
        description: 'Choose when you want the message to be sent.',
      },
      {
        title: 'Confirm Schedule',
        description: 'Review and confirm your scheduled message.',
      },
    ],
    images: [
      {
        source: require('../../../assets/userManual/scheduleMsg.jpeg'),
        caption: 'Message scheduling interface',
      },
    ],
    features: [
      {
        icon: 'calendar',
        title: 'Date Picker',
        description: 'Select any future date for your scheduled message.',
      },
      {
        icon: 'time',
        title: 'Time Selection',
        description: 'Choose the exact time for message delivery.',
      },
      {
        icon: 'checkmark-done',
        title: 'Confirmation',
        description: 'View all scheduled messages and edit them as needed.',
      },
    ],
  },

  {
    id: 8,
    title: 'Personal Vault',
    description:
      'Store your private messages, photos, and documents in a secure personal vault. Access your vault anytime with PIN or biometric authentication.',
    features: [
      {
        icon: 'lock-closed',
        title: 'End-to-End Encryption',
        description: 'All vault contents are encrypted and secure.',
      },
      {
        icon: 'finger-print',
        title: 'Biometric Lock',
        description: 'Use fingerprint or face recognition to access your vault.',
      },
      {
        icon: 'image',
        title: 'Media Storage',
        description: 'Store photos, videos, and documents privately.',
      },
      {
        icon: 'search',
        title: 'Quick Search',
        description: 'Easily find items stored in your vault.',
      },
    ],
    images: [
      {
        source: require('../../../assets/userManual/vault.jpeg'),
        caption: 'Personal vault with secure storage options',
      },
    ],
  },

  {
    id: 9,
    title: 'Media & Attachments',
    description:
      'Share photos, videos, documents, and files with your contacts. All media is encrypted and secure.',
    steps: [
      {
        title: 'Open Chat',
        description: 'Start a conversation with a contact.',
      },
      {
        title: 'Tap Attachment Icon',
        description: 'Click the + or attachment button.',
      },
      {
        title: 'Select Media',
        description: 'Choose photos, videos, documents, or other files.',
      },
      {
        title: 'Add Caption (Optional)',
        description: 'Add a message to accompany the attachment.',
      },
      {
        title: 'Send',
        description: 'Tap send to share the media with your contact.',
      },
    ],
    images: [
      {
        source: require('../../../assets/userManual/attachements.png'),
        caption: 'Media attachment options',
      },
    ],
    keyPoints: [
      'Maximum file size: 100MB per attachment',
      'Supported formats: Images, videos, documents, audio',
      'All media is encrypted end-to-end',
      'Recipients can save or forward attachments',
    ],
  },

  {
    id: 10,
    title: 'Voice & Video Calls',
    description:
      'Make crystal-clear voice and video calls with your contacts. Enjoy high-quality audio and video with end-to-end encryption.',
    features: [
      {
        icon: 'call',
        title: 'Voice Calls',
        description: 'Crystal-clear audio calls with noise reduction.',
      },
      {
        icon: 'videocam',
        title: 'Video Calls',
        description: 'High-definition video calls with auto-focus and stabilization.',
      },
      {
        icon: 'people',
        title: 'Group Calls',
        description: 'Call multiple contacts at once (up to 10 participants).',
      },
      {
        icon: 'mic-off',
        title: 'Audio Controls',
        description: 'Mute/unmute, speaker controls, and call recording.',
      },
    ],
    images: [
      {
        source: require('../../../assets/userManual/voice call.png'),
        caption: 'Voice and video call interface',
      },
    ],
  },

  {
    id: 11,
    title: 'Settings & Customization',
    description:
      'Customize your TranslaTalk experience with various settings for notifications, privacy, appearance, and more.',
    features: [
      {
        icon: 'moon',
        title: 'Dark/Light Theme',
        description: 'Switch between dark and light modes for comfortable viewing.',
      },
      {
        icon: 'notifications',
        title: 'Notification Settings',
        description: 'Control alerts for messages, calls, and other events.',
      },
      {
        icon: 'language',
        title: 'Language Preferences',
        description: 'Select your preferred language for the app interface.',
      },
      {
        icon: 'volume-mute',
        title: 'Sound & Vibration',
        description: 'Customize notification sounds and vibration patterns.',
      },
    ],
    images: [
      {
        source: require('../../../assets/userManual/settings01.jpeg'),
        caption: 'Settings page - General options',
      },
      {
        source: require('../../../assets/userManual/settings02.jpeg'),
        caption: 'Settings page - Privacy options',
      },
      {
        source: require('../../../assets/userManual/settings03.jpeg'),
        caption: 'Settings page - Notification options',
      },
    ],
  },

  {
    id: 12,
    title: 'Privacy & Security',
    description:
      'TranslaTalk prioritizes your privacy and security. All communications are encrypted end-to-end.',
    keyPoints: [
      'End-to-End Encryption: All messages, calls, and media are encrypted',
      'Privacy Controls: Choose who can contact you and see your status',
      'Two-Factor Authentication: Add extra security to your account',
      'Data Privacy: Your data is never sold to third parties',
      'Secure Deletion: Delete messages and media permanently',
      'Block & Report: Block users and report inappropriate behavior',
    ],
    features: [
      {
        icon: 'lock-closed',
        title: 'Encryption',
        description: 'Military-grade encryption protects all your communications.',
      },
      {
        icon: 'shield-checkmark',
        title: 'Verification',
        description: 'Verify contact identities for extra security.',
      },
      {
        icon: 'warning',
        title: 'Reporting',
        description: 'Report abuse and safety concerns to our team.',
      },
    ],
  },

  {
    id: 13,
    title: 'Troubleshooting & Support',
    description:
      'Common issues and how to solve them. If you need further assistance, contact our support team.',
    keyPoints: [
      'Cannot receive messages? Check your internet connection and notification settings',
      'Messages not sending? Verify you have an active data connection',
      'Poor call quality? Switch to a stable WiFi network for best results',
      'Translation errors? Try refreshing or selecting a different language',
      'App crashes? Update to the latest version from app store',
      'Forgot password? Use the "Forgot Password" option on login screen',
    ],
    features: [
      {
        icon: 'help-circle',
        title: 'Help Center',
        description: 'Browse frequently asked questions and guides.',
      },
      {
        icon: 'chatbubbles',
        title: 'Contact Support',
        description: 'Reach our support team for assistance.',
      },
      {
        icon: 'refresh-circle',
        title: 'Check for Updates',
        description: 'Update to the latest version for bug fixes and improvements.',
      },
    ],
  },

  {
    id: 14,
    title: 'Voice & Video Calls',
    description:
      'Make high-quality voice and video calls with friends. Enjoy crystal-clear audio and video with end-to-end encryption.',
    steps: [
      {
        title: 'Open a Chat',
        description: 'Select a contact or group to initiate a call.',
      },
      {
        title: 'Tap the Call Icon',
        description: 'Press the phone icon for voice call or camera icon for video call.',
      },
      {
        title: 'Wait for Answer',
        description: 'Wait for the recipient to accept your call invitation.',
      },
      {
        title: 'End the Call',
        description: 'Tap the end call button (red icon) to disconnect.',
      },
    ],
    // ADD IMAGE: Screenshot of voice call interface showing call buttons and duration
    // ADD IMAGE: Screenshot of video call with participant video stream
    // ADD IMAGE: Screenshot of call ended confirmation
    images: [],
    keyPoints: [
      'Ensure you have a stable internet connection for quality calls',
      'All calls are encrypted for maximum privacy and security',
      'You can switch between audio and video during a call',
      'Group calls support up to 10 participants simultaneously',
    ],
  },

  {
    id: 15,
    title: 'Group Chats & Conversations',
    description:
      'Create and manage group chats with multiple participants. Share files, schedule events, and collaborate with your team.',
    steps: [
      {
        title: 'Create a New Group',
        description: 'Tap the + button and select "Create Group Chat".',
      },
      {
        title: 'Add Participants',
        description: 'Search and select contacts to add to your group.',
      },
      {
        title: 'Set Group Name & Icon',
        description: 'Choose a name and upload a group icon or emoji.',
      },
      {
        title: 'Invite via Link',
        description: 'Share a unique group link with others to invite them.',
      },
    ],
    // ADD IMAGE: Screenshot of group chat creation screen
    // ADD IMAGE: Screenshot of participant selection interface
    // ADD IMAGE: Screenshot of group settings and member list
    // ADD IMAGE: Screenshot of shared group link
    images: [],
    keyPoints: [
      'Group admins can manage members, settings, and content',
      'Mute notifications for groups without leaving the conversation',
      'Pin important messages for easy reference',
      'Export group chat history for backup',
    ],
  },

  {
    id: 16,
    title: 'Message Search & Archive',
    description:
      'Quickly find specific messages and archive old conversations. Keep your chat list organized with powerful search features.',
    steps: [
      {
        title: 'Open Search',
        description: 'Tap the search icon at the top of your chat list.',
      },
      {
        title: 'Enter Keywords',
        description: 'Type the message content, contact name, or date to search.',
      },
      {
        title: 'Filter Results',
        description: 'Use filters to narrow down by date, sender, or message type.',
      },
      {
        title: 'Archive Conversations',
        description: 'Swipe left on a chat and tap Archive to hide it from main list.',
      },
    ],
    // ADD IMAGE: Screenshot of search bar with search field active
    // ADD IMAGE: Screenshot of search results displaying matched messages
    // ADD IMAGE: Screenshot of search filter options
    // ADD IMAGE: Screenshot of archive action menu
    images: [],
    keyPoints: [
      'Search works across all your messages including old archived chats',
      'Archive keeps messages safe without deleting them',
      'Use advanced search operators for complex queries',
      'View archived chats by scrolling to the bottom of chat list',
    ],
  },

  {
    id: 17,
    title: 'Settings & Preferences',
    description:
      'Customize your TranslaTalk experience with personalized settings. Adjust notifications, privacy, appearance, and more.',
    steps: [
      {
        title: 'Access Settings',
        description: 'Tap the menu icon and select "Settings".',
      },
      {
        title: 'Choose Category',
        description: 'Navigate to Account, Privacy, Notifications, or Appearance sections.',
      },
      {
        title: 'Adjust Preferences',
        description: 'Toggle features on/off and select your preferred options.',
      },
      {
        title: 'Save Changes',
        description: 'Changes are automatically saved to your account.',
      },
    ],
    // ADD IMAGE: Screenshot of settings main menu
    // ADD IMAGE: Screenshot of privacy settings options
    // ADD IMAGE: Screenshot of notification preferences
    // ADD IMAGE: Screenshot of appearance/theme selection
    images: [],
    keyPoints: [
      'Customize notification sounds and vibration patterns',
      'Control who can see your profile and online status',
      'Switch between light, dark, and auto theme modes',
      'Manage app permissions for camera, microphone, and storage',
    ],
  },

  {
    id: 18,
    title: 'Account Security & Privacy',
    description:
      'Protect your account with strong security measures. Enable two-factor authentication and manage your privacy settings.',
    steps: [
      {
        title: 'Enable Two-Factor Authentication',
        description: 'Go to Settings > Security and toggle 2FA on.',
      },
      {
        title: 'Choose Verification Method',
        description: 'Select authenticator app, SMS, or email verification.',
      },
      {
        title: 'Manage Privacy Settings',
        description: 'Control who can contact you and see your information.',
      },
      {
        title: 'Review Active Sessions',
        description: 'Check logged-in devices and sign out from unused sessions.',
      },
    ],
    // ADD IMAGE: Screenshot of 2FA setup screen
    // ADD IMAGE: Screenshot of authentication method options
    // ADD IMAGE: Screenshot of privacy control toggles
    // ADD IMAGE: Screenshot of active sessions list
    images: [],
    keyPoints: [
      'Two-factor authentication significantly improves account security',
      'Never share your verification codes with anyone',
      'Regularly review active sessions to detect unauthorized access',
      'Block users to prevent them from contacting you',
    ],
  },

  {
    id: 19,
    title: 'File Sharing & Media',
    description:
      'Share photos, videos, documents, and files securely. Manage your media library and download important files.',
    steps: [
      {
        title: 'Share Media in Chat',
        description: 'Tap the + button next to the message field.',
      },
      {
        title: 'Select File Type',
        description: 'Choose photos, videos, documents, or location to share.',
      },
      {
        title: 'Add Captions',
        description: 'Write descriptions or captions before sending files.',
      },
      {
        title: 'Manage Downloads',
        description: 'Long-press files to save, forward, or delete them.',
      },
    ],
    // ADD IMAGE: Screenshot of file share menu with options
    // ADD IMAGE: Screenshot of photo/video selection interface
    // ADD IMAGE: Screenshot of file preview before sending
    // ADD IMAGE: Screenshot of saved files gallery
    images: [],
    keyPoints: [
      'All files are encrypted during transfer for security',
      'Set expiration time for shared files to auto-delete',
      'Create backup of important documents through downloads',
      'Share multiple files at once for convenience',
    ],
  },
];

