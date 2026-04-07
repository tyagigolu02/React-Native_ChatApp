import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Modal,
  Alert,
  ActivityIndicator,
  Image,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';
import { useScreenTitle } from '../../context/ScreenTitleContext';
import { useAuth } from '../../context/AuthContext';
import * as ImagePicker from 'expo-image-picker';

const GroupInfoScreen = ({ route, navigation }) => {
  useScreenTitle('TranslaTalk | Group Info');
  const { colors } = useTheme();
  const { currentUser } = useAuth();
  const { groupId } = route.params || {};

  // Mock group data
  const [group, setGroup] = useState({
    id: groupId || '1',
    name: 'React Native Developers',
    description: 'A community for React Native enthusiasts',
    avatar: null,
    banner: null,
    owner: { id: '1', name: 'Alice Johnson', avatar: null },
    admins: [
      { id: '2', name: 'Bob Smith', email: 'bob@example.com', avatar: null },
    ],
    members: [
      { id: '3', name: 'Carol White', email: 'carol@example.com', avatar: null },
      { id: '4', name: 'David Brown', email: 'david@example.com', avatar: null, is_muted: true },
      { id: '5', name: 'Eve Davis', email: 'eve@example.com', avatar: null },
    ],
    createdAt: '2024-01-15T10:00:00Z',
    permissions: {
      only_admins_message: false,
      is_private: false,
      slow_mode_delay: 0,
    },
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(group.name);
  const [editedDescription, setEditedDescription] = useState(group.description);
  const [selectedMember, setSelectedMember] = useState(null);
  const [showActivityLog, setShowActivityLog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isOwner = currentUser?.id === group.owner?.id;
  const isAdmin = group.admins.some(admin => admin.id === currentUser?.id) || isOwner;

  const activities = [
    { id: '1', action: 'promoted_admin', actor: 'Alice', target: 'Bob', time: '2 hours ago' },
    { id: '2', action: 'member_joined', actor: 'Carol', time: '1 day ago' },
    { id: '3', action: 'updated_photo', actor: 'Alice', time: '3 days ago' },
  ];

  const handleSaveChanges = () => {
    setIsLoading(true);
    setTimeout(() => {
      setGroup({ ...group, name: editedName, description: editedDescription });
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
      setGroup({ ...group, avatar: result.assets[0].uri });
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
      setGroup({ ...group, banner: result.assets[0].uri });
      Alert.alert('Success', 'Group banner updated');
    }
  };

  const handleRemoveMember = (memberId) => {
    Alert.alert(
      'Remove Member',
      'Are you sure you want to remove this member?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: () => {
            setGroup({
              ...group,
              members: group.members.filter(m => m.id !== memberId),
            });
            Alert.alert('Success', 'Member removed');
          },
        },
      ]
    );
  };

  const handlePromoteAdmin = (memberId) => {
    const member = group.members.find(m => m.id === memberId);
    setGroup({
      ...group,
      admins: [...group.admins, member],
      members: group.members.filter(m => m.id !== memberId),
    });
    Alert.alert('Success', `${member.name} promoted to admin`);
  };

  const handleBanMember = (memberId) => {
    Alert.alert(
      'Ban Member',
      'Are you sure you want to ban this member?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Ban',
          style: 'destructive',
          onPress: () => {
            setGroup({
              ...group,
              members: group.members.filter(m => m.id !== memberId),
            });
            Alert.alert('Success', 'Member banned');
          },
        },
      ]
    );
  };

  const handleLeaveGroup = () => {
    Alert.alert(
      'Leave Group',
      'Are you sure you want to leave this group?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Leave',
          style: 'destructive',
          onPress: () => {
            navigation.goBack();
            Alert.alert('Left Group', 'You have left the group');
          },
        },
      ]
    );
  };

  const handleDeleteGroup = () => {
    Alert.alert(
      'Delete Group',
      'Are you sure you want to permanently delete this group?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            navigation.navigate('Chat');
            Alert.alert('Group Deleted', 'The group has been permanently deleted');
          },
        },
      ]
    );
  };

  const handleCopyInviteLink = () => {
    Alert.alert('Copied!', 'Invite link copied to clipboard');
  };

  const togglePermission = (permission) => {
    setGroup({
      ...group,
      permissions: {
        ...group.permissions,
        [permission]: !group.permissions[permission],
      },
    });
  };

  const renderMember = ({ item, isAdmin: isMemberAdmin = false }) => (
    <View style={[styles.memberItem, { borderBottomColor: colors.border }]}>
      <View style={[styles.memberAvatar, { backgroundColor: '#667eea' }]}>
        {item.avatar ? (
          <Image source={{ uri: item.avatar }} style={styles.memberAvatarImage} />
        ) : (
          <Text style={styles.memberAvatarText}>
            {item.name.charAt(0).toUpperCase()}
          </Text>
        )}
      </View>
      <View style={styles.memberInfo}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Text style={[styles.memberName, { color: colors.textPrimary }]}>
            {item.name}
          </Text>
          {item.is_muted && (
            <Ionicons name="volume-mute" size={14} color={colors.textSecondary} />
          )}
        </View>
        <Text style={[styles.memberEmail, { color: colors.textSecondary }]}>
          {item.email}
        </Text>
      </View>
      {isAdmin && item.id !== currentUser?.id && (
        <TouchableOpacity
          style={styles.memberActions}
          onPress={() => setSelectedMember(item)}
        >
          <Ionicons name="ellipsis-vertical" size={20} color={colors.textSecondary} />
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.bgPrimary }]}>
      <StatusBar style={colors.isDark ? 'light' : 'dark'} />
      
      {/* Header */}
      <View style={[styles.header, { backgroundColor: colors.bgCard }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>
          Group Info
        </Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView style={styles.content}>
        {/* Banner */}
        <TouchableOpacity
          style={[styles.banner, { backgroundColor: colors.bgCard }]}
          onPress={isAdmin ? handleUploadBanner : undefined}
          disabled={!isAdmin}
        >
          {group.banner ? (
            <Image source={{ uri: group.banner }} style={styles.bannerImage} />
          ) : (
            <View style={[styles.bannerPlaceholder, { backgroundColor: '#667eea' }]}>
              {isAdmin && (
                <Ionicons name="camera" size={32} color="#fff" />
              )}
            </View>
          )}
        </TouchableOpacity>

        {/* Avatar */}
        <View style={styles.avatarContainer}>
          <TouchableOpacity
            style={[styles.avatar, { backgroundColor: '#667eea', borderColor: colors.bgPrimary }]}
            onPress={isAdmin ? handleUploadAvatar : undefined}
            disabled={!isAdmin}
          >
            {group.avatar ? (
              <Image source={{ uri: group.avatar }} style={styles.avatarImage} />
            ) : (
              <Text style={styles.avatarText}>
                {group.name.charAt(0).toUpperCase()}
              </Text>
            )}
            {isAdmin && (
              <View style={[styles.cameraIcon, { backgroundColor: colors.bgCard }]}>
                <Ionicons name="camera" size={16} color={colors.textPrimary} />
              </View>
            )}
          </TouchableOpacity>
        </View>

        {/* Group Name & Description */}
        <View style={[styles.card, { backgroundColor: colors.bgCard }]}>
          {isEditing ? (
            <>
              <TextInput
                style={[styles.input, { color: colors.textPrimary, borderColor: colors.border }]}
                value={editedName}
                onChangeText={setEditedName}
                placeholder="Group name"
                placeholderTextColor={colors.textSecondary}
              />
              <TextInput
                style={[styles.input, styles.textArea, { color: colors.textPrimary, borderColor: colors.border }]}
                value={editedDescription}
                onChangeText={setEditedDescription}
                placeholder="Group description"
                placeholderTextColor={colors.textSecondary}
                multiline
                numberOfLines={3}
              />
              <View style={styles.editButtons}>
                <TouchableOpacity
                  style={[styles.button, styles.cancelButton, { backgroundColor: colors.bgSecondary }]}
                  onPress={handleCancelEdit}
                >
                  <Text style={[styles.buttonText, { color: colors.textPrimary }]}>
                    Cancel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.saveButton, { backgroundColor: '#667eea' }]}
                  onPress={handleSaveChanges}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <ActivityIndicator color="#fff" size="small" />
                  ) : (
                    <Text style={styles.saveButtonText}>Save</Text>
                  )}
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <>
              <View style={styles.titleRow}>
                <Text style={[styles.groupName, { color: colors.textPrimary }]}>
                  {group.name}
                </Text>
                {isAdmin && (
                  <TouchableOpacity onPress={() => setIsEditing(true)}>
                    <Ionicons name="pencil" size={20} color={colors.textPrimary} />
                  </TouchableOpacity>
                )}
              </View>
              <Text style={[styles.groupDescription, { color: colors.textSecondary }]}>
                {group.description}
              </Text>
              <Text style={[styles.groupDetails, { color: colors.textSecondary }]}>
                Created: {new Date(group.createdAt).toLocaleDateString()} • {group.members.length + group.admins.length + 1} members
              </Text>
            </>
          )}
        </View>

        {/* Owner */}
        <View style={[styles.card, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            Group Owner
          </Text>
          <View style={styles.ownerItem}>
            <View style={[styles.memberAvatar, { backgroundColor: '#667eea' }]}>
              <Text style={styles.memberAvatarText}>
                {group.owner.name.charAt(0).toUpperCase()}
              </Text>
            </View>
            <Text style={[styles.memberName, { color: colors.textPrimary }]}>
              {group.owner.name}
            </Text>
          </View>
        </View>

        {/* Admins */}
        {group.admins.length > 0 && (
          <View style={[styles.card, { backgroundColor: colors.bgCard }]}>
            <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
              Admins ({group.admins.length})
            </Text>
            {group.admins.map(admin => (
              <View key={admin.id}>
                {renderMember({ item: admin, isAdmin: true })}
              </View>
            ))}
          </View>
        )}

        {/* Members */}
        <View style={[styles.card, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            Members ({group.members.length})
          </Text>
          {group.members.map(member => (
            <View key={member.id}>
              {renderMember({ item: member })}
            </View>
          ))}
        </View>

        {/* Settings */}
        {isAdmin && (
          <View style={[styles.card, { backgroundColor: colors.bgCard }]}>
            <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
              Group Settings
            </Text>
            
            <TouchableOpacity
              style={styles.settingRow}
              onPress={() => togglePermission('only_admins_message')}
            >
              <View style={{ flex: 1 }}>
                <Text style={[styles.settingText, { color: colors.textPrimary }]}>
                  Only Admins Can Message
                </Text>
              </View>
              <View style={[
                styles.switch,
                group.permissions.only_admins_message && styles.switchActive
              ]} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.settingRow}
              onPress={() => togglePermission('is_private')}
            >
              <View style={{ flex: 1 }}>
                <Text style={[styles.settingText, { color: colors.textPrimary }]}>
                  Private Group
                </Text>
              </View>
              <View style={[
                styles.switch,
                group.permissions.is_private && styles.switchActive
              ]} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingRow} onPress={handleCopyInviteLink}>
              <Ionicons name="link" size={20} color={colors.textPrimary} />
              <Text style={[styles.settingText, { color: colors.textPrimary }]}>
                Copy Invite Link
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Activity Log */}
        <View style={[styles.card, { backgroundColor: colors.bgCard }]}>
          <TouchableOpacity
            style={styles.titleRow}
            onPress={() => setShowActivityLog(!showActivityLog)}
          >
            <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
              Activity Log
            </Text>
            <Ionicons
              name={showActivityLog ? 'chevron-up' : 'chevron-down'}
              size={20}
              color={colors.textPrimary}
            />
          </TouchableOpacity>
          {showActivityLog && activities.map(activity => (
            <View key={activity.id} style={styles.activityItem}>
              <Text style={[styles.activityText, { color: colors.textSecondary }]}>
                {activity.actor} {activity.action.replace('_', ' ')} {activity.target} • {activity.time}
              </Text>
            </View>
          ))}
        </View>

        {/* Action Buttons */}
        <View style={styles.actions}>
          {isAdmin && (
            <>
              <TouchableOpacity
                style={[styles.actionButton, { backgroundColor: '#667eea' }]}
                onPress={() => navigation.navigate('NewChat')}
              >
                <Ionicons name="person-add" size={20} color="#fff" />
                <Text style={styles.actionButtonText}>Add Members</Text>
              </TouchableOpacity>
              
              {isOwner && (
                <TouchableOpacity
                  style={[styles.actionButton, { backgroundColor: colors.error }]}
                  onPress={handleDeleteGroup}
                >
                  <Ionicons name="trash" size={20} color="#fff" />
                  <Text style={styles.actionButtonText}>Delete Group</Text>
                </TouchableOpacity>
              )}
            </>
          )}
          
          {!isOwner && (
            <TouchableOpacity
              style={[styles.actionButton, { backgroundColor: colors.error }]}
              onPress={handleLeaveGroup}
            >
              <Ionicons name="exit" size={20} color="#fff" />
              <Text style={styles.actionButtonText}>Leave Group</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>

      {/* Member Actions Modal */}
      <Modal
        visible={selectedMember !== null}
        transparent
        animationType="fade"
        onRequestClose={() => setSelectedMember(null)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setSelectedMember(null)}
        >
          <View style={[styles.actionSheet, { backgroundColor: colors.bgCard }]}>
            <Text style={[styles.actionSheetTitle, { color: colors.textPrimary }]}>
              {selectedMember?.name}
            </Text>
            
            {isOwner && (
              <TouchableOpacity
                style={styles.actionSheetItem}
                onPress={() => {
                  handlePromoteAdmin(selectedMember.id);
                  setSelectedMember(null);
                }}
              >
                <Ionicons name="arrow-up" size={20} color={colors.textPrimary} />
                <Text style={[styles.actionSheetText, { color: colors.textPrimary }]}>
                  Promote to Admin
                </Text>
              </TouchableOpacity>
            )}
            
            <TouchableOpacity
              style={styles.actionSheetItem}
              onPress={() => {
                handleBanMember(selectedMember.id);
                setSelectedMember(null);
              }}
            >
              <Ionicons name="ban" size={20} color={colors.error} />
              <Text style={[styles.actionSheetText, { color: colors.error }]}>
                Ban Member
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.actionSheetItem}
              onPress={() => {
                handleRemoveMember(selectedMember.id);
                setSelectedMember(null);
              }}
            >
              <Ionicons name="person-remove" size={20} color={colors.error} />
              <Text style={[styles.actionSheetText, { color: colors.error }]}>
                Remove from Group
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[styles.actionSheetItem, styles.cancelItem]}
              onPress={() => setSelectedMember(null)}
            >
              <Text style={[styles.actionSheetText, { color: colors.textPrimary }]}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingTop: 48,
  },
  backButton: { padding: 4 },
  headerTitle: { fontSize: 18, fontWeight: 'bold' },
  content: { flex: 1 },
  banner: { height: 160, width: '100%' },
  bannerImage: { width: '100%', height: '100%' },
  bannerPlaceholder: { width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' },
  avatarContainer: { alignItems: 'center', marginTop: -60, marginBottom: 16 },
  avatar: { width: 120, height: 120, borderRadius: 60, borderWidth: 4, justifyContent: 'center', alignItems: 'center' },
  avatarImage: { width: '100%', height: '100%', borderRadius: 60 },
  avatarText: { color: '#fff', fontSize: 48, fontWeight: 'bold' },
  cameraIcon: { position: 'absolute', bottom: 0, right: 0, width: 36, height: 36, borderRadius: 18, justifyContent: 'center', alignItems: 'center' },
  card: { marginHorizontal: 16, marginBottom: 16, padding: 16, borderRadius: 12 },
  titleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  groupName: { fontSize: 24, fontWeight: 'bold' },
  groupDescription: { fontSize: 14, marginTop: 8, lineHeight: 20 },
  groupDetails: { fontSize: 12, marginTop: 8 },
  input: { borderWidth: 1, borderRadius: 8, padding: 12, marginBottom: 12, fontSize: 16 },
  textArea: { height: 80, textAlignVertical: 'top' },
  editButtons: { flexDirection: 'row', gap: 8 },
  button: { flex: 1, padding: 12, borderRadius: 8, alignItems: 'center' },
  cancelButton: {},
  saveButton: {},
  buttonText: { fontSize: 16, fontWeight: '600' },
  saveButtonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
  ownerItem: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  memberItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1 },
  memberAvatar: { width: 44, height: 44, borderRadius: 22, justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  memberAvatarImage: { width: '100%', height: '100%', borderRadius: 22 },
  memberAvatarText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  memberInfo: { flex: 1 },
  memberName: { fontSize: 16, fontWeight: '600' },
  memberEmail: { fontSize: 13, marginTop: 2 },
  memberActions: { padding: 8 },
  settingRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, gap: 12 },
  settingText: { fontSize: 16 },
  switch: { width: 48, height: 28, borderRadius: 14, backgroundColor: '#ccc' },
  switchActive: { backgroundColor: '#667eea' },
  activityItem: { paddingVertical: 8 },
  activityText: { fontSize: 14 },
  actions: { padding: 16, gap: 12 },
  actionButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 14, borderRadius: 10, gap: 8 },
  actionButtonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
  actionSheet: { borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingTop: 20, paddingBottom: 40 },
  actionSheetTitle: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 16, paddingHorizontal: 20 },
  actionSheetItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 14, paddingHorizontal: 20, gap: 12 },
  actionSheetText: { fontSize: 16 },
  cancelItem: { marginTop: 8, borderTopWidth: 1, borderTopColor: 'rgba(0,0,0,0.1)' },
});

export default GroupInfoScreen;
