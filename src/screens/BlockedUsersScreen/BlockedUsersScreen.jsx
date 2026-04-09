import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';
import { useScreenTitle } from '../../context/ScreenTitleContext';
import styles from './BlockedUsersScreen.styles';
import useBlockedUsers from '../../hooks/useBlockedUsers';
import BlockedUsersContent from '../../components/BlockedUsersScreen/BlockedUsersContent';

const BlockedUsersScreen = ({ navigation }) => {
  useScreenTitle('TranslaTalk | Blocked Users');
  const { colors } = useTheme();
  const { searchTerm, setSearchTerm, filteredUsers, handleUnblock, formatBlockedDate } =
    useBlockedUsers();

  return (
    <View style={[styles.container, { backgroundColor: colors.bgPrimary }]}>
      <StatusBar style={colors.isDark ? 'light' : 'dark'} />

      <View style={[styles.header, { backgroundColor: colors.bgCard, borderBottomColor: colors.border }]}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>Blocked Users</Text>
      </View>

      <BlockedUsersContent
        colors={colors}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filteredUsers={filteredUsers}
        formatBlockedDate={formatBlockedDate}
        handleUnblock={handleUnblock}
      />
    </View>
  );
};

export default BlockedUsersScreen;
