import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../screens/VaultSettingsScreen/VaultSettingsScreen.styles';

const vaultTips = [
  'Use a strong, unique password for maximum security',
  'Enable auto-lock to automatically secure your vault',
  'Customize your vault with a unique avatar and banner',
];

const VaultSettingsInfoSections = ({ colors, accentColor }) => {
  return (
    <>
      <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
        <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>About Vault</Text>
        <Text style={[styles.aboutText, { color: colors.textSecondary }]}>
          The Vault is a secure space for your private conversations. When enabled, vault lock
          requires password authentication to access hidden chats, providing an extra layer of
          privacy and security.
        </Text>
      </View>

      <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
        <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>Pro Tips</Text>

        {vaultTips.map((tip) => (
          <View key={tip} style={styles.tipItem}>
            <Ionicons name="bulb" size={20} color={accentColor} />
            <Text style={[styles.tipText, { color: colors.textSecondary }]}>{tip}</Text>
          </View>
        ))}
      </View>
    </>
  );
};

export default VaultSettingsInfoSections;
