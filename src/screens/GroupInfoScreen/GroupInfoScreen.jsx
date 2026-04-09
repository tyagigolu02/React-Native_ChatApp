import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';
import { useScreenTitle } from '../../context/ScreenTitleContext';
import useGroupInfo from '../../hooks/useGroupInfo';
import GroupInfoSummarySection from '../../components/GroupInfoScreen/GroupInfoSummarySection';
import GroupInfoMembersSection from '../../components/GroupInfoScreen/GroupInfoMembersSection';
import GroupInfoManagementSection from '../../components/GroupInfoScreen/GroupInfoManagementSection';
import GroupInfoActionSheet from '../../components/GroupInfoScreen/GroupInfoActionSheet';
import groupInfoStyles from './GroupInfoScreen.styles';

const GroupInfoScreen = ({ route, navigation }) => {
  useScreenTitle('TranslaTalk | Group Info');
  const { colors } = useTheme();
  const { groupId } = route.params || {};

  // Group state and admin actions live in useGroupInfo to keep this screen thin.
  const {
    group,
    isEditing,
    setIsEditing,
    editedName,
    setEditedName,
    editedDescription,
    setEditedDescription,
    selectedMember,
    setSelectedMember,
    showActivityLog,
    setShowActivityLog,
    isLoading,
    isOwner,
    isAdmin,
    currentUserId,
    activities,
    handleSaveChanges,
    handleCancelEdit,
    handleUploadAvatar,
    handleUploadBanner,
    handleRemoveMember,
    handlePromoteAdmin,
    handleBanMember,
    handleLeaveGroup,
    handleDeleteGroup,
    handleCopyInviteLink,
    togglePermission,
    handleAddMembers,
  } = useGroupInfo({ groupId, navigation });

  return (
    <View style={[groupInfoStyles.container, { backgroundColor: colors.bgPrimary }]}>
      <StatusBar style={colors.isDark ? 'light' : 'dark'} />

      <View style={[groupInfoStyles.header, { backgroundColor: colors.bgCard }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={groupInfoStyles.backButton}>
          <Ionicons name="arrow-back" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
        <Text style={[groupInfoStyles.headerTitle, { color: colors.textPrimary }]}>
          Group Info
        </Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView style={groupInfoStyles.content}>
        <GroupInfoSummarySection
          group={group}
          colors={colors}
          isAdmin={isAdmin}
          isEditing={isEditing}
          editedName={editedName}
          setEditedName={setEditedName}
          editedDescription={editedDescription}
          setEditedDescription={setEditedDescription}
          handleUploadAvatar={handleUploadAvatar}
          handleUploadBanner={handleUploadBanner}
          handleCancelEdit={handleCancelEdit}
          handleSaveChanges={handleSaveChanges}
          isLoading={isLoading}
          setIsEditing={setIsEditing}
        />

        <GroupInfoMembersSection
          group={group}
          colors={colors}
          isAdmin={isAdmin}
          currentUserId={currentUserId}
          setSelectedMember={setSelectedMember}
        />

        <GroupInfoManagementSection
          group={group}
          colors={colors}
          isAdmin={isAdmin}
          isOwner={isOwner}
          showActivityLog={showActivityLog}
          setShowActivityLog={setShowActivityLog}
          activities={activities}
          togglePermission={togglePermission}
          handleCopyInviteLink={handleCopyInviteLink}
          handleAddMembers={handleAddMembers}
          handleDeleteGroup={handleDeleteGroup}
          handleLeaveGroup={handleLeaveGroup}
        />
      </ScrollView>

      <GroupInfoActionSheet
        visible={selectedMember !== null}
        selectedMember={selectedMember}
        colors={colors}
        isOwner={isOwner}
        onClose={() => setSelectedMember(null)}
        onPromote={() => handlePromoteAdmin(selectedMember?.id)}
        onBan={() => handleBanMember(selectedMember?.id)}
        onRemove={() => handleRemoveMember(selectedMember?.id)}
      />
    </View>
  );
};

export default GroupInfoScreen;
