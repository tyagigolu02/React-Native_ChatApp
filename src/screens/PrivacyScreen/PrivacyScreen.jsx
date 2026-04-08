import React from 'react';
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

const PrivacyScreen = ({ navigation }) => {
  useScreenTitle('TranslaTalk | Privacy');
  const { colors, isDark } = useTheme();

  const lastUpdated = 'December 4, 2025';

  const policySections = [
    {
      id: 1,
      title: 'Information We Collect',
      items: [
        'Account Information: Name, email address, profile picture, and language preferences',
        'Messages: Text messages, voice messages, images, and files you send or receive',
        'Call Data: Voice and video call metadata (duration, participants, quality metrics)',
        'Usage Data: App interactions, features used, and performance statistics',
        'Device Information: Device type, operating system, browser version, and IP address',
      ],
    },
    {
      id: 2,
      title: 'How We Use Your Information',
      items: [
        'Provide real-time message translation between different languages',
        'Enable voice and video calling with live translation features',
        'Deliver notifications for new messages and calls',
        'Maintain and improve our translation algorithms and service quality',
        'Provide customer support and respond to your inquiries',
        'Prevent fraud, abuse, and ensure platform security',
      ],
    },
    {
      id: 3,
      title: 'Data Security & Encryption',
      items: [
        'End-to-End Encryption: All messages and calls are encrypted in transit',
        'Secure Storage: Data at rest is encrypted using industry-standard AES-256',
        'No Third-Party Access: We never sell or share your personal data with advertisers',
        'WebRTC Security: Peer-to-peer calls use secure WebRTC protocols',
        'Regular Audits: We conduct security audits and vulnerability assessments',
      ],
    },
    {
      id: 4,
      title: 'Translation Processing',
      items: [
        'Processed in encrypted form whenever possible',
        'Not used to train third-party translation models without your consent',
        'Deleted from translation caches after processing',
        'Only accessible to authorized TranslaTalk systems',
      ],
    },
    {
      id: 5,
      title: 'Data Retention',
      items: [
        'Messages: Stored until you delete them or close your account',
        'Account Data: Retained while your account is active',
        'Call Recordings: Stored only if you explicitly enable recording',
        'Logs: Technical logs retained for 90 days for troubleshooting',
      ],
    },
    {
      id: 6,
      title: 'Your Rights & Controls',
      items: [
        'Access and download your personal data',
        'Delete your messages, call history, and account',
        'Update your profile information and language preferences',
        'Block contacts and manage privacy settings',
        'Opt-out of non-essential data collection',
        'Export your data in a portable format',
      ],
    },
    {
      id: 7,
      title: 'Cookies & Analytics',
      content: 'We use cookies and similar tracking technologies to enhance your experience and analyze service usage. You can control cookie preferences in your device settings. Our analytics tools help us understand how you use TranslaTalk and identify areas for improvement.',
    },
    {
      id: 8,
      title: "Children's Privacy",
      content: "TranslaTalk is not intended for users under 13 years of age. We do not knowingly collect personal information from children under 13. If we discover that we have collected information from a child under 13, we will delete it immediately. Parents or guardians who believe their child has provided information to us should contact us without delay.",
    },
    {
      id: 9,
      title: 'Changes to This Policy',
      content: 'We reserve the right to update this Privacy Policy at any time. When we make material changes, we will notify you by updating the "Last updated" date at the top of this policy. Your continued use of TranslaTalk following the posting of revised Privacy Policy means you accept and agree to the changes.',
    },
  ];

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
          Privacy Policy
        </Text>
      </View>

      <ScrollView 
        style={styles.scrollView}
        scrollEnabled={true}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
      >
        {/* Title & Last Updated */}
        <View style={[styles.titleSection, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.pageTitle, { color: colors.textPrimary }]}>
            Privacy Policy
          </Text>
          <Text style={[styles.lastUpdated, { color: colors.textSecondary }]}>
            Last updated: {lastUpdated}
          </Text>
        </View>

        {/* Policy Sections */}
        {policySections.map((section) => (
          <View key={section.id} style={[styles.section, { backgroundColor: colors.bgCard }]}>
            <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
              {section.title}
            </Text>

            {section.items ? (
              <View style={styles.itemsList}>
                {section.items.map((item, index) => (
                  <View key={index} style={styles.listItem}>
                    <Text style={[styles.bullet, { color: colors.textSecondary }]}>
                      •
                    </Text>
                    <Text style={[styles.itemText, { color: colors.textSecondary }]}>
                      {item}
                    </Text>
                  </View>
                ))}
              </View>
            ) : (
              <Text style={[styles.contentText, { color: colors.textSecondary }]}>
                {section.content}
              </Text>
            )}
          </View>
        ))}

        {/* Contact Section */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            Contact Us
          </Text>
          <Text style={[styles.contentText, { color: colors.textSecondary, marginBottom: 16 }]}>
            If you have questions or concerns about this Privacy Policy, please reach out to us:
          </Text>

          <TouchableOpacity 
            style={[styles.contactItem, { backgroundColor: isDark ? 'rgba(102,126,234,0.1)' : 'rgba(102,126,234,0.05)' }]}
            onPress={() => {
              /* Handle email */
            }}
          >
            <Ionicons name="mail-outline" size={20} color={colors.primary} style={{ marginRight: 12 }} />
            <View style={{ flex: 1 }}>
              <Text style={[styles.contactLabel, { color: colors.textSecondary }]}>
                Email
              </Text>
              <Text style={[styles.contactValue, { color: colors.primary }]}>
                syntax.error.adda@gmail.com
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.contactItem, { backgroundColor: isDark ? 'rgba(102,126,234,0.1)' : 'rgba(102,126,234,0.05)' }]}
            onPress={() => navigation.navigate('Feedback')}
          >
            <Ionicons name="chatbubble-outline" size={20} color={colors.primary} style={{ marginRight: 12 }} />
            <View style={{ flex: 1 }}>
              <Text style={[styles.contactLabel, { color: colors.textSecondary }]}>
                Send Feedback
              </Text>
              <Text style={[styles.contactValue, { color: colors.primary }]}>
                Share your thoughts with us
              </Text>
            </View>
          </TouchableOpacity>
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
  titleSection: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
  },
  lastUpdated: {
    fontSize: 12,
    fontStyle: 'italic',
  },
  section: {
    marginHorizontal: 12,
    marginBottom: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  itemsList: {
    gap: 8,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  bullet: {
    fontSize: 16,
    marginTop: 2,
  },
  itemText: {
    fontSize: 14,
    lineHeight: 20,
    flex: 1,
  },
  contentText: {
    fontSize: 14,
    lineHeight: 22,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderRadius: 10,
    marginBottom: 10,
  },
  contactLabel: {
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 2,
  },
  contactValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3b82f6',
  },
  bottomSpacer: {
    height: 24,
  },
});

export default PrivacyScreen;
