import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from '../../context/ThemeContext';
import { useScreenTitle } from '../../context/ScreenTitleContext';
import { Ionicons } from '@expo/vector-icons';

const HelpScreen = ({ navigation }) => {
  useScreenTitle('TranslaTalk | Help');
  const { colors, isDark } = useTheme();

  const faqs = [
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

  const getIconColor = (index) => {
    const colors_arr = [
      '#667eea', // blue
      '#10b981', // green
      '#f59e0b', // amber
      '#ef4444', // red
      '#3b82f6', // blue
      '#8b5cf6', // purple
      '#ec4899', // pink
      '#06b6d4', // cyan
      '#6366f1', // indigo
      '#f97316', // orange
      '#14b8a6', // teal
      '#f43f5e', // rose
      '#0ea5e9', // sky
      '#a855f7', // violet
      '#d946ef', // fuchsia
    ];
    return colors_arr[index % colors_arr.length];
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.bgPrimary }]}>
      <StatusBar style={isDark ? 'light' : 'dark'} />

      {/* Header */}
      <View style={[styles.header, { backgroundColor: colors.bgCard, borderBottomColor: colors.border }]}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>
          Help Center
        </Text>
      </View>

      <ScrollView 
        style={styles.scrollView}
        scrollEnabled={true}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Section */}
        <View style={[styles.heroSection, { backgroundColor: colors.bgCard }]}>
          <View style={[styles.heroIconContainer, { backgroundColor: isDark ? 'rgba(102,126,234,0.1)' : 'rgba(102,126,234,0.1)' }]}>
            <Ionicons name="help-circle" size={32} color={colors.primary} />
          </View>
          <Text style={[styles.heroTitle, { color: colors.textPrimary }]}>
            How can we help you?
          </Text>
          <Text style={[styles.heroSubtitle, { color: colors.textSecondary }]}>
            Find answers to frequently asked questions about TranslaTalk
          </Text>
        </View>

        {/* FAQ Items */}
        <View style={styles.faqContainer}>
          {faqs.map((faq, index) => (
            <View key={faq.id} style={[styles.faqItem, { backgroundColor: colors.bgCard }]}>
              <View style={styles.faqHeader}>
                <View style={[styles.iconCircle, { backgroundColor: getIconColor(index) + '20' }]}>
                  <Ionicons name={faq.icon} size={20} color={getIconColor(index)} />
                </View>
                <Text style={[styles.faqQuestion, { color: colors.textPrimary }]}>
                  {faq.question}
                </Text>
              </View>
              <Text style={[styles.faqAnswer, { color: colors.textSecondary }]}>
                {faq.answer}
              </Text>
            </View>
          ))}
        </View>

        {/* Support Banner */}
        <View style={[styles.supportBanner, { backgroundColor: isDark ? colors.primary : '#2c3e50' }]}>
          <Text style={styles.supportTitle}>
            Still need help?
          </Text>
          <Text style={styles.supportDescription}>
            Can't find what you're looking for? Our support team is here to help you with any questions or issues.
          </Text>

          <View style={styles.supportButtonsContainer}>
            <TouchableOpacity
              style={[styles.supportButton, { backgroundColor: '#fff' }]}
              onPress={() => navigation.navigate('Feedback')}
            >
              <Ionicons name="chatbubble-ellipses" size={18} color={isDark ? colors.primary : '#2c3e50'} style={{ marginRight: 8 }} />
              <Text style={[styles.supportButtonText, { color: isDark ? colors.primary : '#2c3e50' }]}>
                Contact Support
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.supportButtonAlt, { borderColor: 'rgba(255,255,255,0.3)' }]}
              onPress={() => navigation.navigate('About')}
            >
              <Ionicons name="information-circle" size={18} color="#fff" style={{ marginRight: 8 }} />
              <Text style={styles.supportButtonAltText}>
                About TranslaTalk
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Resource Cards */}
        <View style={styles.resourcesSection}>
          <TouchableOpacity 
            style={[styles.resourceCard, { backgroundColor: colors.bgCard }]}
            onPress={() => Linking.openURL('https://translatalk.com/userManual/usermanual.html')}
          >
            <Ionicons name="book" size={32} color={colors.primary} style={{ marginBottom: 12 }} />
            <Text style={[styles.resourceTitle, { color: colors.textPrimary }]}>
              Documentation
            </Text>
            <Text style={[styles.resourceDesc, { color: colors.textSecondary }]}>
              Comprehensive guides and tutorials
            </Text>
          </TouchableOpacity>

          <View style={[styles.resourceCard, { backgroundColor: colors.bgCard }]}>
            <Ionicons name="videocam" size={32} color={colors.primary} style={{ marginBottom: 12 }} />
            <Text style={[styles.resourceTitle, { color: colors.textPrimary }]}>
              Video Tutorials
            </Text>
            <Text style={[styles.resourceDesc, { color: colors.textSecondary }]}>
              Learn with step-by-step videos
            </Text>
          </View>
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...(typeof document !== 'undefined' && {
      minHeight: '100vh',
    }),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingTop: 48,
    borderBottomWidth: 1,
  },
  backButton: {
    marginRight: 16,
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  scrollView: {
    flex: 1,
    ...(typeof document !== 'undefined' && {
      maxHeight: 'calc(100vh - 64px)',
      overflowY: 'auto',
    }),
  },
  heroSection: {
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  heroIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
  faqContainer: {
    marginHorizontal: 12,
    marginBottom: 24,
    gap: 12,
  },
  faqItem: {
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  faqHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    marginBottom: 12,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
    lineHeight: 22,
  },
  faqAnswer: {
    fontSize: 14,
    lineHeight: 20,
    marginLeft: 52,
  },
  supportBanner: {
    marginHorizontal: 12,
    marginBottom: 24,
    borderRadius: 12,
    paddingVertical: 32,
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  supportTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 12,
    textAlign: 'center',
  },
  supportDescription: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
  },
  supportButtonsContainer: {
    width: '100%',
    gap: 12,
  },
  supportButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  supportButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  supportButtonAlt: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  supportButtonAltText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
  resourcesSection: {
    marginHorizontal: 12,
    marginBottom: 24,
    gap: 16,
    flexDirection: 'row',
  },
  resourceCard: {
    flex: 1,
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  resourceTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
  },
  resourceDesc: {
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 18,
  },
  bottomSpacer: {
    height: 24,
  },
});

export default HelpScreen;
