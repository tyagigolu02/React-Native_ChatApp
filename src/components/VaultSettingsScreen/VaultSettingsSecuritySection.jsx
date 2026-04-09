import React from 'react';
import { Switch, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../screens/VaultSettingsScreen/VaultSettingsScreen.styles';

const VaultSettingsSecuritySection = ({
  colors,
  accentColor,
  isLockEnabled,
  handleToggleLock,
  autoLockTime,
  setAutoLockTime,
  timeOptions,
}) => {
  return (
    <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
      <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>Security Settings</Text>

      <View style={[styles.settingRow, { borderBottomColor: colors.border }]}>
        <View style={styles.settingInfo}>
          <Ionicons name="lock-closed" size={20} color={accentColor} />
          <View style={styles.settingText}>
            <Text style={[styles.settingLabel, { color: colors.textPrimary }]}>
              Enable Vault Lock
            </Text>
            <Text style={[styles.settingDescription, { color: colors.textSecondary }]}>
              Require password to access hidden chats
            </Text>
          </View>
        </View>
        <Switch
          value={isLockEnabled}
          onValueChange={handleToggleLock}
          trackColor={{ false: colors.border, true: accentColor }}
          thumbColor="#fff"
        />
      </View>

      {isLockEnabled && (
        <View style={styles.autoLockSection}>
          <View style={styles.settingInfo}>
            <Ionicons name="time" size={20} color={accentColor} />
            <View style={styles.settingText}>
              <Text style={[styles.settingLabel, { color: colors.textPrimary }]}>
                Auto-Lock Timeout
              </Text>
              <Text style={[styles.settingDescription, { color: colors.textSecondary }]}>
                Lock vault after inactivity
              </Text>
            </View>
          </View>

          <View style={[styles.timeoutPicker, { backgroundColor: colors.bgSecondary }]}>
            {timeOptions.map((option) => (
              <TouchableOpacity
                key={option.value}
                style={[
                  styles.timeOption,
                  autoLockTime === option.value && { backgroundColor: accentColor },
                ]}
                onPress={() => setAutoLockTime(option.value)}
              >
                <Text
                  style={[
                    styles.timeOptionText,
                    { color: autoLockTime === option.value ? '#fff' : colors.textPrimary },
                  ]}
                >
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

export default VaultSettingsSecuritySection;
