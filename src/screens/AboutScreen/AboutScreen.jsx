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

const AboutScreen = ({ navigation }) => {
  useScreenTitle('TranslaTalk | About');
  const { colors } = useTheme();

  const APP_VERSION = '1.0.0';
  const BUILD_NUMBER = '100';

  const handleOpenWebsite = () => {
    Linking.openURL('https://translatalk.com');
  };

  const handleOpenGitHub = () => {
    Linking.openURL('https://github.com/translatalk');
  };

  const handleOpenEmail = () => {
    Linking.openURL('mailto:support@translatalk.com');
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
          About
        </Text>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* App Info */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <View style={styles.logoContainer}>
            <View style={[styles.logo, { backgroundColor: colors.primary }]}>
              <Ionicons name="chatbubbles" size={48} color="#fff" />
            </View>
            <Text style={[styles.appName, { color: colors.textPrimary }]}>
              TranslaTalk
            </Text>
            <Text style={[styles.tagline, { color: colors.textSecondary }]}>
              Connect Beyond Language Barriers
            </Text>
          </View>
        </View>

        {/* Version Info */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            Version Information
          </Text>
          <View style={[styles.infoRow, { borderBottomColor: colors.border }]}>
            <Text style={[styles.infoLabel, { color: colors.textSecondary }]}>Version</Text>
            <Text style={[styles.infoValue, { color: colors.textPrimary }]}>{APP_VERSION}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={[styles.infoLabel, { color: colors.textSecondary }]}>Build</Text>
            <Text style={[styles.infoValue, { color: colors.textPrimary }]}>{BUILD_NUMBER}</Text>
          </View>
        </View>

        {/* About Description */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            About TranslaTalk
          </Text>
          <Text style={[styles.description, { color: colors.textSecondary }]}>
            TranslaTalk is a revolutionary messaging platform that breaks down language barriers 
            through real-time translation. Chat with anyone, anywhere, in any language, and have 
            your messages automatically translated for seamless communication.
          </Text>
        </View>

        {/* Features */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            Key Features
          </Text>
          
          <View style={styles.featureItem}>
            <Ionicons name="language" size={24} color={colors.primary} />
            <View style={styles.featureText}>
              <Text style={[styles.featureTitle, { color: colors.textPrimary }]}>
                Real-time Translation
              </Text>
              <Text style={[styles.featureDescription, { color: colors.textSecondary }]}>
                Instant message translation in 100+ languages
              </Text>
            </View>
          </View>

          <View style={styles.featureItem}>
            <Ionicons name="lock-closed" size={24} color={colors.primary} />
            <View style={styles.featureText}>
              <Text style={[styles.featureTitle, { color: colors.textPrimary }]}>
                End-to-End Encryption
              </Text>
              <Text style={[styles.featureDescription, { color: colors.textSecondary }]}>
                Your messages are secure and private
              </Text>
            </View>
          </View>

          <View style={styles.featureItem}>
            <Ionicons name="people" size={24} color={colors.primary} />
            <View style={styles.featureText}>
              <Text style={[styles.featureTitle, { color: colors.textPrimary }]}>
                Group Chats
              </Text>
              <Text style={[styles.featureDescription, { color: colors.textSecondary }]}>
                Connect with multiple people at once
              </Text>
            </View>
          </View>

          <View style={styles.featureItem}>
            <Ionicons name="shield-checkmark" size={24} color={colors.primary} />
            <View style={styles.featureText}>
              <Text style={[styles.featureTitle, { color: colors.textPrimary }]}>
                Privacy Controls
              </Text>
              <Text style={[styles.featureDescription, { color: colors.textSecondary }]}>
                Hidden chats, vault, and advanced privacy options
              </Text>
            </View>
          </View>
        </View>

        {/* Links */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            Links
          </Text>

          <TouchableOpacity
            style={[styles.linkButton, { borderBottomColor: colors.border }]}
            onPress={handleOpenWebsite}
          >
            <Ionicons name="globe-outline" size={20} color={colors.primary} />
            <Text style={[styles.linkText, { color: colors.textPrimary }]}>
              Visit Website
            </Text>
            <Ionicons name="chevron-forward" size={20} color={colors.textSecondary} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.linkButton, { borderBottomColor: colors.border }]}
            onPress={handleOpenGitHub}
          >
            <Ionicons name="logo-github" size={20} color={colors.primary} />
            <Text style={[styles.linkText, { color: colors.textPrimary }]}>
              GitHub Repository
            </Text>
            <Ionicons name="chevron-forward" size={20} color={colors.textSecondary} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.linkButton}
            onPress={handleOpenEmail}
          >
            <Ionicons name="mail-outline" size={20} color={colors.primary} />
            <Text style={[styles.linkText, { color: colors.textPrimary }]}>
              Contact Support
            </Text>
            <Ionicons name="chevron-forward" size={20} color={colors.textSecondary} />
          </TouchableOpacity>
        </View>

        {/* Copyright */}
        <View style={styles.copyright}>
          <Text style={[styles.copyrightText, { color: colors.textSecondary }]}>
            © 2024 TranslaTalk. All rights reserved.
          </Text>
          <Text style={[styles.copyrightText, { color: colors.textSecondary }]}>
            Made with ❤️ for global communication
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
  section: {
    marginBottom: 12,
    padding: 16,
  },
  logoContainer: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  logo: {
    width: 96,
    height: 96,
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  tagline: {
    fontSize: 14,
    fontStyle: 'italic',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  infoLabel: {
    fontSize: 14,
  },
  infoValue: {
    fontSize: 14,
    fontWeight: '500',
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
  },
  featureItem: {
    flexDirection: 'row',
    marginBottom: 16,
    gap: 12,
  },
  featureText: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 13,
    lineHeight: 18,
  },
  linkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    gap: 12,
  },
  linkText: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
  },
  copyright: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  copyrightText: {
    fontSize: 12,
    marginBottom: 4,
    textAlign: 'center',
  },
  bottomSpacer: {
    height: 24,
  },
});

export default AboutScreen;
