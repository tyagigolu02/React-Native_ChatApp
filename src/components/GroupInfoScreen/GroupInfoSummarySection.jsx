import React from 'react';
import { ActivityIndicator, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import groupInfoStyles from '../../screens/GroupInfoScreen/GroupInfoScreen.styles';

const GroupInfoSummarySection = ({
  group,
  colors,
  isAdmin,
  isEditing,
  editedName,
  setEditedName,
  editedDescription,
  setEditedDescription,
  handleUploadAvatar,
  handleUploadBanner,
  handleCancelEdit,
  handleSaveChanges,
  isLoading,
  setIsEditing,
}) => {
  return (
    <>
      <TouchableOpacity
        style={[groupInfoStyles.banner, { backgroundColor: colors.bgCard }]}
        onPress={isAdmin ? handleUploadBanner : undefined}
        disabled={!isAdmin}
      >
        {group.banner ? (
          <Image source={{ uri: group.banner }} style={groupInfoStyles.bannerImage} />
        ) : (
          <View style={[groupInfoStyles.bannerPlaceholder, { backgroundColor: '#667eea' }]}>
            {isAdmin && <Ionicons name="camera" size={32} color="#fff" />}
          </View>
        )}
      </TouchableOpacity>

      <View style={groupInfoStyles.avatarContainer}>
        <TouchableOpacity
          style={[
            groupInfoStyles.avatar,
            { backgroundColor: '#667eea', borderColor: colors.bgPrimary },
          ]}
          onPress={isAdmin ? handleUploadAvatar : undefined}
          disabled={!isAdmin}
        >
          {group.avatar ? (
            <Image source={{ uri: group.avatar }} style={groupInfoStyles.avatarImage} />
          ) : (
            <Text style={groupInfoStyles.avatarText}>
              {group.name.charAt(0).toUpperCase()}
            </Text>
          )}
          {isAdmin && (
            <View style={[groupInfoStyles.cameraIcon, { backgroundColor: colors.bgCard }]}>
              <Ionicons name="camera" size={16} color={colors.textPrimary} />
            </View>
          )}
        </TouchableOpacity>
      </View>

      <View style={[groupInfoStyles.card, { backgroundColor: colors.bgCard }]}>
        {isEditing ? (
          <>
            <TextInput
              style={[
                groupInfoStyles.input,
                { color: colors.textPrimary, borderColor: colors.border },
              ]}
              value={editedName}
              onChangeText={setEditedName}
              placeholder="Group name"
              placeholderTextColor={colors.textSecondary}
            />
            <TextInput
              style={[
                groupInfoStyles.input,
                groupInfoStyles.textArea,
                { color: colors.textPrimary, borderColor: colors.border },
              ]}
              value={editedDescription}
              onChangeText={setEditedDescription}
              placeholder="Group description"
              placeholderTextColor={colors.textSecondary}
              multiline
              numberOfLines={3}
            />
            <View style={groupInfoStyles.editButtons}>
              <TouchableOpacity
                style={[
                  groupInfoStyles.button,
                  groupInfoStyles.cancelButton,
                  { backgroundColor: colors.bgSecondary },
                ]}
                onPress={handleCancelEdit}
              >
                <Text style={[groupInfoStyles.buttonText, { color: colors.textPrimary }]}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  groupInfoStyles.button,
                  groupInfoStyles.saveButton,
                  { backgroundColor: '#667eea' },
                ]}
                onPress={handleSaveChanges}
                disabled={isLoading}
              >
                {isLoading ? (
                  <ActivityIndicator color="#fff" size="small" />
                ) : (
                  <Text style={groupInfoStyles.saveButtonText}>Save</Text>
                )}
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <>
            <View style={groupInfoStyles.titleRow}>
              <Text style={[groupInfoStyles.groupName, { color: colors.textPrimary }]}>
                {group.name}
              </Text>
              {isAdmin && (
                <TouchableOpacity onPress={() => setIsEditing(true)}>
                  <Ionicons name="pencil" size={20} color={colors.textPrimary} />
                </TouchableOpacity>
              )}
            </View>
            <Text style={[groupInfoStyles.groupDescription, { color: colors.textSecondary }]}>
              {group.description}
            </Text>
            <Text style={[groupInfoStyles.groupDetails, { color: colors.textSecondary }]}>
              Created: {new Date(group.createdAt).toLocaleDateString()} • {group.members.length + group.admins.length + 1} members
            </Text>
          </>
        )}
      </View>
    </>
  );
};

export default GroupInfoSummarySection;
