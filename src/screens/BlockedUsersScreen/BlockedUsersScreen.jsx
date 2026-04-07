import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from '../../context/ThemeContext';
import { useScreenTitle } from '../../context/ScreenTitleContext';
import { Ionicons } from '@expo/vector-icons';

const BlockedUsersScreen = ({ navigation }) => {
  useScreenTitle('TranslaTalk | Blocked Users');
  const { colors } = useTheme();

  const [blockedUsers, setBlockedUsers] = useState([
    {
      id: '1',
      name: 'John Spam',
      email: 'john.spam@example.com',
      avatar: null,
      blockedAt: new Date(Date.now() - 86400000),
    },
    {
      id: '2',
      name: 'Jane Harasser',
      email: 'jane.h@example.com',
      avatar: null,
      blockedAt: new Date(Date.now() - 172800000),
    },
    {
      id: '3',
      name: 'Spammy McSpamface',
      email: 'spammy@example.com',
      avatar: null,
      blockedAt: new Date(Date.now() - 604800000),
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const formatBlockedDate = (date) => {
    const now = new Date();
    const diff = now - date;
    const days = Math.floor(diff / 86400000);

    if (days === 0) return 'Today';
    if (days === 1) return 'Yesterday';
    if (days < 7) return `${days} days ago`;
    if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
    return date.toLocaleDateString();
  };

  const handleUnblock = (user) => {
    Alert.alert(
      'Unblock User',
      `Are you sure you want to unblock ${user.name}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Unblock',
          onPress: () => {
            setBlockedUsers(prev => prev.filter(u => u.id !== user.id));
            Alert.alert('Success', `${user.name} has been unblocked`);
          },
        },
      ]
    );
  };

  const filteredUsers = blockedUsers.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderUserItem = ({ item }) => (
    <View
      style={[
        styles.userItem,
        { backgroundColor: colors.bgCard, borderBottomColor: colors.border },
      ]}
    >
      <View style={styles.userInfo}>
        <View style={styles.avatarContainer}>
          {item.avatar ? (
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
          ) : (
            <View style={[styles.avatarPlaceholder, { backgroundColor: '#ef4444' }]}>
              <Text style={styles.avatarText}>
                {item.name.substring(0, 2).toUpperCase()}
              </Text>
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
          <Text style={[styles.blockedDate, { color: colors.textSecondary }]}>
            Blocked {formatBlockedDate(item.blockedAt)}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.unblockButton, { backgroundColor: colors.primary }]}
        onPress={() => handleUnblock(item)}
      >
        <Text style={styles.unblockButtonText}>Unblock</Text>
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
        <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>
          Blocked Users
        </Text>
      </View>

      {/* Search Bar */}
      <View style={[styles.searchContainer, { backgroundColor: colors.bgCard }]}>
        <Ionicons name="search" size={20} color={colors.textSecondary} />
        <TextInput
          style={[styles.searchInput, { color: colors.textPrimary }]}
          placeholder="Search blocked users..."
          placeholderTextColor={colors.textSecondary}
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      </View>

      {/* Info Banner */}
      <View style={[styles.infoBanner, { backgroundColor: '#ef4444' + '20', borderColor: '#ef4444' }]}>
        <Ionicons name="information-circle" size={20} color="#ef4444" />
        <Text style={[styles.infoBannerText, { color: '#ef4444' }]}>
          Blocked users cannot send you messages or see when you're online
        </Text>
      </View>

      {/* User List */}
      {filteredUsers.length === 0 ? (
        <View style={styles.emptyState}>
          <Ionicons name="ban-outline" size={64} color={colors.textSecondary} />
          <Text style={[styles.emptyTitle, { color: colors.textPrimary }]}>
            {searchTerm ? 'No users found' : 'No Blocked Users'}
          </Text>
          <Text style={[styles.emptySubtitle, { color: colors.textSecondary }]}>
            {searchTerm
              ? 'Try a different search term'
              : 'Blocked users will appear here'}
          </Text>
        </View>
      ) : (
        <FlatList
          data={filteredUsers}
          renderItem={renderUserItem}
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
  infoBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 12,
    marginHorizontal: 16,
    marginVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
  },
  infoBannerText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 18,
  },
  listContent: {
    paddingBottom: 16,
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderBottomWidth: 1,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatarContainer: {
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
  userDetails: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  userEmail: {
    fontSize: 13,
    marginBottom: 2,
  },
  blockedDate: {
    fontSize: 11,
  },
  unblockButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  unblockButtonText: {
    color: '#fff',
    fontSize: 13,
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

export default BlockedUsersScreen;
