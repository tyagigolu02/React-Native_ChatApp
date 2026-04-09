import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import groupInfoStyles from '../../screens/GroupInfoScreen/GroupInfoScreen.styles';

const GroupInfoMemberItem = ({ item, colors, showActions = false, onPressActions }) => {
  return (
    <View style={[groupInfoStyles.memberItem, { borderBottomColor: colors.border }]}>
      <View style={[groupInfoStyles.memberAvatar, { backgroundColor: '#667eea' }]}>
        {item.avatar ? (
          <Image source={{ uri: item.avatar }} style={groupInfoStyles.memberAvatarImage} />
        ) : (
          <Text style={groupInfoStyles.memberAvatarText}>
            {item.name.charAt(0).toUpperCase()}
          </Text>
        )}
      </View>

      <View style={groupInfoStyles.memberInfo}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Text style={[groupInfoStyles.memberName, { color: colors.textPrimary }]}>
            {item.name}
          </Text>
          {item.is_muted && (
            <Ionicons name="volume-mute" size={14} color={colors.textSecondary} />
          )}
        </View>
        <Text style={[groupInfoStyles.memberEmail, { color: colors.textSecondary }]}>
          {item.email}
        </Text>
      </View>

      {showActions && (
        <TouchableOpacity style={groupInfoStyles.memberActions} onPress={onPressActions}>
          <Ionicons name="ellipsis-vertical" size={20} color={colors.textSecondary} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default GroupInfoMemberItem;
