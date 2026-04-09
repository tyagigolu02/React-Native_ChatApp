import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';
import useUserManual from '../../hooks/useUserManual';
import { userManualSections } from './userManualData';
import styles from './UserManualStyles';
import UserManualSectionCard from '../../components/UserManualScreen/UserManualSectionCard';

const UserManualScreen = ({ navigation }) => {
  const { colors, isDark } = useTheme();
  const { toggleSection, isExpanded, webScrollViewStyles } = useUserManual();

  return (
    <View style={[styles.mainContainer, { backgroundColor: colors.bgPrimary }]}>
      <View style={[styles.topBar, { backgroundColor: colors.primary }]}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.topBarTitle}>User Manual</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView
        style={[styles.scrollView, webScrollViewStyles]}
        scrollEnabled
        nestedScrollEnabled
        showsVerticalScrollIndicator
      >
        <View style={[styles.header, { backgroundColor: colors.primary }]}>
          <Ionicons name="book" size={40} color="#fff" style={{ marginBottom: 12 }} />
          <Text style={styles.headerTitle}>User Manual</Text>
          <Text style={styles.headerSubtitle}>Complete TranslaTalk Guide</Text>
        </View>

        <View style={[styles.introSection, { backgroundColor: isDark ? '#2a2a3e' : '#f8f9fa' }]}>
          <Text style={[styles.introTitle, { color: colors.primary }]}>Welcome to TranslaTalk</Text>
          <Text style={[styles.introText, { color: isDark ? '#ccc' : '#555' }]}>
            Your complete communication platform with real-time translation, encrypted messaging,
            and advanced features. Tap any section to learn more.
          </Text>
        </View>

        <View style={styles.sectionsContainer}>
          {(userManualSections || []).map((section, index) => (
            <UserManualSectionCard
              key={section.id ?? index}
              section={section}
              index={index}
              colors={colors}
              isDark={isDark}
              isExpanded={isExpanded(index)}
              onToggle={() => toggleSection(index)}
            />
          ))}
        </View>

        <View style={[styles.footer, { backgroundColor: isDark ? '#2a2a3e' : '#f0f0f0' }]}>
          <Ionicons name="help-circle" size={32} color={colors.primary} style={{ marginBottom: 12 }} />
          <Text style={[styles.footerTitle, { color: isDark ? '#fff' : '#333' }]}>Need More Help?</Text>
          <Text style={[styles.footerDesc, { color: isDark ? '#aaa' : '#666' }]}>Visit our Help page for FAQs or contact support.</Text>
        </View>

        <View style={{ height: 30 }} />
      </ScrollView>
    </View>
  );
};

export default UserManualScreen;
