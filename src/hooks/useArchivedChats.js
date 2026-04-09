import { useState } from 'react';
import { Alert } from 'react-native';

const getInitialArchivedChats = () => [
  {
    id: '1',
    name: 'John Doe',
    avatar: null,
    lastMessage: 'Hey! How are you doing?',
    lastMessageTime: new Date(Date.now() - 3600000),
    lastMessageSender: null,
    isGroup: false,
    isOnline: false,
    isLocked: false,
    unreadCount: 2,
  },
  {
    id: '2',
    name: 'React Native Team',
    avatar: null,
    lastMessage: 'Alice: Check out the new features!',
    lastMessageTime: new Date(Date.now() - 86400000),
    lastMessageSender: 'Alice',
    isGroup: true,
    isOnline: false,
    isLocked: true,
    unreadCount: 15,
  },
  {
    id: '3',
    name: 'Sarah Wilson',
    avatar: null,
    lastMessage: 'Thanks for your help!',
    lastMessageTime: new Date(Date.now() - 172800000),
    lastMessageSender: null,
    isGroup: false,
    isOnline: true,
    isLocked: false,
    unreadCount: 0,
  },
];

const formatMessageTime = (date) => {
  const now = new Date();
  const diff = now - date;
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (minutes < 60) {
    return `${minutes}m ago`;
  }

  if (hours < 24) {
    return `${hours}h ago`;
  }

  if (days === 1) {
    return 'Yesterday';
  }

  if (days < 7) {
    return `${days}d ago`;
  }

  return date.toLocaleDateString();
};

const useArchivedChats = ({ navigation }) => {
  const [archivedChats, setArchivedChats] = useState(() => getInitialArchivedChats());
  const [searchTerm, setSearchTerm] = useState('');
  const [selectionMode, setSelectionMode] = useState(false);
  const [selectedChats, setSelectedChats] = useState(new Set());

  const filteredChats = archivedChats.filter((chat) =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleChatSelection = (chatId) => {
    setSelectedChats((previousSelectedChats) => {
      const nextSelectedChats = new Set(previousSelectedChats);

      if (nextSelectedChats.has(chatId)) {
        nextSelectedChats.delete(chatId);
      } else {
        nextSelectedChats.add(chatId);
      }

      return nextSelectedChats;
    });
  };

  const startSelectionMode = () => {
    setSelectionMode(true);
  };

  const cancelSelectionMode = () => {
    setSelectionMode(false);
    setSelectedChats(new Set());
  };

  const toggleSelectAll = () => {
    if (selectedChats.size === filteredChats.length) {
      setSelectedChats(new Set());
      return;
    }

    setSelectedChats(new Set(filteredChats.map((chat) => chat.id)));
  };

  const handleUnarchiveSelected = () => {
    Alert.alert('Unarchive Chats', `Unarchive ${selectedChats.size} chat(s)?`, [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Unarchive',
        onPress: () => {
          setArchivedChats((previousChats) =>
            previousChats.filter((chat) => !selectedChats.has(chat.id))
          );
          setSelectedChats(new Set());
          setSelectionMode(false);
          Alert.alert('Success', 'Chats unarchived successfully');
        },
      },
    ]);
  };

  const handleChatPress = (chat) => {
    if (selectionMode) {
      toggleChatSelection(chat.id);
      return;
    }

    navigation.navigate('ChatDetail', { chatId: chat.id });
  };

  const handleChatLongPress = (chat) => {
    if (!selectionMode) {
      setSelectionMode(true);
    }

    toggleChatSelection(chat.id);
  };

  return {
    archivedChats,
    searchTerm,
    setSearchTerm,
    selectionMode,
    setSelectionMode,
    selectedChats,
    filteredChats,
    startSelectionMode,
    cancelSelectionMode,
    toggleChatSelection,
    toggleSelectAll,
    handleUnarchiveSelected,
    handleChatPress,
    handleChatLongPress,
    formatMessageTime,
  };
};

export default useArchivedChats;
