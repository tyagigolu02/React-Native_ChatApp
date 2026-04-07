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
  const { colors } = useTheme();

  const lastUpdated = 'January 15, 2024';

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
          Privacy Policy
        </Text>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Last Updated */}
        <View style={styles.updateBanner}>
          <Ionicons name="time-outline" size={16} color={colors.textSecondary} />
          <Text style={[styles.updateText, { color: colors.textSecondary }]}>
            Last updated: {lastUpdated}
          </Text>
        </View>

        {/* Introduction */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            Introduction
          </Text>
          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            At TranslaTalk, we take your privacy seriously. This Privacy Policy explains how we 
            collect, use, disclose, and safeguard your information when you use our mobile application.
          </Text>
        </View>

        {/* Information We Collect */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            Information We Collect
          </Text>
          
          <Text style={[styles.subsectionTitle, { color: colors.textPrimary }]}>
            Personal Information
          </Text>
          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            • Name and contact information{'\n'}
            • Email address and phone number{'\n'}
            • Profile picture and bio{'\n'}
            • Account credentials
          </Text>

          <Text style={[styles.subsectionTitle, { color: colors.textPrimary }]}>
            Usage Data
          </Text>
          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            • Messages and media you send{'\n'}
            • Device information and IP address{'\n'}
            • Usage patterns and preferences{'\n'}
            • Log data and analytics
          </Text>
        </View>

        {/* How We Use Your Information */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            How We Use Your Information
          </Text>
          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            We use your information to:{'\n\n'}
            • Provide and maintain our services{'\n'}
            • Process and deliver messages{'\n'}
            • Translate messages in real-time{'\n'}
            • Improve user experience{'\n'}
            • Send notifications and updates{'\n'}
            • Prevent fraud and ensure security{'\n'}
            • Comply with legal obligations
          </Text>
        </View>

        {/* Data Security */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            Data Security
          </Text>
          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            We implement industry-standard security measures to protect your data:
          </Text>
          
          <View style={styles.featureBox}>
            <Ionicons name="lock-closed" size={20} color="#10b981" />
            <View style={styles.featureContent}>
              <Text style={[styles.featureTitle, { color: colors.textPrimary }]}>
                End-to-End Encryption
              </Text>
              <Text style={[styles.featureDesc, { color: colors.textSecondary }]}>
                All messages are encrypted and only readable by you and the recipient
              </Text>
            </View>
          </View>

          <View style={styles.featureBox}>
            <Ionicons name="shield-checkmark" size={20} color="#10b981" />
            <View style={styles.featureContent}>
              <Text style={[styles.featureTitle, { color: colors.textPrimary }]}>
                Secure Storage
              </Text>
              <Text style={[styles.featureDesc, { color: colors.textSecondary }]}>
                Your data is stored securely with encryption at rest
              </Text>
            </View>
          </View>

          <View style={styles.featureBox}>
            <Ionicons name="finger-print" size={20} color="#10b981" />
            <View style={styles.featureContent}>
              <Text style={[styles.featureTitle, { color: colors.textPrimary }]}>
                Authentication
              </Text>
              <Text style={[styles.featureDesc, { color: colors.textSecondary }]}>
                Multi-factor authentication options for added security
              </Text>
            </View>
          </View>
        </View>

        {/* Data Sharing */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            Data Sharing and Disclosure
          </Text>
          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            We do not sell your personal information. We may share your data only in these cases:
            {'\n\n'}
            • With your explicit consent{'\n'}
            • To comply with legal requirements{'\n'}
            • To protect rights and safety{'\n'}
            • With service providers (under strict agreements)
          </Text>
        </View>

        {/* Your Rights */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            Your Rights
          </Text>
          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            You have the right to:{'\n\n'}
            • Access your personal data{'\n'}
            • Correct inaccurate information{'\n'}
            • Delete your account and data{'\n'}
            • Export your data{'\n'}
            • Opt-out of marketing communications{'\n'}
            • Object to data processing
          </Text>
        </View>

        {/* Cookies and Tracking */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            Cookies and Tracking
          </Text>
          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            We use cookies and similar tracking technologies to improve your experience. You can 
            control cookie preferences in your device settings.
          </Text>
        </View>

        {/* Children's Privacy */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            Children's Privacy
          </Text>
          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            Our service is not intended for children under 13. We do not knowingly collect personal 
            information from children. If you believe we have collected data from a child, please 
            contact us immediately.
          </Text>
        </View>

        {/* Changes to Policy */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            Changes to This Policy
          </Text>
          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            We may update this Privacy Policy from time to time. We will notify you of any changes 
            by posting the new policy on this page and updating the "Last updated" date.
          </Text>
        </View>

        {/* Contact */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            Contact Us
          </Text>
          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            If you have questions about this Privacy Policy, please contact us:
          </Text>
          <View style={styles.contactBox}>
            <View style={styles.contactRow}>
              <Ionicons name="mail-outline" size={16} color={colors.primary} />
              <Text style={[styles.contactText, { color: colors.textPrimary }]}>
                privacy@translatalk.com
              </Text>
            </View>
            <View style={styles.contactRow}>
              <Ionicons name="globe-outline" size={16} color={colors.primary} />
              <Text style={[styles.contactText, { color: colors.textPrimary }]}>
                www.translatalk.com/privacy
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
  updateBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    gap: 6,
  },
  updateText: {
    fontSize: 12,
    fontStyle: 'italic',
  },
  section: {
    marginBottom: 12,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subsectionTitle: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 22,
  },
  featureBox: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  featureDesc: {
    fontSize: 13,
    lineHeight: 18,
  },
  contactBox: {
    marginTop: 12,
    gap: 8,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  contactText: {
    fontSize: 13,
  },
  bottomSpacer: {
    height: 24,
  },
});

export default PrivacyScreen;
