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

const TermsScreen = ({ navigation }) => {
  useScreenTitle('TranslaTalk | Terms');
  const { colors } = useTheme();

  const lastUpdated = 'January 15, 2024';
  const effectiveDate = 'January 1, 2024';

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
          Terms of Service
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
            Agreement to Terms
          </Text>
          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            Welcome to TranslaTalk! By accessing or using our mobile application, you agree to be 
            bound by these Terms of Service. If you disagree with any part of these terms, you may 
            not access the service.
          </Text>
          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            Effective Date: {effectiveDate}
          </Text>
        </View>

        {/* Acceptable Use */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            Acceptable Use
          </Text>
          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            You agree to use TranslaTalk only for lawful purposes and in accordance with these Terms. 
            You agree NOT to use the service:
          </Text>
          <Text style={[styles.bulletList, { color: colors.textSecondary }]}>
            • To violate any laws or regulations{'\n'}
            • To transmit harmful or malicious content{'\n'}
            • To harass, abuse, or harm others{'\n'}
            • To impersonate another person or entity{'\n'}
            • To distribute spam or unsolicited messages{'\n'}
            • To interfere with service security{'\n'}
            • To collect user data without permission
          </Text>
        </View>

        {/* User Accounts */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            User Accounts
          </Text>
          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            When you create an account with us, you must provide accurate and complete information. 
            You are responsible for:
          </Text>
          <Text style={[styles.bulletList, { color: colors.textSecondary }]}>
            • Maintaining the security of your account{'\n'}
            • All activities that occur under your account{'\n'}
            • Immediately notifying us of unauthorized use{'\n'}
            • Ensuring your password remains confidential
          </Text>
        </View>

        {/* Content and Intellectual Property */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            Content and Intellectual Property
          </Text>
          
          <Text style={[styles.subsectionTitle, { color: colors.textPrimary }]}>
            Your Content
          </Text>
          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            You retain all rights to the content you create and share on TranslaTalk. By using our 
            service, you grant us a limited license to store, process, and transmit your content to 
            provide the service.
          </Text>

          <Text style={[styles.subsectionTitle, { color: colors.textPrimary }]}>
            Our Content
          </Text>
          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            The TranslaTalk service, including its design, features, and functionality, is owned by 
            us and protected by copyright, trademark, and other intellectual property laws.
          </Text>
        </View>

        {/* Translation Services */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            Translation Services
          </Text>
          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            TranslaTalk provides automated translation services. While we strive for accuracy:
          </Text>
          <Text style={[styles.bulletList, { color: colors.textSecondary }]}>
            • Translations may not be perfect{'\n'}
            • Context and nuance may be lost{'\n'}
            • We do not guarantee 100% accuracy{'\n'}
            • Important communications should be verified{'\n'}
            • We are not liable for translation errors
          </Text>
        </View>

        {/* Termination */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            Termination
          </Text>
          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            We may terminate or suspend your account immediately, without prior notice, if you breach 
            these Terms. Upon termination:
          </Text>
          <Text style={[styles.bulletList, { color: colors.textSecondary }]}>
            • Your right to use the service will cease{'\n'}
            • We may delete your account and content{'\n'}
            • You may request a data export before deletion{'\n'}
            • Certain provisions of these Terms survive termination
          </Text>
        </View>

        {/* Limitation of Liability */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            Limitation of Liability
          </Text>
          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            To the maximum extent permitted by law, TranslaTalk shall not be liable for any indirect, 
            incidental, special, consequential, or punitive damages resulting from your use or inability 
            to use the service.
          </Text>
        </View>

        {/* Disclaimer */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            Disclaimer
          </Text>
          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            The service is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, either 
            express or implied, including but not limited to warranties of merchantability, fitness for 
            a particular purpose, and non-infringement.
          </Text>
        </View>

        {/* Changes to Terms */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            Changes to Terms
          </Text>
          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            We reserve the right to modify these Terms at any time. We will notify you of any changes 
            by posting the new Terms on this page and updating the "Last updated" date. Your continued 
            use of the service after changes constitutes acceptance of the new Terms.
          </Text>
        </View>

        {/* Governing Law */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            Governing Law
          </Text>
          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction 
            in which TranslaTalk operates, without regard to its conflict of law provisions.
          </Text>
        </View>

        {/* Contact */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            Contact Us
          </Text>
          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            If you have any questions about these Terms, please contact us:
          </Text>
          <View style={styles.contactBox}>
            <View style={styles.contactRow}>
              <Ionicons name="mail-outline" size={16} color={colors.primary} />
              <Text style={[styles.contactText, { color: colors.textPrimary }]}>
                legal@translatalk.com
              </Text>
            </View>
            <View style={styles.contactRow}>
              <Ionicons name="globe-outline" size={16} color={colors.primary} />
              <Text style={[styles.contactText, { color: colors.textPrimary }]}>
                www.translatalk.com/terms
              </Text>
            </View>
          </View>
        </View>

        {/* Acceptance */}
        <View style={[styles.acceptanceBox, { backgroundColor: colors.primary + '20', borderColor: colors.primary }]}>
          <Ionicons name="checkmark-circle" size={24} color={colors.primary} />
          <Text style={[styles.acceptanceText, { color: colors.textPrimary }]}>
            By using TranslaTalk, you acknowledge that you have read, understood, and agree to be 
            bound by these Terms of Service.
          </Text>
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
    marginBottom: 12,
  },
  bulletList: {
    fontSize: 14,
    lineHeight: 24,
    marginLeft: 8,
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
  acceptanceBox: {
    flexDirection: 'row',
    gap: 12,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 12,
    borderWidth: 1,
  },
  acceptanceText: {
    flex: 1,
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '500',
  },
  bottomSpacer: {
    height: 24,
  },
});

export default TermsScreen;
