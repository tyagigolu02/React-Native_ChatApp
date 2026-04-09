import React from 'react';
import { View } from 'react-native';
import styles from '../../screens/VaultSettingsScreen/VaultSettingsScreen.styles';
import VaultSettingsProfileCard from './VaultSettingsProfileCard';
import VaultSettingsSecuritySection from './VaultSettingsSecuritySection';
import VaultSettingsInfoSections from './VaultSettingsInfoSections';

const VaultSettingsContent = ({
  colors,
  accentColor,
  vaultName,
  setVaultName,
  isEditingName,
  setIsEditingName,
  vaultBanner,
  vaultAvatar,
  handleUploadBanner,
  handleUploadAvatar,
  handleSaveName,
  isLockEnabled,
  handleToggleLock,
  autoLockTime,
  setAutoLockTime,
  timeOptions,
}) => {
  return (
    <>
      <VaultSettingsProfileCard
        colors={colors}
        accentColor={accentColor}
        vaultName={vaultName}
        setVaultName={setVaultName}
        isEditingName={isEditingName}
        setIsEditingName={setIsEditingName}
        vaultBanner={vaultBanner}
        vaultAvatar={vaultAvatar}
        handleUploadBanner={handleUploadBanner}
        handleUploadAvatar={handleUploadAvatar}
        handleSaveName={handleSaveName}
      />

      <VaultSettingsSecuritySection
        colors={colors}
        accentColor={accentColor}
        isLockEnabled={isLockEnabled}
        handleToggleLock={handleToggleLock}
        autoLockTime={autoLockTime}
        setAutoLockTime={setAutoLockTime}
        timeOptions={timeOptions}
      />

      <VaultSettingsInfoSections colors={colors} accentColor={accentColor} />
      <View style={styles.bottomSpacer} />
    </>
  );
};

export default VaultSettingsContent;
