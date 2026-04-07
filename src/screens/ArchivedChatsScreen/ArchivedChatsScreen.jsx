import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  Alert,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from '../../context/ThemeContext';
import { useScreenTitle } from '../../context/ScreenTitleContext';
import { Ionicons } from '@expo/vector-icons';

const ArchivedChatsScreen = ({ navigation }) => {
  useScreenTitle('TranslaTalk | Archived Chats');
  const { colors } = useTheme();

  // Mock archived chats data
  const [archivedChats, setArchivedChats] = useState([
    {
      id: '1',
      name: 'John Doe',
      avatar: null,
      lastMessage: 'Hey! How are you doing?',
      lastMessageTime: new Date(Date.now() - 3600000),
      lastMessageSender: null,
      isGroup: false,
      isOnline: false,
      isLocked: false,
      unreadCount: 2,
    },
    {
      id: '2',
      name: 'React Native Team',
      avatar: null,
      lastMessage: 'Alice: Check out the new features!',
      lastMessageTime: new Date(Date.now() - 86400000),
      lastMessageSender: 'Alice',
      isGroup: true,
      isOnline: false,
      isLocked: true,
      unreadCount: 15,
    },
    {
      id: '3',
      name: 'Sarah Wilson',
      avatar: null,
      lastMessage: 'Thanks for your help!',
      lastMessageTime: new Date(Date.now() - 172800000),
      lastMessageSender: null,
      isGroup: false,
      isOnline: true,
      isLocked: false,
      unreadCount: 0,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectionMode, setSelectionMode] = useState(false);
  const [selectedChats, setSelectedChats] = useState(new Set());

  const formatMessageTime = (date) => {
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days === 1) return 'Yesterday';
    if (days < 7) return `${days}d ago`;
    return date.toLocaleDateString();
  };

  const filteredChats = archivedChats.filter(chat =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleChatSelection = (chatId) => {
    const newSelected = new Set(selectedChats);
    if (newSelected.has(chatId)) {
      newSelected.delete(chatId);
    } else {
      newSelected.add(chatId);
    }
    setSelectedChats(newSelected);
  };

  const toggleSelectAll = () => {
    if (selectedChats.size === filteredChats.length) {
      setSelectedChats(new Set());
    } else {
      setSelectedChats(new Set(filteredChats.map(chat => chat.id)));
    }
  };

  const handleUnarchiveSelected = () => {
    Alert.alert(
      'Unarchive Chats',
      `Unarchive ${selectedChats.size} chat(s)?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Unarchive',
          onPress: () => {
            setArchivedChats(prev =>
              prev.filter(chat => !selectedChats.has(chat.id))
            );
            setSelectedChats(new Set());
            setSelectionMode(false);
            Alert.alert('Success', 'Chats unarchived successfully');
          },
        },
      ]
    );
  };

  const handleChatPress = (chat) => {
    if (selectionMode) {
      toggleChatSelection(chat.id);
    } else {
      navigation.navigate('ChatDetail', { chatId: chat.id });
    }
  };

  const renderChatItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.chatItem,
        { backgroundColor: colors.bgCard, borderBottomColor: colors.border },
        selectedChats.has(item.id) && { backgroundColor: colors.primary + '20' },
      ]}
      onPress={() => handleChatPress(item)}
      onLongPress={() => {
        setSelectionMode(true);
        toggleChatSelection(item.id);
      }}
    >
      {selectionMode && (
        <View style={styles.checkbox}>
          <Ionicons
            name={selectedChats.has(item.id) ? 'checkbox' : 'square-outline'}
            size={24}
            color={selectedChats.has(item.id) ? colors.primary : colors.textSecondary}
          />
        </View>
      )}

      <View style={styles.avatarContainer}>
        {item.avatar ? (
          <Image source={{ uri: item.avatar }} style={styles.avatar} />
        ) : (
          <View style={[styles.avatarPlaceholder, { backgroundColor: colors.primary }]}>
            <Text style={styles.avatarText}>
              {item.name.substring(0, 2).toUpperCase()}
            </Text>
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
              <Ionicons name="lock-closed" size={14} color={colors.textSecondary} style={styles.lockIcon} />
            )}
          </View>
          <Text style={[styles.messageTime, { color: colors.textSecondary }]}>
            {formatMessageTime(item.lastMessageTime)}
          </Text>
        </View>

        <View style={styles.messageRow}>
          <Text
            style={[styles.lastMessage, { color: colors.textSecondary }]}
            numberOfLines={1}
          >
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

  return (
    <View style={[styles.container, { backgroundColor: colors.bgPrimary }]}>
      <StatusBar style={colors.isDark ? 'light' : 'dark'} />

      {/* Header */}
      <View style={[styles.header, { backgroundColor: colors.bgCard, borderBottomColor: colors.border }]}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>
          Archived Chats
        </Text>
        {!selectionMode && (
          <TouchableOpacity
            style={styles.selectButton}
            onPress={() => setSelectionMode(true)}
          >
            <Ionicons name="checkmark-circle-outline" size={24} color={colors.textPrimary} />
          </TouchableOpacity>
        )}
        {selectionMode && (
          <TouchableOpacity
            style={styles.selectButton}
            onPress={() => {
              setSelectionMode(false);
              setSelectedChats(new Set());
            }}
          >
            <Text style={[styles.cancelText, { color: colors.textPrimary }]}>Cancel</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Search Bar */}
      <View style={[styles.searchContainer, { backgroundColor: colors.bgCard }]}>
        <Ionicons name="search" size={20} color={colors.textSecondary} />
        <TextInput
          style={[styles.searchInput, { color: colors.textPrimary }]}
          placeholder="Search archived chats..."
          placeholderTextColor={colors.textSecondary}
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      </View>

      {/* Selection Toolbar */}
      {selectionMode && selectedChats.size > 0 && (
        <View style={[styles.selectionToolbar, { backgroundColor: colors.primary }]}>
          <Text style={styles.selectionText}>
            {selectedChats.size} selected
          </Text>
          <View style={styles.toolbarButtons}>
            <TouchableOpacity
              style={styles.toolbarButton}
              onPress={toggleSelectAll}
            >
              <Text style={styles.toolbarButtonText}>
                {selectedChats.size === filteredChats.length ? 'Deselect All' : 'Select All'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.toolbarButton, styles.unarchiveButton]}
              onPress={handleUnarchiveSelected}
            >
              <Ionicons name="archive-outline" size={18} color={colors.primary} />
              <Text style={[styles.toolbarButtonText, { color: colors.primary }]}>
                Unarchive
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Chat List */}
      {filteredChats.length === 0 ? (
        <View style={styles.emptyState}>
          <Ionicons name="archive-outline" size={64} color={colors.textSecondary} />
          <Text style={[styles.emptyTitle, { color: colors.textPrimary }]}>
            {searchTerm ? 'No chats found' : 'No Archived Chats'}
          </Text>
          <Text style={[styles.emptySubtitle, { color: colors.textSecondary }]}>
            {searchTerm
              ? 'Try a different search term'
              : 'Archived chats will appear here'}
          </Text>
        </View>
      ) : (
        <FlatList
          data={filteredChats}
          renderItem={renderChatItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContent}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingTop: 48,
    borderBottomWidth: 1,
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    flex: 1,
  },
  selectButton: {
    padding: 4,
  },
  cancelText: {
    fontSize: 14,
    fontWeight: '500',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
  },
  selectionToolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  selectionText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  toolbarButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  toolbarButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  toolbarButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  unarchiveButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  listContent: {
    paddingBottom: 16,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
  },
  checkbox: {
    marginRight: 12,
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  avatarPlaceholder: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#10b981',
    borderWidth: 2,
  },
  chatInfo: {
    flex: 1,
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  chatNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  chatName: {
    fontSize: 16,
    fontWeight: '600',
  },
  lockIcon: {
    marginLeft: 6,
  },
  messageTime: {
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
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
    marginLeft: 8,
  },
  unreadText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '600',
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
  },
  emptySubtitle: {
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
  },
});

export default ArchivedChatsScreen;
