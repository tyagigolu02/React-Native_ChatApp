import React from 'react';
import { FlatList, Text, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../screens/BlockedUsersScreen/BlockedUsersScreen.styles';
import BlockedUsersListItem from './BlockedUsersListItem';

const BlockedUsersContent = ({
  colors,
  searchTerm,
  setSearchTerm,
  filteredUsers,
  formatBlockedDate,
  handleUnblock,
}) => {
  return (
    <View style={styles.content}>
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

      <View style={[styles.infoBanner, { backgroundColor: '#ef4444' + '20', borderColor: '#ef4444' }]}>
        <Ionicons name="information-circle" size={20} color="#ef4444" />
        <Text style={[styles.infoBannerText, { color: '#ef4444' }]}>Blocked users cannot send you messages or see when you&apos;re online</Text>
      </View>

      {filteredUsers.length === 0 ? (
        <View style={styles.emptyState}>
          <Ionicons name="ban-outline" size={64} color={colors.textSecondary} />
          <Text style={[styles.emptyTitle, { color: colors.textPrimary }]}>
            {searchTerm ? 'No users found' : 'No Blocked Users'}
          </Text>
          <Text style={[styles.emptySubtitle, { color: colors.textSecondary }]}>
            {searchTerm ? 'Try a different search term' : 'Blocked users will appear here'}
          </Text>
        </View>
      ) : (
        <FlatList
          data={filteredUsers}
          renderItem={({ item }) => (
            <BlockedUsersListItem
              item={item}
              colors={colors}
              formatBlockedDate={formatBlockedDate}
              handleUnblock={handleUnblock}
            />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
        />
      )}
    </View>
  );
};

export default BlockedUsersContent;