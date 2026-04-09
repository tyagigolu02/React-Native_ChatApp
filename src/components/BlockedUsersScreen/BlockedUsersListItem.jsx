import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from '../../screens/BlockedUsersScreen/BlockedUsersScreen.styles';

const BlockedUsersListItem = ({ item, colors, formatBlockedDate, handleUnblock }) => {
  return (
    <View style={[styles.userItem, { backgroundColor: colors.bgCard, borderBottomColor: colors.border }]}>
      <View style={styles.userInfo}>
        <View style={styles.avatarContainer}>
          {item.avatar ? (
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
          ) : (
            <View style={[styles.avatarPlaceholder, { backgroundColor: '#ef4444' }]}>
              <Text style={styles.avatarText}>{item.name.substring(0, 2).toUpperCase()}</Text>
            </View>
          )}
        </View>

        <View style={styles.userDetails}>
          <Text style={[styles.userName, { color: colors.textPrimary }]} numberOfLines={1}>
            {item.name}
          </Text>
          <Text style={[styles.userEmail, { color: colors.textSecondary }]} numberOfLines={1}>
            {item.email}
          </Text>
          <Text style={[styles.blockedDate, { color: colors.textSecondary }]}>Blocked {formatBlockedDate(item.blockedAt)}</Text>
        </View>
      </View>

      <TouchableOpacity style={[styles.unblockButton, { backgroundColor: colors.primary }]} onPress={() => handleUnblock(item)}>
        <Text style={styles.unblockButtonText}>Unblock</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BlockedUsersListItem;