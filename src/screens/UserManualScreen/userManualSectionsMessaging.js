const messagingSections = [
  {
    id: 6,
    title: 'Real-Time Translation',
    description: 'Break language barriers with TranslaTalk\'s built-in real-time translation feature. Translate messages instantly into your preferred language.',
    steps: [
      { title: 'Receive a Message', description: 'Get a message in a different language.' },
      { title: 'Tap Translate Button', description: 'Click the translate icon on the message.' },
      { title: 'View Translation', description: 'See the message translated to your selected language.' },
      { title: 'Auto-Translate (Optional)', description: 'Enable auto-translation in settings for automatic translation of all incoming messages.' },
    ],
    images: [
    //   { source: require('../../assets/userManual/langTrans.jpeg'), caption: 'Translation feature interface' },
    //   { source: require('../../assets/userManual/translated.png'), caption: 'Translated message display' },
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
    description: 'Schedule messages to be sent at a specific time. Perfect for sending birthday wishes, reminders, or messages to friends in different time zones.',
    steps: [
      { title: 'Compose Your Message', description: 'Type the message you want to schedule.' },
      { title: 'Tap Schedule Option', description: 'Instead of Send, tap the schedule button.' },
      { title: 'Select Date & Time', description: 'Choose when you want the message to be sent.' },
      { title: 'Confirm Schedule', description: 'Review and confirm your scheduled message.' },
    ],
    images: [
    //   { source: require('../../assets/userManual/scheduleMsg.jpeg'), caption: 'Message scheduling interface' },
    ],
    features: [
      { icon: 'calendar', title: 'Date Picker', description: 'Select any future date for your scheduled message.' },
      { icon: 'time', title: 'Time Selection', description: 'Choose the exact time for message delivery.' },
      { icon: 'checkmark-done', title: 'Confirmation', description: 'View all scheduled messages and edit them as needed.' },
    ],
  },
  {
    id: 8,
    title: 'Personal Vault',
    description: 'Store your private messages, photos, and documents in a secure personal vault. Access your vault anytime with PIN or biometric authentication.',
    features: [
      { icon: 'lock-closed', title: 'End-to-End Encryption', description: 'All vault contents are encrypted and secure.' },
      { icon: 'finger-print', title: 'Biometric Lock', description: 'Use fingerprint or face recognition to access your vault.' },
      { icon: 'image', title: 'Media Storage', description: 'Store photos, videos, and documents privately.' },
      { icon: 'search', title: 'Quick Search', description: 'Easily find items stored in your vault.' },
    ],
    images: [
    //   { source: require('../../assets/userManual/vault.jpeg'), caption: 'Personal vault with secure storage options' },
    ],
  },
  {
    id: 9,
    title: 'Media & Attachments',
    description: 'Share photos, videos, documents, and files with your contacts. All media is encrypted and secure.',
    steps: [
      { title: 'Open Chat', description: 'Start a conversation with a contact.' },
      { title: 'Tap Attachment Icon', description: 'Click the + or attachment button.' },
      { title: 'Select Media', description: 'Choose photos, videos, documents, or other files.' },
      { title: 'Add Caption (Optional)', description: 'Add a message to accompany the attachment.' },
      { title: 'Send', description: 'Tap send to share the media with your contact.' },
    ],
    images: [
    //   { source: require('../../assets/userManual/attachements.png'), caption: 'Media attachment options' },
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
    description: 'Make crystal-clear voice and video calls with your contacts. Enjoy high-quality audio and video with end-to-end encryption.',
    features: [
      { icon: 'call', title: 'Voice Calls', description: 'Crystal-clear audio calls with noise reduction.' },
      { icon: 'videocam', title: 'Video Calls', description: 'High-definition video calls with auto-focus and stabilization.' },
      { icon: 'people', title: 'Group Calls', description: 'Call multiple contacts at once (up to 10 participants).' },
      { icon: 'mic-off', title: 'Audio Controls', description: 'Mute/unmute, speaker controls, and call recording.' },
    ],
    images: [
    //   { source: require('../../assets/userManual/voice call.png'), caption: 'Voice and video call interface' },
    ],
  },
];

export default messagingSections;