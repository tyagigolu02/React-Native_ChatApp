import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  StatusBar,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../../context/ThemeContext';
import { useScreenTitle } from '../../context/ScreenTitleContext';
import { COLORS } from '../../theme/colors';
import AnimatedBackground from './AnimatedBackground';
import HeroSection from './HeroSection';
import CTAButtons from './CTAButtons';
import FooterLinks from './FooterLinks';
import ThemeToggle from '../../components/ThemeToggle';
 
export default function LandingScreen() {
  useScreenTitle('TranslaTalk | Welcome');
  const { isDark } = useTheme();

  const bgColors = isDark
    ? [COLORS.dark.bgPrimary, COLORS.dark.bgSecondary]
    : ['#f8fafc', '#eff6ff'];

  return (
    <View style={styles.root}>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent
      />

      {/* Gradient background */}
      <LinearGradient
        colors={bgColors}
        style={StyleSheet.absoluteFill}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />

      {/* Animated blob background */}
      <AnimatedBackground />

      <SafeAreaView style={styles.safeArea}>
        {/* Theme Toggle — top right */}
        <View style={styles.toggleRow}>
          <ThemeToggle />
        </View>

        {/* Main Content */}
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <HeroSection />
          <CTAButtons />
          <FooterLinks />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? 10 : 8,
    paddingBottom: 4,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
});
