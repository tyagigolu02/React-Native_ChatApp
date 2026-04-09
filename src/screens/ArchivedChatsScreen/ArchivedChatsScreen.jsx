import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';
import { useScreenTitle } from '../../context/ScreenTitleContext';
import useArchivedChats from '../../hooks/useArchivedChats';
import styles from './ArchivedChatsScreen.styles';
import ArchivedChatsContent from '../../components/ArchivedChatsScreen/ArchivedChatsContent';

const ArchivedChatsScreen = ({ navigation }) => {
  useScreenTitle('TranslaTalk | Archived Chats');
  const { colors } = useTheme();

  const {
    searchTerm,
    setSearchTerm,
    selectionMode,
    selectedChats,
    filteredChats,
    startSelectionMode,
    cancelSelectionMode,
    toggleSelectAll,
    handleUnarchiveSelected,
    handleChatPress,
    handleChatLongPress,
    formatMessageTime,
  } = useArchivedChats({ navigation });

  return (
    <View style={[styles.container, { backgroundColor: colors.bgPrimary }]}>
      <StatusBar style={colors.isDark ? 'light' : 'dark'} />

      <View style={[styles.header, { backgroundColor: colors.bgCard, borderBottomColor: colors.border }]}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>Archived Chats</Text>
        {!selectionMode ? (
          <TouchableOpacity style={styles.selectButton} onPress={startSelectionMode}>
            <Ionicons name="checkmark-circle-outline" size={24} color={colors.textPrimary} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.selectButton} onPress={cancelSelectionMode}>
            <Text style={[styles.cancelText, { color: colors.textPrimary }]}>Cancel</Text>
          </TouchableOpacity>
        )}
      </View>

      <ArchivedChatsContent
        colors={colors}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectionMode={selectionMode}
        selectedChats={selectedChats}
        filteredChats={filteredChats}
        formatMessageTime={formatMessageTime}
        toggleSelectAll={toggleSelectAll}
        handleUnarchiveSelected={handleUnarchiveSelected}
        handleChatPress={handleChatPress}
        handleChatLongPress={handleChatLongPress}
      />
    </View>
  );
};

export default ArchivedChatsScreen;
