import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Switch,
  Modal,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from '../../context/ThemeContext';
import { useScreenTitle } from '../../context/ScreenTitleContext';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const PURPLE_COLOR = '#8b5cf6';

const VaultSettingsScreen = ({ navigation }) => {
  useScreenTitle('TranslaTalk | Vault Settings');
  const { colors } = useTheme();

  const [vaultName, setVaultName] = useState('My Vault');
  const [isEditingName, setIsEditingName] = useState(false);
  const [vaultBanner, setVaultBanner] = useState(null);
  const [vaultAvatar, setVaultAvatar] = useState(null);
  const [isLockEnabled, setIsLockEnabled] = useState(false);
  const [autoLockTime, setAutoLockTime] = useState(5);
  const [showSetupModal, setShowSetupModal] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleUploadBanner = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.8,
    });

    if (!result.canceled) {
      setVaultBanner(result.assets[0].uri);
      Alert.alert('Success', 'Vault banner updated');
    }
  };

  const handleUploadAvatar = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      setVaultAvatar(result.assets[0].uri);
      Alert.alert('Success', 'Vault avatar updated');
    }
  };

  const handleSaveName = () => {
    if (vaultName.trim()) {
      setIsEditingName(false);
      Alert.alert('Success', 'Vault name updated');
    }
  };

  const handleSetupLock = () => {
    if (!newPassword || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    if (newPassword.length < 4) {
      Alert.alert('Error', 'Password must be at least 4 characters');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLockEnabled(true);
      setShowSetupModal(false);
      setNewPassword('');
      setConfirmPassword('');
      setIsLoading(false);
      Alert.alert('Success', 'Vault lock enabled successfully');
    }, 1000);
  };

  const handleToggleLock = (value) => {
    if (value && !isLockEnabled) {
      setShowSetupModal(true);
    } else if (!value && isLockEnabled) {
      Alert.alert(
        'Disable Vault Lock',
        'Are you sure you want to disable vault lock?',
        [
          { text: 'Cancel', style: 'cancel' },
          {
            text: 'Disable',
            style: 'destructive',
            onPress: () => {
              setIsLockEnabled(false);
              Alert.alert('Success', 'Vault lock disabled');
            },
          },
        ]
      );
    }
  };

  const timeOptions = [
    { label: '1 minute', value: 1 },
    { label: '5 minutes', value: 5 },
    { label: '15 minutes', value: 15 },
    { label: '30 minutes', value: 30 },
    { label: '1 hour', value: 60 },
  ];

  return (
    <View style={[styles.container, { backgroundColor: colors.bgPrimary }]}>
      <StatusBar style={colors.isDark ? 'light' : 'dark'} />

      {/* Header */}
      <View style={[styles.header, { backgroundColor: colors.bgCard, borderBottomColor: colors.border }]}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>
          Vault Settings
        </Text>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Vault Profile Card */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          {/* Banner */}
          <TouchableOpacity 
            style={[styles.banner, { backgroundColor: PURPLE_COLOR + '30' }]}
            onPress={handleUploadBanner}
          >
            {vaultBanner ? (
              <Image source={{ uri: vaultBanner }} style={styles.bannerImage} />
            ) : (
              <View style={styles.bannerPlaceholder}>
                <Ionicons name="image-outline" size={32} color={colors.textSecondary} />
                <Text style={[styles.bannerText, { color: colors.textSecondary }]}>
                  Add Banner
                </Text>
              </View>
            )}
          </TouchableOpacity>

          {/* Avatar */}
          <TouchableOpacity 
            style={styles.avatarContainer}
            onPress={handleUploadAvatar}
          >
            <View style={[styles.avatarWrapper, { borderColor: colors.bgCard }]}>
              {vaultAvatar ? (
                <Image source={{ uri: vaultAvatar }} style={styles.avatar} />
              ) : (
                <View style={[styles.avatarPlaceholder, { backgroundColor: PURPLE_COLOR }]}>
                  <Ionicons name="shield" size={40} color="#fff" />
                </View>
              )}
              <View style={[styles.avatarEdit, { backgroundColor: PURPLE_COLOR }]}>
                <Ionicons name="camera" size={16} color="#fff" />
              </View>
            </View>
          </TouchableOpacity>

          {/* Vault Name */}
          <View style={styles.nameSection}>
            {isEditingName ? (
              <View style={styles.nameEditRow}>
                <TextInput
                  style={[
                    styles.nameInput,
                    { 
                      backgroundColor: colors.bgSecondary, 
                      color: colors.textPrimary,
                      borderColor: colors.border,
                    },
                  ]}
                  value={vaultName}
                  onChangeText={setVaultName}
                  autoFocus
                />
                <TouchableOpacity
                  style={[styles.nameButton, { backgroundColor: PURPLE_COLOR }]}
                  onPress={handleSaveName}
                >
                  <Ionicons name="checkmark" size={20} color="#fff" />
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity
                style={styles.nameRow}
                onPress={() => setIsEditingName(true)}
              >
                <Text style={[styles.vaultName, { color: colors.textPrimary }]}>
                  {vaultName}
                </Text>
                <Ionicons name="pencil" size={18} color={colors.textSecondary} />
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* Security Settings */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            Security Settings
          </Text>

          <View style={[styles.settingRow, { borderBottomColor: colors.border }]}>
            <View style={styles.settingInfo}>
              <Ionicons name="lock-closed" size={20} color={PURPLE_COLOR} />
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
              trackColor={{ false: colors.border, true: PURPLE_COLOR }}
              thumbColor="#fff"
            />
          </View>

          {isLockEnabled && (
            <View style={styles.settingRow}>
              <View style={styles.settingInfo}>
                <Ionicons name="time" size={20} color={PURPLE_COLOR} />
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
                      autoLockTime === option.value && { backgroundColor: PURPLE_COLOR },
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

        {/* About Vault */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            About Vault
          </Text>
          <Text style={[styles.aboutText, { color: colors.textSecondary }]}>
            The Vault is a secure space for your private conversations. When enabled, vault lock 
            requires password authentication to access hidden chats, providing an extra layer of 
            privacy and security.
          </Text>
        </View>

        {/* Pro Tips */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            Pro Tips
          </Text>
          
          <View style={styles.tipItem}>
            <Ionicons name="bulb" size={20} color={PURPLE_COLOR} />
            <Text style={[styles.tipText, { color: colors.textSecondary }]}>
              Use a strong, unique password for maximum security
            </Text>
          </View>

          <View style={styles.tipItem}>
            <Ionicons name="bulb" size={20} color={PURPLE_COLOR} />
            <Text style={[styles.tipText, { color: colors.textSecondary }]}>
              Enable auto-lock to automatically secure your vault
            </Text>
          </View>

          <View style={styles.tipItem}>
            <Ionicons name="bulb" size={20} color={PURPLE_COLOR} />
            <Text style={[styles.tipText, { color: colors.textSecondary }]}>
              Customize your vault with a unique avatar and banner
            </Text>
          </View>
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>

      {/* Setup Lock Modal */}
      <Modal
        visible={showSetupModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowSetupModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { backgroundColor: colors.bgCard }]}>
            <Ionicons name="lock-closed" size={48} color={PURPLE_COLOR} />
            <Text style={[styles.modalTitle, { color: colors.textPrimary }]}>
              Setup Vault Lock
            </Text>
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
                onPress={() => {
                  setShowSetupModal(false);
                  setNewPassword('');
                  setConfirmPassword('');
                }}
                disabled={isLoading}
              >
                <Text style={[styles.modalButtonText, { color: colors.textPrimary }]}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: PURPLE_COLOR }]}
                onPress={handleSetupLock}
                disabled={isLoading}
              >
                {isLoading ? (
                  <ActivityIndicator color="#fff" size="small" />
                ) : (
                  <Text style={[styles.modalButtonText, { color: '#fff' }]}>
                    Enable Lock
                  </Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingTop: 48,
    borderBottomWidth: 1,
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  scrollView: {
    flex: 1,
  },
  section: {
    marginBottom: 12,
    padding: 16,
  },
  banner: {
    height: 120,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: -40,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  bannerPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerText: {
    fontSize: 14,
    marginTop: 8,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: -20,
  },
  avatarWrapper: {
    borderWidth: 4,
    borderRadius: 50,
    position: 'relative',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  avatarPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarEdit: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameSection: {
    marginTop: 12,
    alignItems: 'center',
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  vaultName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  nameEditRow: {
    flexDirection: 'row',
    gap: 8,
    width: '100%',
  },
  nameInput: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    fontSize: 16,
    borderWidth: 1,
  },
  nameButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  settingInfo: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
    gap: 12,
  },
  settingText: {
    flex: 1,
  },
  settingLabel: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  settingDescription: {
    fontSize: 12,
  },
  timeoutPicker: {
    width: '100%',
    marginTop: 12,
    borderRadius: 8,
    padding: 4,
  },
  timeOption: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  timeOptionText: {
    fontSize: 14,
    fontWeight: '500',
  },
  aboutText: {
    fontSize: 14,
    lineHeight: 20,
  },
  tipItem: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  tipText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
  },
  bottomSpacer: {
    height: 24,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '85%',
    maxWidth: 400,
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  modalMessage: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  passwordInput: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    fontSize: 14,
    borderWidth: 1,
    marginBottom: 12,
  },
  modalButtons: {
    flexDirection: 'row',
    gap: 12,
    width: '100%',
  },
  modalButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
});

export default VaultSettingsScreen;
