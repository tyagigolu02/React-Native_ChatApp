import { useState } from 'react';
import { Alert } from 'react-native';

const getInitialFriend = (friendId) => ({
  id: String(friendId || '2'),
  name: 'Sarah Connor',
  email: 'sarah.connor@example.com',
  phone: '+1 234 567 8900',
  bio: 'Tech enthusiast, coffee lover, and code ninja',
  about: 'Always available to discuss React Native development',
  avatar: null,
  banner: null,
  isOnline: true,
  lastSeen: '2024-01-20T14:30:00Z',
  joinedAt: '2023-06-15T10:00:00Z',
});

const formatJoinDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const getStatusText = (friend) => {
  if (friend.isOnline) {
    return 'Online';
  }

  const lastSeen = new Date(friend.lastSeen);
  const now = new Date();
  const diff = Math.floor((now - lastSeen) / 60000);

  if (diff < 60) {
    return `Last seen ${diff}m ago`;
  }

  if (diff < 1440) {
    return `Last seen ${Math.floor(diff / 60)}h ago`;
  }

  return `Last seen ${Math.floor(diff / 1440)}d ago`;
};

const getInitials = (name) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase();

const useFriendProfile = ({ friendId, navigation }) => {
  const [friend] = useState(() => getInitialFriend(friendId));
  const [showBlockModal, setShowBlockModal] = useState(false);
  const [showUnfriendModal, setShowUnfriendModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [activeImageUrl, setActiveImageUrl] = useState(null);
  const [isMuted, setIsMuted] = useState(false);

  const friendInitials = getInitials(friend.name);
  const joinedDate = formatJoinDate(friend.joinedAt);
  const statusText = getStatusText(friend);

  const handleViewImage = (imageUrl) => {
    setActiveImageUrl(imageUrl);
    setShowImageModal(true);
  };

  const handleUnfriend = () => {
    setShowUnfriendModal(false);
    Alert.alert('Success', `${friend.name} has been removed from your contacts`);
    navigation.goBack();
  };

  const handleBlock = () => {
    setShowBlockModal(false);
    Alert.alert('Success', `${friend.name} has been blocked`);
    navigation.goBack();
  };

  const handleMuteToggle = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    Alert.alert(
      'Success',
      nextMuted
        ? `Notifications muted for ${friend.name}`
        : `Notifications enabled for ${friend.name}`
    );
  };

  const handleReport = () => {
    Alert.alert('Report Contact', 'Please select a reason for reporting this contact:', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Spam', onPress: () => Alert.alert('Reported', 'Contact reported as spam') },
      {
        text: 'Harassment',
        onPress: () => Alert.alert('Reported', 'Contact reported for harassment'),
      },
      { text: 'Other', onPress: () => Alert.alert('Reported', 'Contact reported') },
    ]);
  };

  return {
    friend,
    friendInitials,
    joinedDate,
    statusText,
    isMuted,
    showBlockModal,
    setShowBlockModal,
    showUnfriendModal,
    setShowUnfriendModal,
    showImageModal,
    setShowImageModal,
    activeImageUrl,
    handleViewImage,
    handleUnfriend,
    handleBlock,
    handleMuteToggle,
    handleReport,
  };
};

export default useFriendProfile;
