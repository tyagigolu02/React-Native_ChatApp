import { useState } from 'react';
import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const timeOptions = [
  { label: '1 minute', value: 1 },
  { label: '5 minutes', value: 5 },
  { label: '15 minutes', value: 15 },
  { label: '30 minutes', value: 30 },
  { label: '1 hour', value: 60 },
];

const useVaultSettings = () => {
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

  const resetSetupForm = () => {
    setNewPassword('');
    setConfirmPassword('');
  };

  const closeSetupModal = () => {
    setShowSetupModal(false);
    resetSetupForm();
    setIsLoading(false);
  };

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
    const nextName = vaultName.trim();

    if (!nextName) {
      return;
    }

    setVaultName(nextName);
    setIsEditingName(false);
    Alert.alert('Success', 'Vault name updated');
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
      closeSetupModal();
      Alert.alert('Success', 'Vault lock enabled successfully');
    }, 1000);
  };

  const handleToggleLock = (value) => {
    if (value && !isLockEnabled) {
      setShowSetupModal(true);
      return;
    }

    if (!value && isLockEnabled) {
      Alert.alert('Disable Vault Lock', 'Are you sure you want to disable vault lock?', [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Disable',
          style: 'destructive',
          onPress: () => {
            setIsLockEnabled(false);
            Alert.alert('Success', 'Vault lock disabled');
          },
        },
      ]);
    }
  };

  return {
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
  };
};

export default useVaultSettings;
