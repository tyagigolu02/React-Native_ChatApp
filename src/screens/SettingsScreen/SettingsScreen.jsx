import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Switch,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';
import { useScreenTitle } from '../../context/ScreenTitleContext';

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
        </View>

        {/* Notifications Section */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            Notifications
          </Text>
          <SettingRow
            icon="notifications-outline"
            title="Push Notifications"
            value={notifications}
            onToggle={() => setNotifications(!notifications)}
          />
          <SettingRow
            icon="volume-high-outline"
            title="Notification Sounds"
            value={soundEnabled}
            onToggle={() => setSoundEnabled(!soundEnabled)}
          />
        </View>

        {/* Privacy & Security */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            Privacy & Security
          </Text>
          <SettingRow
            icon="shield-outline"
            title="Privacy Policy"
            hasChevron
            onPress={() => navigation.navigate('Privacy')}
          />
          <SettingRow
            icon="document-text-outline"
            title="Terms of Service"
            hasChevron
            onPress={() => navigation.navigate('Terms')}
          />
          <SettingRow
            icon="ban-outline"
            title="Blocked Users"
            hasChevron
            onPress={() => navigation.navigate('BlockedUsers')}
          />
        </View>

        {/* Help & Support */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            Help & Support
          </Text>
          <SettingRow
            icon="information-circle-outline"
            title="About"
            hasChevron
            onPress={() => navigation.navigate('About')}
          />
          <SettingRow
            icon="help-circle-outline"
            title="Help Center"
            hasChevron
            onPress={() => navigation.navigate('Help')}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingTop: 48,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollContent: {
    padding: 16,
    gap: 16,
  },
  section: {
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    padding: 16,
    paddingBottom: 8,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  settingTitle: {
    fontSize: 15,
    fontWeight: '500',
  },
});

export default SettingsScreen;
