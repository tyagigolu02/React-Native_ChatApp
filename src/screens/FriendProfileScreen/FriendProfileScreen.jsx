import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';
import { useScreenTitle } from '../../context/ScreenTitleContext';
import useFriendProfile from '../../hooks/useFriendProfile';
import styles from './FriendProfileScreen.styles';
import FriendProfileContent from '../../components/FriendProfileScreen/FriendProfileContent';
import FriendProfileModals from '../../components/FriendProfileScreen/FriendProfileModals';

const FriendProfileScreen = ({ route, navigation }) => {
  useScreenTitle('TranslaTalk | Friend Profile');
  const { colors } = useTheme();
  const { friendId } = route.params || {};

  const {
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
  } = useFriendProfile({ friendId, navigation });

  return (
    <View style={[styles.container, { backgroundColor: colors.bgPrimary }]}>
      <StatusBar style={colors.isDark ? 'light' : 'dark'} />

      <View style={[styles.header, { backgroundColor: colors.bgCard, borderBottomColor: colors.border }]}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>Contact Info</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <FriendProfileContent
          friend={friend}
          friendInitials={friendInitials}
          colors={colors}
          statusText={statusText}
          joinedDate={joinedDate}
          isMuted={isMuted}
          setShowUnfriendModal={setShowUnfriendModal}
          setShowBlockModal={setShowBlockModal}
          handleViewImage={handleViewImage}
          handleMuteToggle={handleMuteToggle}
          handleReport={handleReport}
        />
      </ScrollView>

      <FriendProfileModals
        colors={colors}
        friendName={friend.name}
        showUnfriendModal={showUnfriendModal}
        setShowUnfriendModal={setShowUnfriendModal}
        showBlockModal={showBlockModal}
        setShowBlockModal={setShowBlockModal}
        showImageModal={showImageModal}
        setShowImageModal={setShowImageModal}
        activeImageUrl={activeImageUrl}
        handleUnfriend={handleUnfriend}
        handleBlock={handleBlock}
      />
    </View>
  );
};

export default FriendProfileScreen;
