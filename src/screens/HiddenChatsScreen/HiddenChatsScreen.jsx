import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  Modal,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from '../../context/ThemeContext';
import { useScreenTitle } from '../../context/ScreenTitleContext';
import { Ionicons } from '@expo/vector-icons';

const PURPLE_COLOR = '#8b5cf6';

const HiddenChatsScreen = ({ navigation }) => {
  useScreenTitle('TranslaTalk | Hidden Chats');
  const { colors } = useTheme();

  const [hiddenChats, setHiddenChats] = useState([
    {
      id: '1',
      name: 'Private Chat',
      avatar: null,
      lastMessage: 'This is a hidden message',
      lastMessageTime: new Date(Date.now() - 3600000),
      isGroup: false,
      isOnline: true,
      isLocked: true,
      unreadCount: 3,
    },
    {
      id: '2',
      name: 'Secret Group',
      avatar: null,
      lastMessage: 'Alice: Confidential information',
      lastMessageTime: new Date(Date.now() - 86400000),
      isGroup: true,
      isOnline: false,
      isLocked: true,
      unreadCount: 0,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [showUnhideModal, setShowUnhideModal] = useState(false);
  const [chatToUnhide, setChatToUnhide] = useState(null);
  const [password, setPassword] = useState('');
  const [isUnhiding, setIsUnhiding] = useState(false);
  const [error, setError] = useState('');

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

  const filteredChats = hiddenChats.filter(chat =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUnhidePress = (chat) => {
    setChatToUnhide(chat);
    setShowUnhideModal(true);
    setPassword('');
    setError('');
  };

  const handleUnhide = async () => {
    if (!password) {
      setError('Please enter your password');
      return;
    }

    setIsUnhiding(true);
    setError('');

    // Simulate password verification
    setTimeout(() => {
      // Mock password check (in real app, verify with backend)
      if (password === 'demo') {
        setHiddenChats(prev => prev.filter(chat => chat.id !== chatToUnhide.id));
        setShowUnhideModal(false);
        setIsUnhiding(false);
        Alert.alert('Success', `${chatToUnhide.name} has been unhidden`);
      } else {
        setError('Incorrect password');
        setIsUnhiding(false);
      }
    }, 1000);
  };

  const handleChatPress = (chat) => {
    navigation.navigate('ChatDetail', { chatId: chat.id });
  };

  const renderChatItem = ({ item }) => (
    <View
      style={[
        styles.chatItem,
        { backgroundColor: colors.bgCard, borderBottomColor: colors.border },
      ]}
    >
      <TouchableOpacity
        style={styles.chatContent}
        onPress={() => handleChatPress(item)}
      >
        <View style={styles.avatarContainer}>
          {item.avatar ? (
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
          ) : (
            <View style={[styles.avatarPlaceholder, { backgroundColor: PURPLE_COLOR }]}>
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
                <Ionicons name="lock-closed" size={14} color={PURPLE_COLOR} style={styles.lockIcon} />
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
              <View style={[styles.unreadBadge, { backgroundColor: PURPLE_COLOR }]}>
                <Text style={styles.unreadText}>{item.unreadCount}</Text>
              </View>
            )}
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.unhideButton, { backgroundColor: PURPLE_COLOR }]}
        onPress={() => handleUnhidePress(item)}
      >
        <Ionicons name="eye-outline" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
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
        <View style={styles.headerTitleContainer}>
          <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>
            Hidden Chats
          </Text>
          <View style={[styles.countBadge, { backgroundColor: PURPLE_COLOR }]}>
            <Text style={styles.countText}>{hiddenChats.length}</Text>
          </View>
        </View>
      </View>

      {/* Search Bar */}
      <View style={[styles.searchContainer, { backgroundColor: colors.bgCard }]}>
        <Ionicons name="search" size={20} color={colors.textSecondary} />
        <TextInput
          style={[styles.searchInput, { color: colors.textPrimary }]}
          placeholder="Search hidden chats..."
          placeholderTextColor={colors.textSecondary}
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      </View>

      {/* Chat List */}
      {filteredChats.length === 0 ? (
        <View style={styles.emptyState}>
          <Ionicons name="eye-off-outline" size={64} color={PURPLE_COLOR} />
          <Text style={[styles.emptyTitle, { color: colors.textPrimary }]}>
            {searchTerm ? 'No chats found' : 'No Hidden Chats'}
          </Text>
          <Text style={[styles.emptySubtitle, { color: colors.textSecondary }]}>
            {searchTerm
              ? 'Try a different search term'
              : 'Hidden chats will appear here'}
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

      {/* Unhide Modal */}
      <Modal
        visible={showUnhideModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowUnhideModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { backgroundColor: colors.bgCard }]}>
            <Ionicons name="eye" size={48} color={PURPLE_COLOR} />
            <Text style={[styles.modalTitle, { color: colors.textPrimary }]}>
              Unhide Chat?
            </Text>
            <Text style={[styles.modalMessage, { color: colors.textSecondary }]}>
              Enter your password to unhide "{chatToUnhide?.name}"
            </Text>

            <TextInput
              style={[
                styles.passwordInput,
                { 
                  backgroundColor: colors.bgSecondary, 
                  color: colors.textPrimary,
                  borderColor: error ? '#ef4444' : colors.border,
                },
              ]}
              placeholder="Enter password"
              placeholderTextColor={colors.textSecondary}
              secureTextEntry
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                setError('');
              }}
              editable={!isUnhiding}
            />

            {error && (
              <Text style={styles.errorText}>{error}</Text>
            )}

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: colors.bgSecondary }]}
                onPress={() => setShowUnhideModal(false)}
                disabled={isUnhiding}
              >
                <Text style={[styles.modalButtonText, { color: colors.textPrimary }]}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: PURPLE_COLOR }]}
                onPress={handleUnhide}
                disabled={isUnhiding}
              >
                {isUnhiding ? (
                  <ActivityIndicator color="#fff" size="small" />
                ) : (
                  <Text style={[styles.modalButtonText, { color: '#fff' }]}>
                    Unhide Chat
                  </Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  countBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  countText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
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
  listContent: {
    paddingBottom: 16,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  chatContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
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
  unhideButton: {
    padding: 12,
    marginRight: 8,
    borderRadius: 8,
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '85%',
    maxWidth: 400,
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  modalMessage: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  passwordInput: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    fontSize: 14,
    borderWidth: 1,
    marginBottom: 8,
  },
  errorText: {
    color: '#ef4444',
    fontSize: 12,
    marginBottom: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    gap: 12,
    width: '100%',
  },
  modalButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
});

export default HiddenChatsScreen;
