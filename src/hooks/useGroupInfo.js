import { useState } from 'react';
import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useAuth } from '../context/AuthContext';
import { activities, getInitialGroup } from '../screens/GroupInfoScreen/groupInfoData';

const confirmDestructiveAction = ({ title, message, confirmLabel, onConfirm }) => {
  Alert.alert(title, message, [
    { text: 'Cancel', style: 'cancel' },
    { text: confirmLabel, style: 'destructive', onPress: onConfirm },
  ]);
};

const useGroupInfo = ({ groupId, navigation }) => {
  const { currentUser } = useAuth();
  const [group, setGroup] = useState(() => getInitialGroup(groupId));
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(() => getInitialGroup(groupId).name);
  const [editedDescription, setEditedDescription] = useState(() => getInitialGroup(groupId).description);
  const [selectedMember, setSelectedMember] = useState(null);
  const [showActivityLog, setShowActivityLog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const currentUserId = currentUser?.id;
  const isOwner = currentUserId === group.owner?.id;
  const isAdmin = group.admins.some((admin) => admin.id === currentUserId) || isOwner;

  const handleSaveChanges = () => {
    setIsLoading(true);

    setTimeout(() => {
      setGroup((previousGroup) => ({
        ...previousGroup,
        name: editedName,
        description: editedDescription,
      }));
      setIsEditing(false);
      setIsLoading(false);
      Alert.alert('Success', 'Group information updated');
    }, 1000);
  };

  const handleCancelEdit = () => {
    setEditedName(group.name);
    setEditedDescription(group.description);
    setIsEditing(false);
  };

  const handleUploadAvatar = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setGroup((previousGroup) => ({
        ...previousGroup,
        avatar: uri,
      }));
      Alert.alert('Success', 'Group avatar updated');
    }
  };

  const handleUploadBanner = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.8,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setGroup((previousGroup) => ({
        ...previousGroup,
        banner: uri,
      }));
      Alert.alert('Success', 'Group banner updated');
    }
  };

  const handleRemoveMember = (memberId) => {
    confirmDestructiveAction({
      title: 'Remove Member',
      message: 'Are you sure you want to remove this member?',
      confirmLabel: 'Remove',
      onConfirm: () => {
        setGroup((previousGroup) => ({
          ...previousGroup,
          members: previousGroup.members.filter((member) => member.id !== memberId),
        }));
        Alert.alert('Success', 'Member removed');
      },
    });
  };

  const handlePromoteAdmin = (memberId) => {
    const member = group.members.find((groupMember) => groupMember.id === memberId);

    if (!member) {
      return;
    }

    setGroup((previousGroup) => ({
      ...previousGroup,
      admins: [...previousGroup.admins, member],
      members: previousGroup.members.filter((groupMember) => groupMember.id !== memberId),
    }));

    Alert.alert('Success', `${member.name} promoted to admin`);
  };

  const handleBanMember = (memberId) => {
    confirmDestructiveAction({
      title: 'Ban Member',
      message: 'Are you sure you want to ban this member?',
      confirmLabel: 'Ban',
      onConfirm: () => {
        setGroup((previousGroup) => ({
          ...previousGroup,
          members: previousGroup.members.filter((member) => member.id !== memberId),
        }));
        Alert.alert('Success', 'Member banned');
      },
    });
  };

  const handleLeaveGroup = () => {
    confirmDestructiveAction({
      title: 'Leave Group',
      message: 'Are you sure you want to leave this group?',
      confirmLabel: 'Leave',
      onConfirm: () => {
        navigation?.goBack?.();
        Alert.alert('Left Group', 'You have left the group');
      },
    });
  };

  const handleDeleteGroup = () => {
    confirmDestructiveAction({
      title: 'Delete Group',
      message: 'Are you sure you want to permanently delete this group?',
      confirmLabel: 'Delete',
      onConfirm: () => {
        navigation?.navigate?.('Chat');
        Alert.alert('Group Deleted', 'The group has been permanently deleted');
      },
    });
  };

  const handleCopyInviteLink = () => {
    Alert.alert('Copied!', 'Invite link copied to clipboard');
  };

  const togglePermission = (permission) => {
    setGroup((previousGroup) => ({
      ...previousGroup,
      permissions: {
        ...previousGroup.permissions,
        [permission]: !previousGroup.permissions[permission],
      },
    }));
  };

  const handleAddMembers = () => {
    navigation?.navigate?.('NewChat');
  };

  return {
    group,
    isEditing,
    setIsEditing,
    editedName,
    setEditedName,
    editedDescription,
    setEditedDescription,
    selectedMember,
    setSelectedMember,
    showActivityLog,
    setShowActivityLog,
    isLoading,
    isOwner,
    isAdmin,
    currentUserId,
    activities,
    handleSaveChanges,
    handleCancelEdit,
    handleUploadAvatar,
    handleUploadBanner,
    handleRemoveMember,
    handlePromoteAdmin,
    handleBanMember,
    handleLeaveGroup,
    handleDeleteGroup,
    handleCopyInviteLink,
    togglePermission,
    handleAddMembers,
  };
};

export default useGroupInfo;
