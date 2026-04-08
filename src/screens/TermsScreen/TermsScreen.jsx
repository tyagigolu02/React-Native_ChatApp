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

const TermsScreen = ({ navigation }) => {
  useScreenTitle('TranslaTalk | Terms');
  const { colors, isDark } = useTheme();

  const lastUpdated = 'December 4, 2025';

  const termsSections = [
    {
      id: 1,
      title: 'Acceptance of Terms',
      content: 'By accessing and using TranslaTalk, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.',
    },
    {
      id: 2,
      title: 'Description of Service',
      items: [
        'Instant messaging with automatic translation between languages',
        'Voice and video calling with live translation capabilities',
        'Group chats and conference calls',
        'File and media sharing',
        'Scheduled messaging and reminders',
        'Contact management and blocking features',
      ],
    },
    {
      id: 3,
      title: 'User Accounts & Registration',
      items: [
        'Be at least 13 years of age',
        'Provide accurate and complete registration information',
        'Maintain the security of your account credentials',
        'Notify us immediately of any unauthorized access',
        'Accept responsibility for all activities under your account',
      ],
    },
    {
      id: 4,
      title: 'Acceptable Use Policy',
      items: [
        'Transmit unlawful, harmful, threatening, abusive, harassing, or defamatory content',
        'Impersonate any person or entity or misrepresent your affiliation',
        'Distribute spam, malware, viruses, or other malicious code',
        'Violate any applicable laws, regulations, or third-party rights',
        'Interfere with or disrupt the Service or servers',
        'Attempt to gain unauthorized access to any systems or networks',
        'Use the Service for any commercial purpose without authorization',
        'Harvest or collect user information without consent',
      ],
    },
    {
      id: 5,
      title: 'Translation Accuracy',
      content: 'While we strive to provide accurate translations, TranslaTalk does not guarantee that all translations are 100% accurate. Translations are automated and should be reviewed for accuracy in critical communications. We are not liable for any errors or omissions in translations or any consequences arising from their use.',
    },
    {
      id: 6,
      title: 'Intellectual Property Rights',
      items: [
        'Your Content: You retain ownership of content you create and share',
        'Our Service: TranslaTalk and its original content, features, and functionality are owned by us',
        'License: By posting content, you grant us a limited license to display and transmit it',
        'Trademarks: TranslaTalk name and logo are our trademarks',
      ],
    },
    {
      id: 7,
      title: 'Privacy & Data Protection',
      content: 'Your privacy is important to us. Please review our Privacy Policy to understand our practices regarding the collection and use of your personal information. By using TranslaTalk, you consent to our collection and use of personal information as outlined in the Privacy Policy.',
    },
    {
      id: 8,
      title: 'Service Availability & Modifications',
      items: [
        'Modify, suspend, or discontinue any aspect of the Service at any time',
        'Impose limits on certain features or restrict access to parts of the Service',
        'Perform maintenance and updates that may temporarily affect availability',
        'Change these Terms of Service with notice to users',
      ],
    },
    {
      id: 9,
      title: 'Termination',
      content: 'We reserve the right to terminate your account and access to the Service immediately, without prior notice or liability, for any reason whatsoever, including if you breach any of the Terms. Upon termination, your right to use the Service will immediately cease.',
    },
    {
      id: 10,
      title: 'Disclaimer of Warranties',
      content: 'The service is provided on an "As Is" and "As Available" basis. TranslaTalk expressly disclaims all warranties of any kind, whether express or implied, including but not limited to any warranties of MERCHANTABILITY, fitness for a particular purpose, and non-infringement.',
    },
    {
      id: 11,
      title: 'Limitation of Liability',
      content: 'To the fullest extent permitted by law, TranslaTalk shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.',
    },
    {
      id: 12,
      title: 'Dispute Resolution',
      content: 'Any dispute arising from or related to these Terms or your use of TranslaTalk shall be resolved through good faith negotiation. If negotiation fails, disputes shall be resolved through binding arbitration in accordance with the rules of arbitration in effect at the time of the dispute.',
    },
    {
      id: 13,
      title: 'Governing Law',
      content: 'These Terms and Conditions are governed by and construed in accordance with the laws of the jurisdiction where TranslaTalk is located, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.',
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
          Terms of Service
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
            Terms of Service
          </Text>
          <Text style={[styles.lastUpdated, { color: colors.textSecondary }]}>
            Last updated: {lastUpdated}
          </Text>
        </View>

        {/* Terms Sections */}
        {termsSections.map((section) => (
          <View key={section.id} style={[styles.section, { backgroundColor: colors.bgCard }]}>
            <View style={styles.sectionHeader}>
              <Text style={[styles.sectionNumber, { color: isDark ? '#fff' : '#000' }]}>
                {section.id}.
              </Text>
              <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
                {section.title}
              </Text>
            </View>

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
            Contact Information
          </Text>
          <Text style={[styles.contentText, { color: colors.textSecondary, marginBottom: 16 }]}>
            If you have any questions about these Terms of Service, please contact us:
          </Text>

          <TouchableOpacity 
            style={[styles.contactItem, { backgroundColor: isDark ? 'rgba(102,126,234,0.1)' : 'rgba(102,126,234,0.05)' }]}
            onPress={() => Linking.openURL('mailto:syntax.error.adda@gmail.com')}
          >
            <Ionicons name="mail-outline" size={20} color={isDark ? '#667eea' : colors.primary} style={{ marginRight: 12 }} />
            <View style={{ flex: 1 }}>
              <Text style={[styles.contactLabel, { color: colors.textSecondary }]}>
                Email
              </Text>
              <Text style={[styles.contactValue, { color: isDark ? '#667eea' : colors.primary }]}>
                syntax.error.adda@gmail.com
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.contactItem, { backgroundColor: isDark ? 'rgba(102,126,234,0.1)' : 'rgba(102,126,234,0.05)' }]}
            onPress={() => navigation.navigate('Feedback')}
          >
            <Ionicons name="chatbubble-outline" size={20} color={isDark ? '#667eea' : colors.primary} style={{ marginRight: 12 }} />
            <View style={{ flex: 1 }}>
              <Text style={[styles.contactLabel, { color: colors.textSecondary }]}>
                Send Feedback
              </Text>
              <Text style={[styles.contactValue, { color: isDark ? '#667eea' : colors.primary }]}>
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
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
    gap: 8,
  },
  sectionNumber: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    flex: 1,
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

export default TermsScreen;
