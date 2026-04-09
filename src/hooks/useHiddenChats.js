import { useState } from 'react';
import { Alert } from 'react-native';

const getInitialHiddenChats = () => [
  {
    id: '1',
    name: 'Private Chat',
    avatar: null,
    lastMessage: 'This is a hidden message',
    lastMessageTime: new Date(Date.now() - 3600000),
    isGroup: false,
    isOnline: true,
    isLocked: true,
    unreadCount: 3,
  },
  {
    id: '2',
    name: 'Secret Group',
    avatar: null,
    lastMessage: 'Alice: Confidential information',
    lastMessageTime: new Date(Date.now() - 86400000),
    isGroup: true,
    isOnline: false,
    isLocked: true,
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

const useHiddenChats = ({ navigation }) => {
  const [hiddenChats, setHiddenChats] = useState(() => getInitialHiddenChats());
  const [searchTerm, setSearchTerm] = useState('');
  const [showUnhideModal, setShowUnhideModal] = useState(false);
  const [chatToUnhide, setChatToUnhide] = useState(null);
  const [password, setPassword] = useState('');
  const [isUnhiding, setIsUnhiding] = useState(false);
  const [error, setError] = useState('');

  const filteredChats = hiddenChats.filter((chat) =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const resetUnhideForm = () => {
    setPassword('');
    setError('');
  };

  const handleUnhidePress = (chat) => {
    setChatToUnhide(chat);
    setShowUnhideModal(true);
    resetUnhideForm();
  };

  const handleCloseUnhideModal = () => {
    setShowUnhideModal(false);
    setChatToUnhide(null);
    setIsUnhiding(false);
    resetUnhideForm();
  };

  const handleUnhide = () => {
    if (!password) {
      setError('Please enter your password');
      return;
    }

    if (!chatToUnhide) {
      return;
    }

    setIsUnhiding(true);
    setError('');

    setTimeout(() => {
      if (password === 'demo') {
        setHiddenChats((previousChats) =>
          previousChats.filter((chat) => chat.id !== chatToUnhide.id)
        );
        setShowUnhideModal(false);
        setIsUnhiding(false);
        setChatToUnhide(null);
        resetUnhideForm();
        Alert.alert('Success', `${chatToUnhide.name} has been unhidden`);
      } else {
        setError('Incorrect password');
        setIsUnhiding(false);
      }
    }, 1000);
  };

  const handleChatPress = (chat) => {
    navigation.navigate('ChatDetail', { chatId: chat.id });
  };

  return {
    hiddenChats,
    searchTerm,
    setSearchTerm,
    filteredChats,
    showUnhideModal,
    chatToUnhide,
    password,
    setPassword,
    isUnhiding,
    error,
    setError,
    handleUnhidePress,
    handleCloseUnhideModal,
    handleUnhide,
    handleChatPress,
    formatMessageTime,
  };
};

export default useHiddenChats;
