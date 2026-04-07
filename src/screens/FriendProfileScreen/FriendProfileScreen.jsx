import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal,
  Alert,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from '../../context/ThemeContext';
import { useScreenTitle } from '../../context/ScreenTitleContext';
import { useAuth } from '../../context/AuthContext';
import { Ionicons } from '@expo/vector-icons';

const FriendProfileScreen = ({ route, navigation }) => {
  useScreenTitle('TranslaTalk | Friend Profile');
  const { colors } = useTheme();
  const { currentUser } = useAuth();
  const { friendId } = route.params || {};

  // Mock friend data
  const [friend] = useState({
    id: friendId || '2',
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

  const [showBlockModal, setShowBlockModal] = useState(false);
  const [showUnfriendModal, setShowUnfriendModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [activeImageUrl, setActiveImageUrl] = useState(null);
  const [isMuted, setIsMuted] = useState(false);

  const formatJoinDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getStatusText = () => {
    if (friend.isOnline) return 'Online';
    const lastSeen = new Date(friend.lastSeen);
    const now = new Date();
    const diff = Math.floor((now - lastSeen) / 60000);
    if (diff < 60) return `Last seen ${diff}m ago`;
    if (diff < 1440) return `Last seen ${Math.floor(diff / 60)}h ago`;
    return `Last seen ${Math.floor(diff / 1440)}d ago`;
  };

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
    setIsMuted(!isMuted);
    Alert.alert(
      'Success',
      isMuted 
        ? `Notifications enabled for ${friend.name}` 
        : `Notifications muted for ${friend.name}`
    );
  };

  const handleReport = () => {
    Alert.alert(
      'Report Contact',
      'Please select a reason for reporting this contact:',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Spam', onPress: () => Alert.alert('Reported', 'Contact reported as spam') },
        { text: 'Harassment', onPress: () => Alert.alert('Reported', 'Contact reported for harassment') },
        { text: 'Other', onPress: () => Alert.alert('Reported', 'Contact reported') },
      ]
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.bgPrimary }]}>
      <StatusBar style={colors.isDark ? 'light' : 'dark'} />
      
      {/* Header */}
      <View style={[styles.header, { backgroundColor: colors.bgCard, borderBottomColor: colors.border }]}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>
          Contact Info
        </Text>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Profile Card */}
        <View style={[styles.profileCard, { backgroundColor: colors.bgCard }]}>
          {/* Banner */}
          <TouchableOpacity 
            style={[styles.banner, { backgroundColor: colors.primary + '30' }]}
            onPress={() => friend.banner && handleViewImage(friend.banner)}
          >
            {friend.banner ? (
              <Image source={{ uri: friend.banner }} style={styles.bannerImage} />
            ) : (
              <View style={[styles.bannerGradient, { backgroundColor: colors.primary }]} />
            )}
          </TouchableOpacity>

          {/* Avatar */}
          <TouchableOpacity 
            style={styles.avatarContainer}
            onPress={() => friend.avatar && handleViewImage(friend.avatar)}
          >
            <View style={[styles.avatarWrapper, { borderColor: colors.bgCard }]}>
              {friend.avatar ? (
                <Image source={{ uri: friend.avatar }} style={styles.avatar} />
              ) : (
                <View style={[styles.avatarPlaceholder, { backgroundColor: colors.primary }]}>
                  <Text style={styles.avatarText}>
                    {friend.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                  </Text>
                </View>
              )}
              {friend.isOnline && (
                <View style={[styles.onlineIndicator, { borderColor: colors.bgCard }]} />
              )}
            </View>
          </TouchableOpacity>

          {/* Name and Status */}
          <View style={styles.nameSection}>
            <Text style={[styles.name, { color: colors.textPrimary }]}>
              {friend.name}
            </Text>
            <View style={[
              styles.statusBadge, 
              { backgroundColor: friend.isOnline ? '#10b981' : colors.bgSecondary }
            ]}>
              <Text style={[styles.statusText, { color: friend.isOnline ? '#fff' : colors.textSecondary }]}>
                {getStatusText()}
              </Text>
            </View>
          </View>
        </View>

        {/* About Section */}
        {friend.about && (
          <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
            <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
              About
            </Text>
            <Text style={[styles.aboutText, { color: colors.textSecondary }]}>
              {friend.about}
            </Text>
          </View>
        )}

        {/* Account Information */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            Account Information
          </Text>
          
          <View style={[styles.infoRow, { borderBottomColor: colors.border }]}>
            <Ionicons name="mail-outline" size={20} color={colors.textSecondary} />
            <View style={styles.infoContent}>
              <Text style={[styles.infoLabel, { color: colors.textSecondary }]}>Email</Text>
              <Text style={[styles.infoValue, { color: colors.textPrimary }]}>
                {friend.email}
              </Text>
            </View>
          </View>

          {friend.phone && (
            <View style={[styles.infoRow, { borderBottomColor: colors.border }]}>
              <Ionicons name="call-outline" size={20} color={colors.textSecondary} />
              <View style={styles.infoContent}>
                <Text style={[styles.infoLabel, { color: colors.textSecondary }]}>Phone</Text>
                <Text style={[styles.infoValue, { color: colors.textPrimary }]}>
                  {friend.phone}
                </Text>
              </View>
            </View>
          )}

          {friend.bio && (
            <View style={[styles.infoRow, { borderBottomColor: colors.border }]}>
              <Ionicons name="chatbox-outline" size={20} color={colors.textSecondary} />
              <View style={styles.infoContent}>
                <Text style={[styles.infoLabel, { color: colors.textSecondary }]}>Bio</Text>
                <Text style={[styles.infoValue, { color: colors.textPrimary }]}>
                  {friend.bio}
                </Text>
              </View>
            </View>
          )}

          <View style={styles.infoRow}>
            <Ionicons name="calendar-outline" size={20} color={colors.textSecondary} />
            <View style={styles.infoContent}>
              <Text style={[styles.infoLabel, { color: colors.textSecondary }]}>Joined</Text>
              <Text style={[styles.infoValue, { color: colors.textPrimary }]}>
                {formatJoinDate(friend.joinedAt)}
              </Text>
            </View>
          </View>
        </View>

        {/* Privacy Options */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            Privacy Options
          </Text>

          <TouchableOpacity 
            style={[styles.actionButton, { borderBottomColor: colors.border }]}
            onPress={handleMuteToggle}
          >
            <Ionicons 
              name={isMuted ? "notifications-off-outline" : "notifications-outline"} 
              size={20} 
              color={colors.textSecondary} 
            />
            <Text style={[styles.actionText, { color: colors.textPrimary }]}>
              {isMuted ? 'Unmute Notifications' : 'Mute Notifications'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.actionButton, { borderBottomColor: colors.border }]}
            onPress={() => setShowUnfriendModal(true)}
          >
            <Ionicons name="person-remove-outline" size={20} color="#f59e0b" />
            <Text style={[styles.actionText, { color: '#f59e0b' }]}>
              Unfriend Contact
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.actionButton, { borderBottomColor: colors.border }]}
            onPress={() => setShowBlockModal(true)}
          >
            <Ionicons name="ban-outline" size={20} color="#ef4444" />
            <Text style={[styles.actionText, { color: '#ef4444' }]}>
              Block Contact
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.actionButton}
            onPress={handleReport}
          >
            <Ionicons name="flag-outline" size={20} color="#ef4444" />
            <Text style={[styles.actionText, { color: '#ef4444' }]}>
              Report Contact
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>

      {/* Unfriend Modal */}
      <Modal
        visible={showUnfriendModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowUnfriendModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { backgroundColor: colors.bgCard }]}>
            <Ionicons name="person-remove" size={48} color="#f59e0b" />
            <Text style={[styles.modalTitle, { color: colors.textPrimary }]}>
              Unfriend Contact?
            </Text>
            <Text style={[styles.modalMessage, { color: colors.textSecondary }]}>
              Are you sure you want to remove {friend.name} from your contacts?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: colors.bgSecondary }]}
                onPress={() => setShowUnfriendModal(false)}
              >
                <Text style={[styles.modalButtonText, { color: colors.textPrimary }]}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: '#f59e0b' }]}
                onPress={handleUnfriend}
              >
                <Text style={[styles.modalButtonText, { color: '#fff' }]}>
                  Unfriend
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Block Modal */}
      <Modal
        visible={showBlockModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowBlockModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { backgroundColor: colors.bgCard }]}>
            <Ionicons name="ban" size={48} color="#ef4444" />
            <Text style={[styles.modalTitle, { color: colors.textPrimary }]}>
              Block Contact?
            </Text>
            <Text style={[styles.modalMessage, { color: colors.textSecondary }]}>
              {friend.name} will no longer be able to send you messages or see when you're online.
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: colors.bgSecondary }]}
                onPress={() => setShowBlockModal(false)}
              >
                <Text style={[styles.modalButtonText, { color: colors.textPrimary }]}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: '#ef4444' }]}
                onPress={handleBlock}
              >
                <Text style={[styles.modalButtonText, { color: '#fff' }]}>
                  Block
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Image Viewer Modal */}
      <Modal
        visible={showImageModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowImageModal(false)}
      >
        <View style={styles.imageModalOverlay}>
          <TouchableOpacity
            style={styles.imageModalClose}
            onPress={() => setShowImageModal(false)}
          >
            <Ionicons name="close" size={32} color="#fff" />
          </TouchableOpacity>
          {activeImageUrl && (
            <Image
              source={{ uri: activeImageUrl }}
              style={styles.fullImage}
              resizeMode="contain"
            />
          )}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingTop: 48,
    borderBottomWidth: 1,
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  scrollView: {
    flex: 1,
  },
  profileCard: {
    marginBottom: 12,
  },
  banner: {
    height: 150,
    overflow: 'hidden',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  bannerGradient: {
    width: '100%',
    height: '100%',
    opacity: 0.3,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: -50,
  },
  avatarWrapper: {
    borderWidth: 4,
    borderRadius: 60,
    position: 'relative',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#10b981',
    borderWidth: 3,
  },
  nameSection: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
  },
  section: {
    marginBottom: 12,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  aboutText: {
    fontSize: 14,
    lineHeight: 20,
  },
  infoRow: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  infoContent: {
    flex: 1,
    marginLeft: 12,
  },
  infoLabel: {
    fontSize: 12,
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 14,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  actionText: {
    fontSize: 14,
    marginLeft: 12,
    fontWeight: '500',
  },
  bottomSpacer: {
    height: 24,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '85%',
    maxWidth: 400,
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  modalMessage: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 24,
  },
  modalButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  modalButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  imageModalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageModalClose: {
    position: 'absolute',
    top: 48,
    right: 16,
    zIndex: 1,
  },
  fullImage: {
    width: '100%',
    height: '100%',
  },
});

export default FriendProfileScreen;
