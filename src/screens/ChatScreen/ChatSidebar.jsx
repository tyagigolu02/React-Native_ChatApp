import React from 'react';
import { View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import useChatSidebar from '../../hooks/useChatSidebar';
import styles from './ChatSidebar.styles';
import ChatSidebarContent from './ChatSidebarContent';

const ChatSidebar = ({ onSelectChat, selectedChatId, navigation }) => {
  const { colors } = useTheme();
  const {
    currentUser,
    searchQuery,
    setSearchQuery,
    showProfileMenu,
    toggleProfileMenu,
    filteredChats,
    handleNewChat,
    handleOpenProfile,
    handleOpenSettings,
    handleLogout,
  } = useChatSidebar({ navigation });

  return (
    <View style={[styles.sidebar, { backgroundColor: colors.bgPrimary }]}>
      <ChatSidebarContent
        colors={colors}
        currentUser={currentUser}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        showProfileMenu={showProfileMenu}
        onToggleProfileMenu={toggleProfileMenu}
        filteredChats={filteredChats}
        selectedChatId={selectedChatId}
        onSelectChat={onSelectChat}
        onNewChat={handleNewChat}
        onOpenProfile={handleOpenProfile}
        onOpenSettings={handleOpenSettings}
        onLogout={handleLogout}
      />
    </View>
  );
};

export default ChatSidebar;