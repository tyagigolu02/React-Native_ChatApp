import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from '../../context/ThemeContext';
import { useScreenTitle } from '../../context/ScreenTitleContext';
import { Ionicons } from '@expo/vector-icons';
import styles from './TermsScreen.styles';
import { termsSections } from './termsData';
import PolicyContent from '../../components/PolicyScreen/PolicyContent';

const TermsScreen = ({ navigation }) => {
  useScreenTitle('TranslaTalk | Terms');
  const { colors, isDark } = useTheme();

  const lastUpdated = 'December 4, 2025';

  const contactItems = [
    {
      key: 'email',
      icon: 'mail-outline',
      label: 'Email',
      value: 'syntax.error.adda@gmail.com',
      onPress: () => Linking.openURL('mailto:syntax.error.adda@gmail.com'),
    },
    {
      key: 'feedback',
      icon: 'chatbubble-outline',
      label: 'Send Feedback',
      value: 'Share your thoughts with us',
      onPress: () => navigation.navigate('Feedback'),
    },
  ];

  return (
    <View style={[styles.container, { backgroundColor: colors.bgPrimary }]}>
      <StatusBar style={isDark ? 'light' : 'dark'} />

      <View style={[styles.header, { backgroundColor: colors.bgCard, borderBottomColor: colors.border }]}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>Terms of Service</Text>
      </View>

      <PolicyContent
        styles={styles}
        colors={colors}
        isDark={isDark}
        pageTitle="Terms of Service"
        lastUpdated={lastUpdated}
        sections={termsSections}
        contactTitle="Contact Information"
        contactDescription="If you have any questions about these Terms of Service, please contact us:"
        contactItems={contactItems}
      />
    </View>
  );
};

export default TermsScreen;
