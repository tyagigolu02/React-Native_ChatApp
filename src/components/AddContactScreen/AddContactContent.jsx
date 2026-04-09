import React from 'react';
import { ActivityIndicator, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../screens/AddContactScreen/AddContactScreen.styles';

const AddContactContent = ({
  colors,
  searchQuery,
  setSearchQuery,
  isSearching,
  searchResults,
  handleSearch,
  sendFriendRequest,
}) => {
  const renderResult = ({ item }) => (
    <View style={[styles.resultItem, { borderBottomColor: colors.border }]}>
      <View style={[styles.resultAvatar, { backgroundColor: '#667eea' }]}>
        <Text style={styles.resultAvatarText}>{item.name.charAt(0).toUpperCase()}</Text>
      </View>
      <View style={styles.resultInfo}>
        <Text style={[styles.resultName, { color: colors.textPrimary }]}>{item.name}</Text>
        <Text style={[styles.resultUsername, { color: colors.textSecondary }]}>{item.username}</Text>
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
    <View style={styles.content}>
      <View style={styles.searchContainer}>
        <View style={[styles.searchInput, { backgroundColor: colors.bgCard, borderColor: colors.border }]}>
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
          {isSearching ? <ActivityIndicator color="#fff" size="small" /> : <Ionicons name="search" size={20} color="#fff" />}
        </TouchableOpacity>
      </View>

      {searchResults.length > 0 ? (
        <View style={styles.resultsContainer}>
          <Text style={[styles.resultsTitle, { color: colors.textPrimary }]}>Search Results</Text>
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
          <Text style={[styles.emptyText, { color: colors.textSecondary }]}>No users found</Text>
        </View>
      ) : (
        <View style={styles.emptyState}>
          <Ionicons name="person-add-outline" size={64} color={colors.textSecondary} />
          <Text style={[styles.emptyText, { color: colors.textSecondary }]}>Search for users to add as friends</Text>
        </View>
      )}
    </View>
  );
};

export default AddContactContent;
