import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../screens/ArchivedChatsScreen/ArchivedChatsScreen.styles';

const ArchivedChatsListItem = ({
  item,
  colors,
  selected,
  selectionMode,
  formatMessageTime,
  handleChatPress,
  handleChatLongPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.chatItem,
        { backgroundColor: colors.bgCard, borderBottomColor: colors.border },
        selected && { backgroundColor: colors.primary + '20' },
      ]}
      onPress={() => handleChatPress(item)}
      onLongPress={() => handleChatLongPress(item)}
    >
      {selectionMode && (
        <View style={styles.checkbox}>
          <Ionicons
            name={selected ? 'checkbox' : 'square-outline'}
            size={24}
            color={selected ? colors.primary : colors.textSecondary}
          />
        </View>
      )}

      <View style={styles.avatarContainer}>
        {item.avatar ? (
          <Image source={{ uri: item.avatar }} style={styles.avatar} />
        ) : (
          <View style={[styles.avatarPlaceholder, { backgroundColor: colors.primary }]}>
            <Text style={styles.avatarText}>{item.name.substring(0, 2).toUpperCase()}</Text>
          </View>
        )}
        {item.isOnline && !item.isGroup && (
          <View style={[styles.onlineIndicator, { borderColor: colors.bgCard }]} />
        )}
      </View>

      <View style={styles.chatInfo}>
        <View style={styles.chatHeader}>
          <View style={styles.chatNameRow}>
            <Text style={[styles.chatName, { color: colors.textPrimary }]} numberOfLines={1}>
              {item.name}
            </Text>
            {item.isLocked && (
              <Ionicons
                name="lock-closed"
                size={14}
                color={colors.textSecondary}
                style={styles.lockIcon}
              />
            )}
          </View>
          <Text style={[styles.messageTime, { color: colors.textSecondary }]}>
            {formatMessageTime(item.lastMessageTime)}
          </Text>
        </View>

        <View style={styles.messageRow}>
          <Text style={[styles.lastMessage, { color: colors.textSecondary }]} numberOfLines={1}>
            {item.lastMessage}
          </Text>
          {item.unreadCount > 0 && (
            <View style={[styles.unreadBadge, { backgroundColor: colors.primary }]}>
              <Text style={styles.unreadText}>{item.unreadCount}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ArchivedChatsListItem;
