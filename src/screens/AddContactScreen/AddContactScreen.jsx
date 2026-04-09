import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';
import { useScreenTitle } from '../../context/ScreenTitleContext';
import useAddContactScreen from '../../hooks/useAddContactScreen';
import styles from './AddContactScreen.styles';
import AddContactContent from '../../components/AddContactScreen/AddContactContent';

const AddContactScreen = ({ navigation }) => {
  useScreenTitle('TranslaTalk | Add Contact');
  const { colors } = useTheme();

  const { searchQuery, setSearchQuery, isSearching, searchResults, handleSearch, sendFriendRequest } = useAddContactScreen();

  return (
    <View style={[styles.container, { backgroundColor: colors.bgPrimary }]}>
      <StatusBar style={colors.isDark ? 'light' : 'dark'} />

      <View style={[styles.header, { backgroundColor: colors.bgCard }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>Add Contact</Text>
        <View style={{ width: 40 }} />
      </View>

      <AddContactContent
        colors={colors}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isSearching={isSearching}
        searchResults={searchResults}
        handleSearch={handleSearch}
        sendFriendRequest={sendFriendRequest}
      />
    </View>
  );
};

export default AddContactScreen;
