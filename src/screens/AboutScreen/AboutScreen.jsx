import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from '../../context/ThemeContext';
import { useScreenTitle } from '../../context/ScreenTitleContext';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './AboutScreen.styles';

const AboutScreen = ({ navigation }) => {
  useScreenTitle('TranslaTalk | About');
  const { colors, isDark } = useTheme();

  const features = [
    'Real-time message translation',
    'Support for 100+ languages',
    'Voice and video calls',
    'File sharing and media support',
    'End-to-end encryption',
    'Cross-platform compatibility',
  ];

  return (
    <View style={[styles.container, { backgroundColor: colors.bgPrimary }]}>
      <StatusBar style={isDark ? 'light' : 'dark'} />

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        scrollEnabled
        nestedScrollEnabled
      >
        <View style={[styles.heroSection, { backgroundColor: colors.bgCard }]}>
          <View style={styles.iconContainer}>
            <Ionicons name="chatbubbles" size={56} color={colors.primary} />
          </View>
          <Text style={[styles.heroTitle, { color: colors.textPrimary }]}>TranslaTalk</Text>
          <Text style={[styles.heroSubtitle, { color: colors.textSecondary }]}>
            Breaking language barriers with seamless translation
          </Text>
        </View>

        <View style={[styles.card, { backgroundColor: colors.bgCard }]}>
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>Our Mission</Text>
            <Text style={[styles.sectionText, { color: colors.textSecondary }]}>
              TranslaTalk aims to connect people across the globe by eliminating language barriers. Our advanced translation technology ensures that conversations flow naturally, regardless of the languages spoken.
            </Text>
            <Text style={[styles.sectionText, { color: colors.textSecondary, marginTop: 12 }]}>
              We believe that communication should be universal, and every person should be able to express themselves freely and be understood by others.
            </Text>
          </View>

          <View
            style={[
              styles.section,
              { borderTopWidth: 1, borderTopColor: colors.border, paddingTop: 16 },
            ]}
          >
            <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>Key Features</Text>
            {features.map((feature, index) => (
              <View key={index} style={styles.featureItem}>
                <Ionicons name="checkmark" size={16} color="#10b981" />
                <Text style={[styles.featureText, { color: colors.textSecondary }]}>{feature}</Text>
              </View>
            ))}
          </View>

          <View
            style={[
              styles.section,
              {
                borderTopWidth: 1,
                borderTopColor: colors.border,
                paddingTop: 16,
                alignItems: 'center',
              },
            ]}
          >
            <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>Meet Our Team</Text>
            <Text
              style={[
                styles.sectionText,
                { color: colors.textSecondary, textAlign: 'center', marginBottom: 16 },
              ]}
            >
              TranslaTalk is built by a passionate team of developers dedicated to breaking language barriers.
            </Text>
            <TouchableOpacity
              style={[
                styles.button,
                {
                  backgroundColor: isDark ? colors.bgInput : '#f0f0f0',
                  borderColor: colors.border,
                  borderWidth: 1,
                },
              ]}
              onPress={() => navigation.navigate('Developers')}
            >
              <Ionicons name="people" size={18} color={colors.primary} style={{ marginRight: 8 }} />
              <Text style={[styles.buttonText, { color: colors.textPrimary }]}>View Our Team</Text>
            </TouchableOpacity>
          </View>

          <View
            style={[
              styles.section,
              {
                borderTopWidth: 1,
                borderTopColor: colors.border,
                paddingTop: 16,
                alignItems: 'center',
              },
            ]}
          >
            <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>Ready to start connecting?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <LinearGradient
                colors={['#667eea', '#764ba2']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.primaryButton}
              >
                <Text style={styles.primaryButtonText}>Get Started Today</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>

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

export default AboutScreen;
