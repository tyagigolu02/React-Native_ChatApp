import React from 'react';
import { ActivityIndicator, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../screens/VaultSettingsScreen/VaultSettingsSetupModal.styles';

const VaultSettingsSetupModal = ({
  visible,
  colors,
  accentColor,
  newPassword,
  setNewPassword,
  confirmPassword,
  setConfirmPassword,
  isLoading,
  onCancel,
  onConfirm,
}) => {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onCancel}>
      <View style={styles.modalOverlay}>
        <View style={[styles.modalContent, { backgroundColor: colors.bgCard }]}>
          <Ionicons name="lock-closed" size={48} color={accentColor} />
          <Text style={[styles.modalTitle, { color: colors.textPrimary }]}>Setup Vault Lock</Text>
          <Text style={[styles.modalMessage, { color: colors.textSecondary }]}>
            Create a password to secure your vault
          </Text>

          <TextInput
            style={[
              styles.passwordInput,
              {
                backgroundColor: colors.bgSecondary,
                color: colors.textPrimary,
                borderColor: colors.border,
              },
            ]}
            placeholder="New Password"
            placeholderTextColor={colors.textSecondary}
            secureTextEntry
            value={newPassword}
            onChangeText={setNewPassword}
            editable={!isLoading}
          />

          <TextInput
            style={[
              styles.passwordInput,
              {
                backgroundColor: colors.bgSecondary,
                color: colors.textPrimary,
                borderColor: colors.border,
              },
            ]}
            placeholder="Confirm Password"
            placeholderTextColor={colors.textSecondary}
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            editable={!isLoading}
          />

          <View style={styles.modalButtons}>
            <TouchableOpacity
              style={[styles.modalButton, { backgroundColor: colors.bgSecondary }]}
              onPress={onCancel}
              disabled={isLoading}
            >
              <Text style={[styles.modalButtonText, { color: colors.textPrimary }]}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalButton, { backgroundColor: accentColor }]}
              onPress={onConfirm}
              disabled={isLoading}
            >
              {isLoading ? (
                <ActivityIndicator color="#fff" size="small" />
              ) : (
                <Text style={[styles.modalButtonText, { color: '#fff' }]}>Enable Lock</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default VaultSettingsSetupModal;
