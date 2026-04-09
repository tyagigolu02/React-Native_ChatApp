import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';
import { useScreenTitle } from '../../context/ScreenTitleContext';
import useHiddenChats from '../../hooks/useHiddenChats';
import styles from './HiddenChatsScreen.styles';
import HiddenChatsContent from '../../components/HiddenChatsScreen/HiddenChatsContent';
import HiddenChatsUnhideModal from '../../components/HiddenChatsScreen/HiddenChatsUnhideModal';

const ACCENT_COLOR = '#8b5cf6';

const HiddenChatsScreen = ({ navigation }) => {
  useScreenTitle('TranslaTalk | Hidden Chats');
  const { colors } = useTheme();

  const {
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
    handleUnhidePress,
    handleCloseUnhideModal,
    handleUnhide,
    handleChatPress,
    formatMessageTime,
  } = useHiddenChats({ navigation });

  return (
    <View style={[styles.container, { backgroundColor: colors.bgPrimary }]}>
      <StatusBar style={colors.isDark ? 'light' : 'dark'} />

      <View style={[styles.header, { backgroundColor: colors.bgCard, borderBottomColor: colors.border }]}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>Hidden Chats</Text>
          <View style={[styles.countBadge, { backgroundColor: ACCENT_COLOR }]}>
            <Text style={styles.countText}>{hiddenChats.length}</Text>
          </View>
        </View>
      </View>

      <HiddenChatsContent
        colors={colors}
        accentColor={ACCENT_COLOR}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filteredChats={filteredChats}
        formatMessageTime={formatMessageTime}
        handleChatPress={handleChatPress}
        handleUnhidePress={handleUnhidePress}
      />

      <HiddenChatsUnhideModal
        visible={showUnhideModal}
        colors={colors}
        accentColor={ACCENT_COLOR}
        chatToUnhide={chatToUnhide}
        password={password}
        setPassword={setPassword}
        error={error}
        setError={setError}
        isUnhiding={isUnhiding}
        onClose={handleCloseUnhideModal}
        onConfirm={handleUnhide}
      />
    </View>
  );
};

export default HiddenChatsScreen;
