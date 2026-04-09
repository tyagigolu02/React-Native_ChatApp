import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';
import { useScreenTitle } from '../../context/ScreenTitleContext';
import useVaultSettings from '../../hooks/useVaultSettings';
import styles from './VaultSettingsScreen.styles';
import VaultSettingsContent from '../../components/VaultSettingsScreen/VaultSettingsContent';
import VaultSettingsSetupModal from '../../components/VaultSettingsScreen/VaultSettingsSetupModal';

const ACCENT_COLOR = '#8b5cf6';

const VaultSettingsScreen = ({ navigation }) => {
  useScreenTitle('TranslaTalk | Vault Settings');
  const { colors } = useTheme();

  const {
    vaultName,
    setVaultName,
    isEditingName,
    setIsEditingName,
    vaultBanner,
    vaultAvatar,
    isLockEnabled,
    autoLockTime,
    setAutoLockTime,
    showSetupModal,
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    isLoading,
    timeOptions,
    handleUploadBanner,
    handleUploadAvatar,
    handleSaveName,
    handleSetupLock,
    handleToggleLock,
    closeSetupModal,
  } = useVaultSettings();

  return (
    <View style={[styles.container, { backgroundColor: colors.bgPrimary }]}>
      <StatusBar style={colors.isDark ? 'light' : 'dark'} />

      <View style={[styles.header, { backgroundColor: colors.bgCard, borderBottomColor: colors.border }]}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>Vault Settings</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <VaultSettingsContent
          colors={colors}
          accentColor={ACCENT_COLOR}
          vaultName={vaultName}
          setVaultName={setVaultName}
          isEditingName={isEditingName}
          setIsEditingName={setIsEditingName}
          vaultBanner={vaultBanner}
          vaultAvatar={vaultAvatar}
          handleUploadBanner={handleUploadBanner}
          handleUploadAvatar={handleUploadAvatar}
          handleSaveName={handleSaveName}
          isLockEnabled={isLockEnabled}
          handleToggleLock={handleToggleLock}
          autoLockTime={autoLockTime}
          setAutoLockTime={setAutoLockTime}
          timeOptions={timeOptions}
        />
      </ScrollView>

      <VaultSettingsSetupModal
        visible={showSetupModal}
        colors={colors}
        accentColor={ACCENT_COLOR}
        newPassword={newPassword}
        setNewPassword={setNewPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        isLoading={isLoading}
        onCancel={closeSetupModal}
        onConfirm={handleSetupLock}
      />
    </View>
  );
};

export default VaultSettingsScreen;
