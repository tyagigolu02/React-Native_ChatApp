import React from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './ChatSidebar.styles';
import ChatSidebarListItem from './ChatSidebarListItem';

const ChatSidebarContent = ({
  colors,
  currentUser,
  searchQuery,
  setSearchQuery,
  showProfileMenu,
  onToggleProfileMenu,
  filteredChats,
  selectedChatId,
  onSelectChat,
  onNewChat,
  onOpenProfile,
  onOpenSettings,
  onLogout,
}) => {
  return (
    <>
      <View style={[styles.sidebarHeader, { backgroundColor: colors.bgCard }]}>
        <TouchableOpacity onPress={onToggleProfileMenu} style={styles.profileButton}>
          <View style={[styles.profileAvatar, { backgroundColor: '#667eea' }]}>
            <Text style={styles.profileAvatarText}>{currentUser?.email?.charAt(0).toUpperCase() || 'U'}</Text>
          </View>
        </TouchableOpacity>

        <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>Messages</Text>

        <TouchableOpacity onPress={onNewChat} style={styles.newChatButton}>
          <Ionicons name="create-outline" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
      </View>

      {showProfileMenu ? (
        <View style={[styles.profileMenu, { backgroundColor: colors.bgCard }]}>
          <TouchableOpacity style={styles.menuItem} onPress={onOpenProfile}>
            <Ionicons name="person-outline" size={20} color={colors.textPrimary} />
            <Text style={[styles.menuText, { color: colors.textPrimary }]}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={onOpenSettings}>
            <Ionicons name="settings-outline" size={20} color={colors.textPrimary} />
            <Text style={[styles.menuText, { color: colors.textPrimary }]}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={onLogout}>
            <Ionicons name="log-out-outline" size={20} color={colors.error} />
            <Text style={[styles.menuText, { color: colors.error }]}>Logout</Text>
          </TouchableOpacity>
        </View>
      ) : null}

      <View style={styles.searchContainer}>
        <View style={[styles.searchInput, { backgroundColor: colors.bgSecondary, borderColor: colors.border }]}>
          <Ionicons name="search" size={20} color={colors.textSecondary} />
          <TextInput
            style={[styles.searchText, { color: colors.textPrimary }]}
            placeholder="Search chats..."
            placeholderTextColor={colors.textSecondary}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <FlatList
        data={filteredChats}
        renderItem={({ item }) => (
          <ChatSidebarListItem
            item={item}
            selected={selectedChatId === item.id}
            colors={colors}
            onPress={onSelectChat}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.chatList}
      />
    </>
  );
};

export default ChatSidebarContent;