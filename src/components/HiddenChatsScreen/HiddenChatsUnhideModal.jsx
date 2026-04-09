import React from 'react';
import { ActivityIndicator, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './HiddenChatsUnhideModal.styles';

const HiddenChatsUnhideModal = ({
  visible,
  colors,
  accentColor,
  chatToUnhide,
  password,
  setPassword,
  error,
  setError,
  isUnhiding,
  onClose,
  onConfirm,
}) => {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={[styles.modalContent, { backgroundColor: colors.bgCard }]}>
          <Ionicons name="eye" size={48} color={accentColor} />
          <Text style={[styles.modalTitle, { color: colors.textPrimary }]}>Unhide Chat?</Text>
          <Text style={[styles.modalMessage, { color: colors.textSecondary }]}>
            Enter your password to unhide &quot;{chatToUnhide?.name}&quot;
          </Text>

          <TextInput
            style={[
              styles.passwordInput,
              {
                backgroundColor: colors.bgSecondary,
                color: colors.textPrimary,
                borderColor: error ? '#ef4444' : colors.border,
              },
            ]}
            placeholder="Enter password"
            placeholderTextColor={colors.textSecondary}
            secureTextEntry
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              setError('');
            }}
            editable={!isUnhiding}
          />

          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          <View style={styles.modalButtons}>
            <TouchableOpacity
              style={[styles.modalButton, { backgroundColor: colors.bgSecondary }]}
              onPress={onClose}
              disabled={isUnhiding}
            >
              <Text style={[styles.modalButtonText, { color: colors.textPrimary }]}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalButton, { backgroundColor: accentColor }]}
              onPress={onConfirm}
              disabled={isUnhiding}
            >
              {isUnhiding ? (
                <ActivityIndicator color="#fff" size="small" />
              ) : (
                <Text style={[styles.modalButtonText, { color: '#fff' }]}>Unhide Chat</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default HiddenChatsUnhideModal;
