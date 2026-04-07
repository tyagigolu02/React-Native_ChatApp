import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';
import { useScreenTitle } from '../../context/ScreenTitleContext';

const AddContactScreen = ({ navigation }) => {
  useScreenTitle('TranslaTalk | Add Contact');
  const { colors } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      const mockResults = [
        { id: '1', name: 'John Doe', username: '@johndoe', isFriend: false },
        { id: '2', name: 'Jane Smith', username: '@janesmith', isFriend: true },
      ];
      setSearchResults(mockResults);
      setIsSearching(false);
    }, 1000);
  };

  const sendFriendRequest = (user) => {
    // Simulate sending friend request
    alert(`Friend request sent to ${user.name}`);
  };

  const renderResult = ({ item }) => (
    <View style={[styles.resultItem, { borderBottomColor: colors.border }]}>
      <View style={[styles.resultAvatar, { backgroundColor: '#667eea' }]}>
        <Text style={styles.resultAvatarText}>
          {item.name.charAt(0).toUpperCase()}
        </Text>
      </View>
      <View style={styles.resultInfo}>
        <Text style={[styles.resultName, { color: colors.textPrimary }]}>
          {item.name}
        </Text>
        <Text style={[styles.resultUsername, { color: colors.textSecondary }]}>
          {item.username}
        </Text>
      </View>
      {item.isFriend ? (
        <View style={[styles.friendBadge, { backgroundColor: colors.success }]}>
          <Text style={styles.friendBadgeText}>Friend</Text>
        </View>
      ) : (
        <TouchableOpacity
          style={[styles.addButton, { backgroundColor: '#667eea' }]}
          onPress={() => sendFriendRequest(item)}
        >
          <Ionicons name="person-add" size={18} color="#fff" />
        </TouchableOpacity>
      )}
    </View>
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
          Add Contact
        </Text>
        <View style={{ width: 40 }} />
      </View>

      <View style={styles.content}>
        {/* Search Input */}
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
              placeholder="Search by username or email..."
              placeholderTextColor={colors.textSecondary}
              value={searchQuery}
              onChangeText={setSearchQuery}
              onSubmitEditing={handleSearch}
            />
          </View>
          <TouchableOpacity
            style={[styles.searchButton, { backgroundColor: '#667eea' }]}
            onPress={handleSearch}
            disabled={isSearching}
          >
            {isSearching ? (
              <ActivityIndicator color="#fff" size="small" />
            ) : (
              <Ionicons name="search" size={20} color="#fff" />
            )}
          </TouchableOpacity>
        </View>

        {/* Search Results */}
        {searchResults.length > 0 ? (
          <View style={styles.resultsContainer}>
            <Text style={[styles.resultsTitle, { color: colors.textPrimary }]}>
              Search Results
            </Text>
            <FlatList
              data={searchResults}
              renderItem={renderResult}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.resultsList}
            />
          </View>
        ) : !isSearching && searchQuery ? (
          <View style={styles.emptyState}>
            <Ionicons name="search-outline" size={64} color={colors.textSecondary} />
            <Text style={[styles.emptyText, { color: colors.textSecondary }]}>
              No users found
            </Text>
          </View>
        ) : (
          <View style={styles.emptyState}>
            <Ionicons name="person-add-outline" size={64} color={colors.textSecondary} />
            <Text style={[styles.emptyText, { color: colors.textSecondary }]}>
              Search for users to add as friends
            </Text>
          </View>
        )}
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
  content: {
    flex: 1,
    padding: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
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
  searchButton: {
    width: 48,
    height: 48,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultsContainer: {
    flex: 1,
  },
  resultsTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  resultsList: {
    borderRadius: 12,
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  resultAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  resultAvatarText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  resultInfo: {
    flex: 1,
  },
  resultName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  resultUsername: {
    fontSize: 13,
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  friendBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  friendBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 16,
  },
});

export default AddContactScreen;
