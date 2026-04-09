import React from 'react';
import { FlatList, Text, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../screens/HiddenChatsScreen/HiddenChatsScreen.styles';
import HiddenChatsListItem from './HiddenChatsListItem';

const HiddenChatsContent = ({
  colors,
  accentColor,
  searchTerm,
  setSearchTerm,
  filteredChats,
  formatMessageTime,
  handleChatPress,
  handleUnhidePress,
}) => {
  return (
    <View style={styles.content}>
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

      {filteredChats.length === 0 ? (
        <View style={styles.emptyState}>
          <Ionicons name="eye-off-outline" size={64} color={accentColor} />
          <Text style={[styles.emptyTitle, { color: colors.textPrimary }]}>
            {searchTerm ? 'No chats found' : 'No Hidden Chats'}
          </Text>
          <Text style={[styles.emptySubtitle, { color: colors.textSecondary }]}>
            {searchTerm ? 'Try a different search term' : 'Hidden chats will appear here'}
          </Text>
        </View>
      ) : (
        <FlatList
          data={filteredChats}
          renderItem={({ item }) => (
            <HiddenChatsListItem
              item={item}
              colors={colors}
              accentColor={accentColor}
              formatMessageTime={formatMessageTime}
              handleChatPress={handleChatPress}
              handleUnhidePress={handleUnhidePress}
            />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
        />
      )}
    </View>
  );
};

export default HiddenChatsContent;
