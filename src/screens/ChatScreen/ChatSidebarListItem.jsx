import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './ChatSidebar.styles';

const ChatSidebarListItem = ({ item, selected, colors, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.chatItem,
        { backgroundColor: selected ? colors.bgTertiary : 'transparent' },
      ]}
      onPress={() => onPress(item)}
    >
      <View style={[styles.avatar, { backgroundColor: colors.primary.gradient?.[0] || '#667eea' }]}>
        <Text style={styles.avatarText}>{item.name.charAt(0).toUpperCase()}</Text>
        {item.isOnline ? <View style={styles.onlineIndicator} /> : null}
      </View>

      <View style={styles.chatInfo}>
        <View style={styles.chatHeader}>
          <Text style={[styles.chatName, { color: colors.textPrimary }]} numberOfLines={1}>
            {item.name}
          </Text>
          <Text style={[styles.timestamp, { color: colors.textSecondary }]}>{item.timestamp}</Text>
        </View>
        <View style={styles.messageRow}>
          <Text style={[styles.lastMessage, { color: colors.textSecondary }]} numberOfLines={1}>
            {item.lastMessage}
          </Text>
          {item.unread > 0 ? (
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadText}>{item.unread}</Text>
            </View>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatSidebarListItem;