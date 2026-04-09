import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import groupInfoStyles from '../../screens/GroupInfoScreen/GroupInfoScreen.styles';

const GroupInfoManagementSection = ({
  group,
  colors,
  isAdmin,
  isOwner,
  showActivityLog,
  setShowActivityLog,
  activities,
  togglePermission,
  handleCopyInviteLink,
  handleAddMembers,
  handleDeleteGroup,
  handleLeaveGroup,
}) => {
  return (
    <>
      {isAdmin && (
        <View style={[groupInfoStyles.card, { backgroundColor: colors.bgCard }]}>
          <Text style={[groupInfoStyles.sectionTitle, { color: colors.textPrimary }]}>
            Group Settings
          </Text>

          <TouchableOpacity
            style={groupInfoStyles.settingRow}
            onPress={() => togglePermission('only_admins_message')}
          >
            <View style={{ flex: 1 }}>
              <Text style={[groupInfoStyles.settingText, { color: colors.textPrimary }]}>
                Only Admins Can Message
              </Text>
            </View>
            <View
              style={[
                groupInfoStyles.switch,
                group.permissions.only_admins_message && groupInfoStyles.switchActive,
              ]}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={groupInfoStyles.settingRow}
            onPress={() => togglePermission('is_private')}
          >
            <View style={{ flex: 1 }}>
              <Text style={[groupInfoStyles.settingText, { color: colors.textPrimary }]}>
                Private Group
              </Text>
            </View>
            <View
              style={[
                groupInfoStyles.switch,
                group.permissions.is_private && groupInfoStyles.switchActive,
              ]}
            />
          </TouchableOpacity>

          <TouchableOpacity style={groupInfoStyles.settingRow} onPress={handleCopyInviteLink}>
            <Ionicons name="link" size={20} color={colors.textPrimary} />
            <Text style={[groupInfoStyles.settingText, { color: colors.textPrimary }]}>
              Copy Invite Link
            </Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={[groupInfoStyles.card, { backgroundColor: colors.bgCard }]}>
        <TouchableOpacity
          style={groupInfoStyles.titleRow}
          onPress={() => setShowActivityLog((previous) => !previous)}
        >
          <Text style={[groupInfoStyles.sectionTitle, { color: colors.textPrimary }]}>
            Activity Log
          </Text>
          <Ionicons
            name={showActivityLog ? 'chevron-up' : 'chevron-down'}
            size={20}
            color={colors.textPrimary}
          />
        </TouchableOpacity>

        {showActivityLog &&
          activities.map((activity) => (
            <View key={activity.id} style={groupInfoStyles.activityItem}>
              <Text style={[groupInfoStyles.activityText, { color: colors.textSecondary }]}>
                {activity.actor} {activity.action.replace('_', ' ')} {activity.target} • {activity.time}
              </Text>
            </View>
          ))}
      </View>

      <View style={groupInfoStyles.actions}>
        {isAdmin && (
          <>
            <TouchableOpacity
              style={[groupInfoStyles.actionButton, { backgroundColor: '#667eea' }]}
              onPress={handleAddMembers}
            >
              <Ionicons name="person-add" size={20} color="#fff" />
              <Text style={groupInfoStyles.actionButtonText}>Add Members</Text>
            </TouchableOpacity>

            {isOwner && (
              <TouchableOpacity
                style={[groupInfoStyles.actionButton, { backgroundColor: colors.error }]}
                onPress={handleDeleteGroup}
              >
                <Ionicons name="trash" size={20} color="#fff" />
                <Text style={groupInfoStyles.actionButtonText}>Delete Group</Text>
              </TouchableOpacity>
            )}
          </>
        )}

        {!isOwner && (
          <TouchableOpacity
            style={[groupInfoStyles.actionButton, { backgroundColor: colors.error }]}
            onPress={handleLeaveGroup}
          >
            <Ionicons name="exit" size={20} color="#fff" />
            <Text style={groupInfoStyles.actionButtonText}>Leave Group</Text>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default GroupInfoManagementSection;
