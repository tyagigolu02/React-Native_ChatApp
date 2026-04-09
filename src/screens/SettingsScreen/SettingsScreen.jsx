import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Switch,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';
import { useScreenTitle } from '../../context/ScreenTitleContext';
import styles from './SettingsScreen.styles';

const SettingsScreen = ({ navigation }) => {
  useScreenTitle('TranslaTalk | Settings');
  const { colors, isDark, toggleTheme } = useTheme();
  const [notifications, setNotifications] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const SettingRow = ({ icon, title, value, onToggle, hasChevron, onPress }) => (
    <TouchableOpacity
      style={[styles.settingRow, { borderBottomColor: colors.border }]}
      onPress={onPress}
      disabled={!hasChevron && !onToggle}
    >
      <View style={styles.settingLeft}>
        <Ionicons name={icon} size={22} color={colors.textPrimary} />
        <Text style={[styles.settingTitle, { color: colors.textPrimary }]}>
          {title}
        </Text>
      </View>
      {onToggle ? (
        <Switch
          value={value}
          onValueChange={onToggle}
          trackColor={{ false: colors.gray300, true: '#667eea' }}
          thumbColor="#fff"
        />
      ) : hasChevron ? (
        <Ionicons name="chevron-forward" size={20} color={colors.textSecondary} />
      ) : null}
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.bgSecondary }]}>
      <StatusBar style={colors.isDark ? 'light' : 'dark'} />
      
      {/* Header */}
      <View style={[styles.header, { backgroundColor: colors.bgCard }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>
          Settings
        </Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Appearance Section */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            Appearance
          </Text>
          <SettingRow
            icon="moon-outline"
            title="Dark Mode"
            value={isDark}
            onToggle={toggleTheme}
          />
          <SettingRow
            icon="chatbubble-outline"
            title="Send Feedback"
            hasChevron
            onPress={() => navigation.navigate('Feedback')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default SettingsScreen;
