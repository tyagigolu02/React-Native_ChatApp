const settingsSections = [
  {
    id: 11,
    title: 'Settings & Customization',
    description: 'Customize your TranslaTalk experience with various settings for notifications, privacy, appearance, and more.',
    features: [
      { icon: 'moon', title: 'Dark/Light Theme', description: 'Switch between dark and light modes for comfortable viewing.' },
      { icon: 'notifications', title: 'Notification Settings', description: 'Control alerts for messages, calls, and other events.' },
      { icon: 'language', title: 'Language Preferences', description: 'Select your preferred language for the app interface.' },
      { icon: 'volume-mute', title: 'Sound & Vibration', description: 'Customize notification sounds and vibration patterns.' },
    ],
    images: [
    //  { source: require('../../assets/userManual/settings01.jpeg'), caption: 'Settings page - General options' },
    //   { source: require('../../assets/userManual/settings02.jpeg'), caption: 'Settings page - Privacy options' },
    //  { source: require('../../assets/userManual/settings03.jpeg'), caption: 'Settings page - Notification options' },
    ],
  },
  {
    id: 12,
    title: 'Privacy & Security',
    description: 'TranslaTalk prioritizes your privacy and security. All communications are encrypted end-to-end.',
    keyPoints: [
      'End-to-End Encryption: All messages, calls, and media are encrypted',
      'Privacy Controls: Choose who can contact you and see your status',
      'Two-Factor Authentication: Add extra security to your account',
      'Data Privacy: Your data is never sold to third parties',
      'Secure Deletion: Delete messages and media permanently',
      'Block & Report: Block users and report inappropriate behavior',
    ],
    features: [
      { icon: 'lock-closed', title: 'Encryption', description: 'Military-grade encryption protects all your communications.' },
      { icon: 'shield-checkmark', title: 'Verification', description: 'Verify contact identities for extra security.' },
      { icon: 'warning', title: 'Reporting', description: 'Report abuse and safety concerns to our team.' },
    ],
  },
  {
    id: 13,
    title: 'Troubleshooting & Support',
    description: 'Common issues and how to solve them. If you need further assistance, contact our support team.',
    keyPoints: [
      'Cannot receive messages? Check your internet connection and notification settings',
      'Messages not sending? Verify you have an active data connection',
      'Poor call quality? Switch to a stable WiFi network for best results',
      'Translation errors? Try refreshing or selecting a different language',
      'App crashes? Update to the latest version from app store',
      'Forgot password? Use the "Forgot Password" option on login screen',
    ],
    features: [
      { icon: 'help-circle', title: 'Help Center', description: 'Browse frequently asked questions and guides.' },
      { icon: 'chatbubbles', title: 'Contact Support', description: 'Reach our support team for assistance.' },
      { icon: 'refresh-circle', title: 'Check for Updates', description: 'Update to the latest version for bug fixes and improvements.' },
    ],
  },
  {
    id: 14,
    title: 'Voice & Video Calls',
    description: 'Make high-quality voice and video calls with friends. Enjoy crystal-clear audio and video with end-to-end encryption.',
    steps: [
      { title: 'Open a Chat', description: 'Select a contact or group to initiate a call.' },
      { title: 'Tap the Call Icon', description: 'Press the phone icon for voice call or camera icon for video call.' },
      { title: 'Wait for Answer', description: 'Wait for the recipient to accept your call invitation.' },
      { title: 'End the Call', description: 'Tap the end call button (red icon) to disconnect.' },
    ],
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
    description: 'Create and manage group chats with multiple participants. Share files, schedule events, and collaborate with your team.',
    steps: [
      { title: 'Create a New Group', description: 'Tap the + button and select "Create Group Chat".' },
      { title: 'Add Participants', description: 'Search and select contacts to add to your group.' },
      { title: 'Set Group Name & Icon', description: 'Choose a name and upload a group icon or emoji.' },
      { title: 'Invite via Link', description: 'Share a unique group link with others to invite them.' },
    ],
    images: [],
    keyPoints: [
      'Group admins can manage members, settings, and content',
      'Mute notifications for groups without leaving the conversation',
      'Pin important messages for easy reference',
      'Export group chat history for backup',
    ],
  },
];

export default settingsSections;