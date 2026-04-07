import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';

// Mock chat data for MVP
const MOCK_CHATS = [
  {
    id: '1',
    name: 'John Doe',
    lastMessage: 'Hey, how are you?',
    timestamp: '2m ago',
    unread: 2,
    avatar: null,
    isOnline: true,
  },
  {
    id: '2',
    name: 'Team Project',
    lastMessage: 'Meeting at 3 PM',
    timestamp: '1h ago',
    unread: 0,
    avatar: null,
    isGroup: true,
  },
  {
    id: '3',
    name: 'Sarah Wilson',
    lastMessage: 'Thanks for your help!',
    timestamp: 'Yesterday',
    unread: 0,
    avatar: null,
    isOnline: false,
  },
];

const ChatSidebar = ({ onSelectChat, selectedChatId, navigation }) => {
  const { colors } = useTheme();
  const { currentUser, logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const filteredChats = MOCK_CHATS.filter((chat) =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderChatItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.chatItem,
        {
          backgroundColor:
            selectedChatId === item.id ? colors.bgTertiary : 'transparent',
        },
      ]}
      onPress={() => onSelectChat(item)}
    >
      <View
        style={[
          styles.avatar,
          { backgroundColor: colors.primary.gradient?.[0] || '#667eea' },
        ]}
      >
        <Text style={styles.avatarText}>
          {item.name.charAt(0).toUpperCase()}
        </Text>
        {item.isOnline && <View style={styles.onlineIndicator} />}
      </View>

      <View style={styles.chatInfo}>
        <View style={styles.chatHeader}>
          <Text
            style={[styles.chatName, { color: colors.textPrimary }]}
            numberOfLines={1}
          >
            {item.name}
          </Text>
          <Text style={[styles.timestamp, { color: colors.textSecondary }]}>
            {item.timestamp}
          </Text>
        </View>
        <View style={styles.messageRow}>
          <Text
            style={[styles.lastMessage, { color: colors.textSecondary }]}
            numberOfLines={1}
          >
            {item.lastMessage}
          </Text>
          {item.unread > 0 && (
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadText}>{item.unread}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.sidebar, { backgroundColor: colors.bgPrimary }]}>
      {/* Header */}
      <View style={[styles.sidebarHeader, { backgroundColor: colors.bgCard }]}>
        <TouchableOpacity
          onPress={() => setShowProfileMenu(!showProfileMenu)}
          style={styles.profileButton}
        >
          <View
            style={[styles.profileAvatar, { backgroundColor: '#667eea' }]}
          >
            <Text style={styles.profileAvatarText}>
              {currentUser?.email?.charAt(0).toUpperCase() || 'U'}
            </Text>
          </View>
        </TouchableOpacity>

        <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>
          Messages
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('NewChat')}
          style={styles.newChatButton}
        >
          <Ionicons name="create-outline" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
      </View>

      {/* Profile Dropdown */}
      {showProfileMenu && (
        <View style={[styles.profileMenu, { backgroundColor: colors.bgCard }]}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              setShowProfileMenu(false);
              navigation.navigate('Profile');
            }}
          >
            <Ionicons name="person-outline" size={20} color={colors.textPrimary} />
            <Text style={[styles.menuText, { color: colors.textPrimary }]}>
              Profile
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              setShowProfileMenu(false);
              navigation.navigate('Settings');
            }}
          >
            <Ionicons name="settings-outline" size={20} color={colors.textPrimary} />
            <Text style={[styles.menuText, { color: colors.textPrimary }]}>
              Settings
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={logout}>
            <Ionicons name="log-out-outline" size={20} color={colors.error} />
            <Text style={[styles.menuText, { color: colors.error }]}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Search */}
      <View style={styles.searchContainer}>
        <View
          style={[
            styles.searchInput,
            {
              backgroundColor: colors.bgSecondary,
              borderColor: colors.border,
            },
          ]}
        >
          <Ionicons name="search" size={20} color={colors.textSecondary} />
          <TextInput
            style={[styles.searchText, { color: colors.textPrimary }]}
            placeholder="Search chats..."
            placeholderTextColor={colors.textSecondary}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      {/* Chat List */}
      <FlatList
        data={filteredChats}
        renderItem={renderChatItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.chatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    width: '100%',
    maxWidth: 350,
  },
  sidebarHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingTop: 48,
  },
  profileButton: {
    marginRight: 12,
  },
  profileAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileAvatarText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
  },
  newChatButton: {
    padding: 8,
  },
  profileMenu: {
    position: 'absolute',
    top: 100,
    left: 16,
    right: 16,
    zIndex: 1000,
    borderRadius: 10,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    gap: 12,
  },
  menuText: {
    fontSize: 15,
    fontWeight: '500',
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchInput: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    gap: 8,
  },
  searchText: {
    flex: 1,
    fontSize: 15,
  },
  chatList: {
    paddingBottom: 16,
  },
  chatItem: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  avatarText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#48bb78',
    borderWidth: 2,
    borderColor: '#fff',
  },
  chatInfo: {
    flex: 1,
    marginLeft: 12,
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  chatName: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
  },
  timestamp: {
    fontSize: 12,
    marginLeft: 8,
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lastMessage: {
    fontSize: 14,
    flex: 1,
  },
  unreadBadge: {
    backgroundColor: '#ef4444',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginLeft: 8,
    minWidth: 20,
    alignItems: 'center',
  },
  unreadText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold',
  },
});

export default ChatSidebar;
