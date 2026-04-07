import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';
import { useScreenTitle } from '../../context/ScreenTitleContext';

// Mock contacts
const MOCK_CONTACTS = [
  { id: '1', name: 'Alice Johnson', username: '@alice' },
  { id: '2', name: 'Bob Smith', username: '@bob' },
  { id: '3', name: 'Carol Williams', username: '@carol' },
  { id: '4', name: 'David Brown', username: '@david' },
  { id: '5', name: 'Eve Davis', username: '@eve' },
];

const NewChatScreen = ({ navigation }) => {
  useScreenTitle('TranslaTalk | New Chat');
  const { colors } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredContacts = MOCK_CONTACTS.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const startChat = (contact) => {
    // Navigate to chat with this contact
    navigation.navigate('Chat');
  };

  const renderContact = ({ item }) => (
    <TouchableOpacity
      style={[styles.contactItem, { borderBottomColor: colors.border }]}
      onPress={() => startChat(item)}
    >
      <View style={[styles.contactAvatar, { backgroundColor: '#667eea' }]}>
        <Text style={styles.contactAvatarText}>
          {item.name.charAt(0).toUpperCase()}
        </Text>
      </View>
      <View style={styles.contactInfo}>
        <Text style={[styles.contactName, { color: colors.textPrimary }]}>
          {item.name}
        </Text>
        <Text style={[styles.contactUsername, { color: colors.textSecondary }]}>
          {item.username}
        </Text>
      </View>
      <Ionicons name="chatbubble-outline" size={20} color={colors.textSecondary} />
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.bgPrimary }]}>
      <StatusBar style={colors.isDark ? 'light' : 'dark'} />
      
      {/* Header */}
      <View style={[styles.header, { backgroundColor: colors.bgCard }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>
          New Chat
        </Text>
        <View style={{ width: 40 }} />
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <TouchableOpacity
          style={[styles.actionCard, { backgroundColor: colors.bgCard }]}
          onPress={() => {/* Create group */}}
        >
          <View style={[styles.actionIcon, { backgroundColor: '#667eea' }]}>
            <Ionicons name="people" size={24} color="#fff" />
          </View>
          <Text style={[styles.actionText, { color: colors.textPrimary }]}>
            New Group
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionCard, { backgroundColor: colors.bgCard }]}
          onPress={() => navigation.navigate('AddContact')}
        >
          <View style={[styles.actionIcon, { backgroundColor: '#48bb78' }]}>
            <Ionicons name="person-add" size={24} color="#fff" />
          </View>
          <Text style={[styles.actionText, { color: colors.textPrimary }]}>
            Add Contact
          </Text>
        </TouchableOpacity>
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <View
          style={[
            styles.searchInput,
            { backgroundColor: colors.bgCard, borderColor: colors.border },
          ]}
        >
          <Ionicons name="search" size={20} color={colors.textSecondary} />
          <TextInput
            style={[styles.searchText, { color: colors.textPrimary }]}
            placeholder="Search contacts..."
            placeholderTextColor={colors.textSecondary}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      {/* Contacts List */}
      <View style={styles.listContainer}>
        <Text style={[styles.listTitle, { color: colors.textPrimary }]}>
          Contacts
        </Text>
        <FlatList
          data={filteredContacts}
          renderItem={renderContact}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.contactsList}
        />
      </View>
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
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingTop: 48,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quickActions: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingTop: 16,
    gap: 12,
  },
  actionCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    gap: 12,
  },
  actionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText: {
    fontSize: 15,
    fontWeight: '600',
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
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
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  listTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  contactsList: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  contactAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  contactAvatarText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  contactUsername: {
    fontSize: 13,
  },
});

export default NewChatScreen;
