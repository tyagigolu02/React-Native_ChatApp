import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../screens/HiddenChatsScreen/HiddenChatsScreen.styles';

const HiddenChatsListItem = ({ item, colors, formatMessageTime, handleChatPress, handleUnhidePress, accentColor }) => {
  return (
    <View style={[styles.chatItem, { backgroundColor: colors.bgCard, borderBottomColor: colors.border }]}>
      <TouchableOpacity style={styles.chatContent} onPress={() => handleChatPress(item)}>
        <View style={styles.avatarContainer}>
          {item.avatar ? (
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
          ) : (
            <View style={[styles.avatarPlaceholder, { backgroundColor: accentColor }]}>
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
                <Ionicons name="lock-closed" size={14} color={accentColor} style={styles.lockIcon} />
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
              <View style={[styles.unreadBadge, { backgroundColor: accentColor }]}>
                <Text style={styles.unreadText}>{item.unreadCount}</Text>
              </View>
            )}
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.unhideButton, { backgroundColor: accentColor }]} onPress={() => handleUnhidePress(item)}>
        <Ionicons name="eye-outline" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default HiddenChatsListItem;
