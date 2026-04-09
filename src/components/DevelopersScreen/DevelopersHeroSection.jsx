import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../screens/DevelopersScreen/DevelopersScreen.styles';

const DevelopersHeroSection = ({ colors, isDark, stats }) => {
  return (
    <View style={[styles.heroSection, { backgroundColor: colors.bgCard }]}>
      <View style={[styles.badge, { backgroundColor: 'rgba(102,126,234,0.1)' }]}>
        <Ionicons name="people" size={16} color={colors.primary} />
        <Text style={[styles.badgeText, { color: colors.primary }]}>Our Amazing Team</Text>
      </View>

      <Text style={[styles.heroTitle, { color: colors.textPrimary }]}>
        The Minds Behind{'\n'}TranslaTalk
      </Text>

      <Text style={[styles.heroSubtitle, { color: colors.textSecondary }]}>
        Meet the talented developers who brought this project to life. We&apos;re passionate about
        breaking language barriers and connecting people worldwide.
      </Text>

      <View style={styles.statsContainer}>
        {stats.map((stat, index) => (
          <View key={index} style={styles.statItem}>
            <Text style={[styles.statValue, { color: colors.textPrimary }]}>{stat.value}</Text>
            <Text style={[styles.statLabel, { color: colors.textSecondary }]}>{stat.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default DevelopersHeroSection;
