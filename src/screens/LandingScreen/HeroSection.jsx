import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';
import { COLORS, FONTS } from '../../theme/colors';

export default function HeroSection() {
  const { isDark } = useTheme();
  const textColor = isDark ? '#ffffff' : '#1a202c';

  return (
    <View style={styles.container}>
      {/* App Icon */}
      <View style={styles.iconWrapper}>
        <FontAwesome5 name="comments" size={64} color="#667eea" />
      </View>

      {/* App Title */}
      <Text style={[styles.title, { color: '#667eea' }]}>TranslaTalk</Text>

      {/* Subtitle */}
      <Text style={[styles.subtitle, { color: isDark ? '#d1d5db' : '#4a5568' }]}>
        Breaking language barriers with seamless translation
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 40,
  },
  iconWrapper: {
    marginBottom: 16,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  title: {
    fontSize: FONTS.sizes['5xl'],
    fontWeight: FONTS.weights.extrabold,
    letterSpacing: -1,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: FONTS.sizes.lg,
    fontWeight: FONTS.weights.normal,
    textAlign: 'center',
    maxWidth: 300,
    lineHeight: 26,
  },
});
