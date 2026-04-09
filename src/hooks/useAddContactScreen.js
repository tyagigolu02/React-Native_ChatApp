import { useState } from 'react';
import { Alert } from 'react-native';

const useAddContactScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      return;
    }

    setIsSearching(true);

    setTimeout(() => {
      const mockResults = [
        { id: '1', name: 'John Doe', username: '@johndoe', isFriend: false },
        { id: '2', name: 'Jane Smith', username: '@janesmith', isFriend: true },
      ];

      setSearchResults(mockResults);
      setIsSearching(false);
    }, 1000);
  };

  const sendFriendRequest = (user) => {
    Alert.alert('Success', `Friend request sent to ${user.name}`);
  };

  return {
    searchQuery,
    setSearchQuery,
    isSearching,
    searchResults,
    handleSearch,
    sendFriendRequest,
  };
};

export default useAddContactScreen;
