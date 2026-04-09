import { useState } from 'react';
import { Alert } from 'react-native';

const INITIAL_BLOCKED_USERS = [
  { id: '1', name: 'John Spam', email: 'john.spam@example.com', avatar: null, blockedAt: new Date(Date.now() - 86400000) },
  { id: '2', name: 'Jane Harasser', email: 'jane.h@example.com', avatar: null, blockedAt: new Date(Date.now() - 172800000) },
  { id: '3', name: 'Spammy McSpamface', email: 'spammy@example.com', avatar: null, blockedAt: new Date(Date.now() - 604800000) },
];

const formatBlockedDate = (date) => {
  const now = new Date();
  const diff = now - date;
  const days = Math.floor(diff / 86400000);

  if (days === 0) return 'Today';
  if (days === 1) return 'Yesterday';
  if (days < 7) return `${days} days ago`;
  if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
  return date.toLocaleDateString();
};

const useBlockedUsers = () => {
  const [blockedUsers, setBlockedUsers] = useState(INITIAL_BLOCKED_USERS);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = blockedUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUnblock = (user) => {
    Alert.alert('Unblock User', `Are you sure you want to unblock ${user.name}?`, [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Unblock',
        onPress: () => {
          setBlockedUsers((previousUsers) => previousUsers.filter((blockedUser) => blockedUser.id !== user.id));
          Alert.alert('Success', `${user.name} has been unblocked`);
        },
      },
    ]);
  };

  return {
    searchTerm,
    setSearchTerm,
    filteredUsers,
    handleUnblock,
    formatBlockedDate,
  };
};

export default useBlockedUsers;