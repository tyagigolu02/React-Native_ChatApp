import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../screens/VaultSettingsScreen/VaultSettingsScreen.styles';

const VaultSettingsProfileCard = ({
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
}) => {
  return (
    <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
      <TouchableOpacity
        style={[styles.banner, { backgroundColor: `${accentColor}30` }]}
        onPress={handleUploadBanner}
      >
        {vaultBanner ? (
          <Image source={{ uri: vaultBanner }} style={styles.bannerImage} />
        ) : (
          <View style={styles.bannerPlaceholder}>
            <Ionicons name="image-outline" size={32} color={colors.textSecondary} />
            <Text style={[styles.bannerText, { color: colors.textSecondary }]}>Add Banner</Text>
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.avatarContainer} onPress={handleUploadAvatar}>
        <View style={[styles.avatarWrapper, { borderColor: colors.bgCard }]}>
          {vaultAvatar ? (
            <Image source={{ uri: vaultAvatar }} style={styles.avatar} />
          ) : (
            <View style={[styles.avatarPlaceholder, { backgroundColor: accentColor }]}>
              <Ionicons name="shield" size={40} color="#fff" />
            </View>
          )}
          <View style={[styles.avatarEdit, { backgroundColor: accentColor }]}>
            <Ionicons name="camera" size={16} color="#fff" />
          </View>
        </View>
      </TouchableOpacity>

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
              style={[styles.nameButton, { backgroundColor: accentColor }]}
              onPress={handleSaveName}
            >
              <Ionicons name="checkmark" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity style={styles.nameRow} onPress={() => setIsEditingName(true)}>
            <Text style={[styles.vaultName, { color: colors.textPrimary }]}>{vaultName}</Text>
            <Ionicons name="pencil" size={18} color={colors.textSecondary} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default VaultSettingsProfileCard;
