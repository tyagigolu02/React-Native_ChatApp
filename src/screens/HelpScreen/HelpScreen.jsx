import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from '../../context/ThemeContext';
import { useScreenTitle } from '../../context/ScreenTitleContext';
import { Ionicons } from '@expo/vector-icons';

const HelpScreen = ({ navigation }) => {
  useScreenTitle('TranslaTalk | Help');
  const { colors } = useTheme();

  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqs = [
    {
      id: '1',
      question: 'How do I start a chat?',
      answer: 'Tap the "+" button on the home screen, then select a contact or create a new group. You can start chatting immediately!',
    },
    {
      id: '2',
      question: 'How does translation work?',
      answer: 'Messages are automatically translated based on your language preferences. Go to Settings > Language to configure your preferred languages.',
    },
    {
      id: '3',
      question: 'What is the Vault feature?',
      answer: 'The Vault is a secure space for private conversations. Enable vault lock in Settings to require a password for accessing hidden chats.',
    },
    {
      id: '4',
      question: 'How do I create a group?',
      answer: 'Tap the "+" button, select "New Group", add members, set a group name and optional description, then tap Create.',
    },
    {
      id: '5',
      question: 'Can I archive chats?',
      answer: 'Yes! Long-press any chat and select "Archive". Archived chats can be accessed from Settings > Archived Chats.',
    },
    {
      id: '6',
      question: 'How do I block someone?',
      answer: 'Open the contact\'s profile, tap the menu button, and select "Block Contact". Blocked users can be managed in Settings.',
    },
    {
      id: '7',
      question: 'Is my data encrypted?',
      answer: 'Yes! All messages use end-to-end encryption. Only you and the recipient can read your messages.',
    },
    {
      id: '8',
      question: 'How do I change my profile picture?',
      answer: 'Go to Settings > Profile, tap your avatar, and select a new photo from your gallery or take a new one.',
    },
  ];

  const quickActions = [
    {
      id: '1',
      icon: 'chatbubbles-outline',
      title: 'Start a Chat',
      description: 'Begin chatting with friends',
    },
    {
      id: '2',
      icon: 'people-outline',
      title: 'Create Group',
      description: 'Create a new group chat',
    },
    {
      id: '3',
      icon: 'settings-outline',
      title: 'Settings',
      description: 'Configure your preferences',
    },
    {
      id: '4',
      icon: 'shield-outline',
      title: 'Privacy',
      description: 'Manage privacy settings',
    },
  ];

  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.bgPrimary }]}>
      <StatusBar style={colors.isDark ? 'light' : 'dark'} />

      {/* Header */}
      <View style={[styles.header, { backgroundColor: colors.bgCard, borderBottomColor: colors.border }]}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>
          Help & Support
        </Text>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Quick Actions */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            Quick Actions
          </Text>
          <View style={styles.quickActionsGrid}>
            {quickActions.map((action) => (
              <TouchableOpacity
                key={action.id}
                style={[styles.quickActionCard, { backgroundColor: colors.bgSecondary }]}
              >
                <Ionicons name={action.icon} size={32} color={colors.primary} />
                <Text style={[styles.quickActionTitle, { color: colors.textPrimary }]}>
                  {action.title}
                </Text>
                <Text style={[styles.quickActionDesc, { color: colors.textSecondary }]}>
                  {action.description}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* FAQs */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            Frequently Asked Questions
          </Text>

          {faqs.map((faq) => (
            <View key={faq.id}>
              <TouchableOpacity
                style={[styles.faqItem, { borderBottomColor: colors.border }]}
                onPress={() => toggleFAQ(faq.id)}
              >
                <View style={styles.faqQuestion}>
                  <Ionicons
                    name="help-circle-outline"
                    size={20}
                    color={colors.primary}
                  />
                  <Text style={[styles.faqQuestionText, { color: colors.textPrimary }]}>
                    {faq.question}
                  </Text>
                </View>
                <Ionicons
                  name={expandedFAQ === faq.id ? 'chevron-up' : 'chevron-down'}
                  size={20}
                  color={colors.textSecondary}
                />
              </TouchableOpacity>

              {expandedFAQ === faq.id && (
                <View style={[styles.faqAnswer, { backgroundColor: colors.bgSecondary }]}>
                  <Text style={[styles.faqAnswerText, { color: colors.textSecondary }]}>
                    {faq.answer}
                  </Text>
                </View>
              )}
            </View>
          ))}
        </View>

        {/* Contact Support */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            Still Need Help?
          </Text>
          <Text style={[styles.supportText, { color: colors.textSecondary }]}>
            Can't find what you're looking for? Our support team is here to help!
          </Text>

          <TouchableOpacity
            style={[styles.supportButton, { backgroundColor: colors.primary }]}
            onPress={() => navigation.navigate('Feedback')}
          >
            <Ionicons name="mail-outline" size={20} color="#fff" />
            <Text style={styles.supportButtonText}>Contact Support</Text>
          </TouchableOpacity>

          <View style={styles.supportInfo}>
            <View style={styles.supportInfoRow}>
              <Ionicons name="mail-outline" size={16} color={colors.textSecondary} />
              <Text style={[styles.supportInfoText, { color: colors.textSecondary }]}>
                support@translatalk.com
              </Text>
            </View>
            <View style={styles.supportInfoRow}>
              <Ionicons name="time-outline" size={16} color={colors.textSecondary} />
              <Text style={[styles.supportInfoText, { color: colors.textSecondary }]}>
                Response time: 24-48 hours
              </Text>
            </View>
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
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  scrollView: {
    flex: 1,
  },
  section: {
    marginBottom: 12,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  quickActionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  quickActionCard: {
    width: '47%',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  quickActionTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 8,
    textAlign: 'center',
  },
  quickActionDesc: {
    fontSize: 11,
    marginTop: 4,
    textAlign: 'center',
  },
  faqItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  faqQuestion: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 12,
  },
  faqQuestionText: {
    fontSize: 14,
    fontWeight: '500',
    flex: 1,
  },
  faqAnswer: {
    padding: 12,
    marginTop: 4,
    marginBottom: 8,
    borderRadius: 8,
  },
  faqAnswerText: {
    fontSize: 13,
    lineHeight: 20,
  },
  supportText: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
  },
  supportButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    gap: 8,
    marginBottom: 16,
  },
  supportButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  supportInfo: {
    gap: 8,
  },
  supportInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  supportInfoText: {
    fontSize: 12,
  },
  bottomSpacer: {
    height: 24,
  },
});

export default HelpScreen;
