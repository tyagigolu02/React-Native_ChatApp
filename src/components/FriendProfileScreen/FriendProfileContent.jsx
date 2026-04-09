import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../screens/FriendProfileScreen/FriendProfileScreen.styles';

const renderInfoRow = (iconName, label, value, colors, borderColor) => (
  <View style={[styles.infoRow, { borderBottomColor: borderColor }]}>
    <Ionicons name={iconName} size={20} color={colors.textSecondary} />
    <View style={styles.infoContent}>
      <Text style={[styles.infoLabel, { color: colors.textSecondary }]}>{label}</Text>
      <Text style={[styles.infoValue, { color: colors.textPrimary }]}>{value}</Text>
    </View>
  </View>
);

const FriendProfileContent = ({
  friend,
  friendInitials,
  colors,
  statusText,
  joinedDate,
  isMuted,
  setShowUnfriendModal,
  setShowBlockModal,
  handleViewImage,
  handleMuteToggle,
  handleReport,
}) => {
  return (
    <>
      <View style={[styles.profileCard, { backgroundColor: colors.bgCard }]}>
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

        <TouchableOpacity
          style={styles.avatarContainer}
          onPress={() => friend.avatar && handleViewImage(friend.avatar)}
        >
          <View style={[styles.avatarWrapper, { borderColor: colors.bgCard }]}>
            {friend.avatar ? (
              <Image source={{ uri: friend.avatar }} style={styles.avatar} />
            ) : (
              <View style={[styles.avatarPlaceholder, { backgroundColor: colors.primary }]}>
                <Text style={styles.avatarText}>{friendInitials}</Text>
              </View>
            )}
            {friend.isOnline && (
              <View style={[styles.onlineIndicator, { borderColor: colors.bgCard }]} />
            )}
          </View>
        </TouchableOpacity>

        <View style={styles.nameSection}>
          <Text style={[styles.name, { color: colors.textPrimary }]}>{friend.name}</Text>
          <View
            style={[
              styles.statusBadge,
              { backgroundColor: friend.isOnline ? '#10b981' : colors.bgSecondary },
            ]}
          >
            <Text
              style={[
                styles.statusText,
                { color: friend.isOnline ? '#fff' : colors.textSecondary },
              ]}
            >
              {statusText}
            </Text>
          </View>
        </View>
      </View>

      {friend.about && (
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>About</Text>
          <Text style={[styles.aboutText, { color: colors.textSecondary }]}>{friend.about}</Text>
        </View>
      )}

      <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
        <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>Account Information</Text>

        {renderInfoRow('mail-outline', 'Email', friend.email, colors, colors.border)}

        {friend.phone && renderInfoRow('call-outline', 'Phone', friend.phone, colors, colors.border)}

        {friend.bio && renderInfoRow('chatbox-outline', 'Bio', friend.bio, colors, colors.border)}

        <View style={styles.infoRow}>
          <Ionicons name="calendar-outline" size={20} color={colors.textSecondary} />
          <View style={styles.infoContent}>
            <Text style={[styles.infoLabel, { color: colors.textSecondary }]}>Joined</Text>
            <Text style={[styles.infoValue, { color: colors.textPrimary }]}>{joinedDate}</Text>
          </View>
        </View>
      </View>

      <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
        <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>Privacy Options</Text>

        <TouchableOpacity
          style={[styles.actionButton, { borderBottomColor: colors.border }]}
          onPress={handleMuteToggle}
        >
          <Ionicons
            name={isMuted ? 'notifications-off-outline' : 'notifications-outline'}
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
          <Text style={[styles.actionText, { color: '#f59e0b' }]}>Unfriend Contact</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, { borderBottomColor: colors.border }]}
          onPress={() => setShowBlockModal(true)}
        >
          <Ionicons name="ban-outline" size={20} color="#ef4444" />
          <Text style={[styles.actionText, { color: '#ef4444' }]}>Block Contact</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={handleReport}>
          <Ionicons name="flag-outline" size={20} color="#ef4444" />
          <Text style={[styles.actionText, { color: '#ef4444' }]}>Report Contact</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomSpacer} />
    </>
  );
};

export default FriendProfileContent;
