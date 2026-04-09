const helpFaqs = [
  {
    id: 1,
    question: 'How do I start a new conversation?',
    answer: 'Click "New Chat" or the "+" icon. Select a contact from your list or create a group chat by selecting multiple contacts. You can also start a direct message from someone\'s profile.',
    icon: 'chatbubbles',
  },
  {
    id: 2,
    question: 'How does real-time translation work?',
    answer: 'Our app uses advanced translation APIs to instantly translate messages. Select your target language in the chat header, and all messages will be automatically translated. We support 100+ languages for both text and audio translation.',
    icon: 'language',
  },
  {
    id: 3,
    question: 'How do I make voice and video calls?',
    answer: 'Open a chat and click the phone icon (for voice) or video camera icon (for video). During calls, you can toggle your microphone and camera, switch speakers, share your screen, and record the conversation.',
    icon: 'videocam',
  },
  {
    id: 4,
    question: 'Can I schedule messages?',
    answer: 'Yes! Click the clock icon in the message input area, set your desired date and time, compose your message, and send. The message will be automatically delivered at the scheduled time.',
    icon: 'time',
  },
  {
    id: 5,
    question: 'How do I change language settings?',
    answer: 'Go to Settings > Language Settings. Here you can select your source language and target language for translations. You can also enable or disable auto-translation on a per-conversation basis.',
    icon: 'settings',
  },
  {
    id: 6,
    question: 'How do I send photos, videos, and files?',
    answer: 'Click the paperclip icon in the message input area. You can select images, videos, documents, and audio files (maximum 10MB each). Add a caption before sending if desired.',
    icon: 'attach',
  },
  {
    id: 7,
    question: 'Is my data secure and private?',
    answer: 'Yes, absolutely. All messages and calls use end-to-end encryption. We implement robust security measures, authentication protocols, and privacy controls. Your data is never sold to third parties.',
    icon: 'shield-checkmark',
  },
  {
    id: 8,
    question: 'How do I block or report someone?',
    answer: 'Open someone\'s profile, scroll to Privacy Options, and click "Block". Alternatively, long-press a chat and select "Block". Manage your blocked contacts in Settings > Privacy & Security > Blocked Contacts.',
    icon: 'person-remove',
  },
  {
    id: 9,
    question: 'Can I delete messages after sending?',
    answer: 'Yes. Hover over or long-press a message, then click the delete icon. You can choose to "Delete for me" (only visible to you) or "Delete for everyone" (removes from recipient\'s chat too).',
    icon: 'trash',
  },
  {
    id: 10,
    question: 'How do I use reactions and emojis?',
    answer: 'Hover over a message and click the emoji icon to add a reaction. Use the emoji button (smiley face) in the message input area to access the full emoji picker and send emojis in your messages.',
    icon: 'happy',
  },
  {
    id: 11,
    question: 'What do message status indicators mean?',
    answer: 'Messages have three status indicators: 🔴 Sent (delivered to server), 🟡 Delivered (received by recipient), 🟢 Read (recipient has opened the message). These appear as colored dots next to the timestamp.',
    icon: 'checkmark-circle',
  },
  {
    id: 12,
    question: 'How do I customize notification sounds?',
    answer: 'Go to Settings > Notifications. Here you can toggle notifications on/off, select from multiple notification tones, and preview sounds before confirming your choice.',
    icon: 'notifications',
  },
  {
    id: 13,
    question: 'Can I use dark mode?',
    answer: 'Yes! Click the sun/moon icon in the top navigation bar to toggle between light and dark themes. Your preference is automatically saved and will persist across all your devices.',
    icon: 'moon',
  },
  {
    id: 14,
    question: 'How do I update my profile?',
    answer: 'Go to Settings > Profile. Here you can update your display name, profile picture, status message, and other personal information. Changes sync instantly across all your devices.',
    icon: 'person-circle',
  },
  {
    id: 15,
    question: 'What if I forgot my password?',
    answer: 'On the login page, click "Forgot Password" and enter your registered email address. You\'ll receive password reset instructions via email. Follow the link and create a new password.',
    icon: 'key',
  },
];

const helpResources = [
  {
    id: 'manual',
    title: 'User Manual',
    description: 'Complete guide to using TranslaTalk',
    icon: 'book',
    onPress: (navigation) => navigation.navigate('UserManual'),
    touchable: true,
  },
  {
    id: 'video',
    title: 'Video Tutorials',
    description: 'Learn with step-by-step videos',
    icon: 'videocam',
    touchable: false,
  },
];

const iconColors = [
  '#667eea',
  '#10b981',
  '#f59e0b',
  '#ef4444',
  '#3b82f6',
  '#8b5cf6',
  '#ec4899',
  '#06b6d4',
  '#6366f1',
  '#f97316',
  '#14b8a6',
  '#f43f5e',
  '#0ea5e9',
  '#a855f7',
  '#d946ef',
];

const useHelpScreen = ({ navigation }) => {
  const getIconColor = (index) => iconColors[index % iconColors.length];

  const handleContactSupport = () => {
    navigation.navigate('Feedback');
  };

  const handleAbout = () => {
    navigation.navigate('About');
  };

  const handleUserManual = () => {
    navigation.navigate('UserManual');
  };

  const resources = helpResources.map((resource) =>
    resource.id === 'manual'
      ? { ...resource, onPress: handleUserManual }
      : resource
  );

  return {
    faqs: helpFaqs,
    resources,
    getIconColor,
    handleContactSupport,
    handleAbout,
  };
};

export default useHelpScreen;
