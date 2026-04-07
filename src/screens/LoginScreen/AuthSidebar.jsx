import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const AuthSidebar = ({ isSignup = false }) => {
  const { width } = useWindowDimensions();
  
  // Only show on tablets and larger screens (width >= 768px)
  if (width < 768) {
    return null;
  }

  const features = [
    {
      icon: 'shield-checkmark',
      title: 'Secure Login',
      description: 'Your data is protected with enterprise-grade security',
    },
    {
      icon: 'flash',
      title: 'Quick Access',
      description: 'Get started in seconds with our streamlined interface',
    },
    {
      icon: 'people',
      title: 'Team Collaboration',
      description: 'Connect and collaborate with your team seamlessly',
    },
    {
      icon: 'globe',
      title: 'Real-time Translation',
      description: 'Break language barriers with instant translation',
    },
  ];

  return (
    <LinearGradient
      colors={['#667eea', '#764ba2']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      {/* Logo Section */}
      <View style={styles.logoSection}>
        <Ionicons name="chatbubbles" size={32} color="#fff" />
        <Text style={styles.logoText}>TranslaTalk</Text>
      </View>

      {/* Welcome Section */}
      <View style={styles.welcomeSection}>
        <Text style={styles.heading}>
          {isSignup ? 'Join TranslaTalk' : 'Welcome Back'}
        </Text>
        <Text style={styles.subtitle}>
          {isSignup
            ? 'Create an account to start connecting with your team and breaking language barriers'
            : 'Sign in to continue your conversations and stay connected with your team'}
        </Text>
      </View>

      {/* Features List */}
      <View style={styles.featuresSection}>
        {features.map((feature, index) => (
          <View key={index} style={styles.featureItem}>
            <View style={styles.featureIconContainer}>
              <Ionicons name={feature.icon} size={24} color="#fff" />
            </View>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>{feature.title}</Text>
              <Text style={styles.featureDescription}>{feature.description}</Text>
            </View>
          </View>
        ))}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '50%',
    padding: 48,
    justifyContent: 'center',
  },
  logoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
    gap: 12,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  welcomeSection: {
    marginBottom: 48,
  },
  heading: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    opacity: 0.9,
    lineHeight: 26,
  },
  featuresSection: {
    gap: 24,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
    opacity: 0.9,
  },
  featureIconContainer: {
    flexShrink: 0,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.8,
    lineHeight: 20,
  },
});

export default AuthSidebar;
