import { useMemo, useState } from 'react';
import { useAuth } from '../context/AuthContext';

const MOCK_CHATS = [
  { id: '1', name: 'John Doe', lastMessage: 'Hey, how are you?', timestamp: '2m ago', unread: 2, avatar: null, isOnline: true },
  { id: '2', name: 'Team Project', lastMessage: 'Meeting at 3 PM', timestamp: '1h ago', unread: 0, avatar: null, isGroup: true },
  { id: '3', name: 'Sarah Wilson', lastMessage: 'Thanks for your help!', timestamp: 'Yesterday', unread: 0, avatar: null, isOnline: false },
];

const useChatSidebar = ({ navigation }) => {
  const { currentUser, logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const filteredChats = useMemo(
    () => MOCK_CHATS.filter((chat) => chat.name.toLowerCase().includes(searchQuery.toLowerCase())),
    [searchQuery]
  );

  const toggleProfileMenu = () => {
    setShowProfileMenu((previous) => !previous);
  };

  const handleOpenProfile = () => {
    setShowProfileMenu(false);
    navigation.navigate('Profile');
  };

  const handleOpenSettings = () => {
    setShowProfileMenu(false);
    navigation.navigate('Settings');
  };

  const handleNewChat = () => {
    navigation.navigate('NewChat');
  };

  const handleLogout = () => {
    setShowProfileMenu(false);
    logout();
  };

  return {
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
  };
};

export default useChatSidebar;