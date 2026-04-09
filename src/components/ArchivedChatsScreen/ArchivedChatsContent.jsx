import React from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../screens/ArchivedChatsScreen/ArchivedChatsScreen.styles';
import ArchivedChatsListItem from './ArchivedChatsListItem';

const ArchivedChatsContent = ({
  colors,
  searchTerm,
  setSearchTerm,
  selectionMode,
  selectedChats,
  filteredChats,
  formatMessageTime,
  toggleSelectAll,
  handleUnarchiveSelected,
  handleChatPress,
  handleChatLongPress,
}) => {
  return (
    <View style={styles.content}>
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

      {selectionMode && selectedChats.size > 0 && (
        <View style={[styles.selectionToolbar, { backgroundColor: colors.primary }]}>
          <Text style={styles.selectionText}>{selectedChats.size} selected</Text>
          <View style={styles.toolbarButtons}>
            <TouchableOpacity style={styles.toolbarButton} onPress={toggleSelectAll}>
              <Text style={styles.toolbarButtonText}>
                {selectedChats.size === filteredChats.length ? 'Deselect All' : 'Select All'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.toolbarButton, styles.unarchiveButton]}
              onPress={handleUnarchiveSelected}
            >
              <Ionicons name="archive-outline" size={18} color={colors.primary} />
              <Text style={[styles.toolbarButtonText, { color: colors.primary }]}>Unarchive</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {filteredChats.length === 0 ? (
        <View style={styles.emptyState}>
          <Ionicons name="archive-outline" size={64} color={colors.textSecondary} />
          <Text style={[styles.emptyTitle, { color: colors.textPrimary }]}>
            {searchTerm ? 'No chats found' : 'No Archived Chats'}
          </Text>
          <Text style={[styles.emptySubtitle, { color: colors.textSecondary }]}>
            {searchTerm ? 'Try a different search term' : 'Archived chats will appear here'}
          </Text>
        </View>
      ) : (
        <FlatList
          data={filteredChats}
          renderItem={({ item }) => (
            <ArchivedChatsListItem
              item={item}
              colors={colors}
              selected={selectedChats.has(item.id)}
              selectionMode={selectionMode}
              formatMessageTime={formatMessageTime}
              handleChatPress={handleChatPress}
              handleChatLongPress={handleChatLongPress}
            />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
        />
      )}
    </View>
  );
};

export default ArchivedChatsContent;
