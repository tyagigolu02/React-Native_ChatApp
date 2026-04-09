import React from 'react';
import { Text, View } from 'react-native';
import groupInfoStyles from '../../screens/GroupInfoScreen/GroupInfoScreen.styles';
import GroupInfoMemberItem from './GroupInfoMemberItem';

const GroupInfoMembersSection = ({
  group,
  colors,
  isAdmin,
  currentUserId,
  setSelectedMember,
}) => {
  return (
    <>
      <View style={[groupInfoStyles.card, { backgroundColor: colors.bgCard }]}>
        <Text style={[groupInfoStyles.sectionTitle, { color: colors.textPrimary }]}>
          Group Owner
        </Text>
        <View style={groupInfoStyles.ownerItem}>
          <View style={[groupInfoStyles.memberAvatar, { backgroundColor: '#667eea' }]}>
            <Text style={groupInfoStyles.memberAvatarText}>
              {group.owner.name.charAt(0).toUpperCase()}
            </Text>
          </View>
          <Text style={[groupInfoStyles.memberName, { color: colors.textPrimary }]}>
            {group.owner.name}
          </Text>
        </View>
      </View>

      {group.admins.length > 0 && (
        <View style={[groupInfoStyles.card, { backgroundColor: colors.bgCard }]}>
          <Text style={[groupInfoStyles.sectionTitle, { color: colors.textPrimary }]}>
            Admins ({group.admins.length})
          </Text>
          {group.admins.map((admin) => (
            <GroupInfoMemberItem
              key={admin.id}
              item={admin}
              colors={colors}
              showActions={isAdmin && admin.id !== currentUserId}
              onPressActions={() => setSelectedMember(admin)}
            />
          ))}
        </View>
      )}

      <View style={[groupInfoStyles.card, { backgroundColor: colors.bgCard }]}>
        <Text style={[groupInfoStyles.sectionTitle, { color: colors.textPrimary }]}>
          Members ({group.members.length})
        </Text>
        {group.members.map((member) => (
          <GroupInfoMemberItem
            key={member.id}
            item={member}
            colors={colors}
            showActions={isAdmin && member.id !== currentUserId}
            onPressActions={() => setSelectedMember(member)}
          />
        ))}
      </View>
    </>
  );
};

export default GroupInfoMembersSection;
