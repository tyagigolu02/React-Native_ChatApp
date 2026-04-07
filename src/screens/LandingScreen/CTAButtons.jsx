import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../../context/ThemeContext';
import { useHoverPress } from '../../hooks/useHoverPress';
import { COLORS, FONTS, RADIUS, SHADOWS } from '../../theme/colors';

export default function CTAButtons() {
  const navigation = useNavigation();
  const { isDark } = useTheme();
  const isWeb = Platform.OS === 'web';
  
  const primary = useHoverPress();
  const secondary = useHoverPress();

  return (
    <View style={styles.container}>
      {/* Primary CTA — Get Started */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        activeOpacity={0.85}
        {...primary.pressProps}
        {...primary.hoverProps}
        style={[
          styles.primaryWrapper,
          (primary.isPressed || (isWeb && primary.isHovered)) && styles.primaryWrapperPressed,
        ]}
      >
        <LinearGradient
          colors={COLORS.gradients.primary}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[
            styles.primaryBtn,
            isWeb && primary.isHovered && styles.primaryBtnHover,
          ]}
        >
          <Text style={styles.primaryText}>Get Started</Text>
          <FontAwesome5 name="arrow-right" size={14} color="#fff" style={styles.icon} />
        </LinearGradient>
      </TouchableOpacity>

      {/* Secondary CTA — Learn More */}
      <TouchableOpacity
        onPress={() => navigation.navigate('About')}
        activeOpacity={0.8}
        {...secondary.pressProps}
        {...secondary.hoverProps}
        style={[
          styles.secondaryBtn,
          (secondary.isPressed || (isWeb && secondary.isHovered)) && styles.secondaryBtnPressed,
          {
            borderColor: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(102,126,234,0.35)',
            backgroundColor: isDark 
              ? (secondary.isPressed || (isWeb && secondary.isHovered)) ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.08)'
              : (secondary.isPressed || (isWeb && secondary.isHovered)) ? 'rgba(102,126,234,0.15)' : 'rgba(102,126,234,0.06)',
          },
        ]}
      >
        <Text style={[styles.secondaryText, { color: isDark ? '#e2e8f0' : '#374151' }]}>
          Learn More
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    flexWrap: 'wrap',
  },
  primaryWrapper: {
    borderRadius: RADIUS.xl,
    ...SHADOWS.md,
  },
  primaryWrapperPressed: {
    ...SHADOWS.lg,
    transform: [{ scale: 0.95 }],
  },
  primaryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 28,
    paddingVertical: 16,
    borderRadius: RADIUS.xl,
    gap: 8,
  },
  primaryBtnHover: {
    transform: [{ scale: 1.05 }],
  },
  primaryText: {
    color: '#ffffff',
    fontSize: FONTS.sizes.lg,
    fontWeight: FONTS.weights.bold,
  },
  icon: {
    marginLeft: 2,
  },
  secondaryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 28,
    paddingVertical: 16,
    borderRadius: RADIUS.xl,
    borderWidth: 2,
  },
  secondaryBtnPressed: {
    borderWidth: 2.5,
    transform: [{ scale: 0.95 }],
  },
  secondaryText: {
    fontSize: FONTS.sizes.lg,
    fontWeight: FONTS.weights.semibold,
  },
});
