import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';
import { useScreenTitle } from '../../context/ScreenTitleContext';
import styles from './NewChatScreen.styles';

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

  const startChat = () => {
    navigation.navigate('Chat');
  };

  const renderContact = ({ item }) => (
    <TouchableOpacity
      style={[styles.contactItem, { borderBottomColor: colors.border }]}
      onPress={startChat}
    >
      <View style={[styles.contactAvatar, { backgroundColor: '#667eea' }]}>
        <Text style={styles.contactAvatarText}>{item.name.charAt(0).toUpperCase()}</Text>
      </View>
      <View style={styles.contactInfo}>
        <Text style={[styles.contactName, { color: colors.textPrimary }]}>{item.name}</Text>
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

      <View style={[styles.header, { backgroundColor: colors.bgCard }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>New Chat</Text>
        <View style={{ width: 40 }} />
      </View>

      <View style={styles.quickActions}>
        <TouchableOpacity
          style={[styles.actionCard, { backgroundColor: colors.bgCard }]}
          onPress={() => {}}
        >
          <View style={[styles.actionIcon, { backgroundColor: '#667eea' }]}>
            <Ionicons name="people" size={24} color="#fff" />
          </View>
          <Text style={[styles.actionText, { color: colors.textPrimary }]}>New Group</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionCard, { backgroundColor: colors.bgCard }]}
          onPress={() => navigation.navigate('AddContact')}
        >
          <View style={[styles.actionIcon, { backgroundColor: '#48bb78' }]}>
            <Ionicons name="person-add" size={24} color="#fff" />
          </View>
          <Text style={[styles.actionText, { color: colors.textPrimary }]}>Add Contact</Text>
        </TouchableOpacity>
      </View>

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

      <View style={styles.listContainer}>
        <Text style={[styles.listTitle, { color: colors.textPrimary }]}>Contacts</Text>
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

export default NewChatScreen;
