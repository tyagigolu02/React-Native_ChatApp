import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';
import { useScreenTitle } from '../../context/ScreenTitleContext';
import useHelpScreen from '../../hooks/useHelpScreen';
import styles from './HelpScreen.styles';
import HelpContent from '../../components/HelpScreen/HelpContent';

const HelpScreen = ({ navigation }) => {
  useScreenTitle('TranslaTalk | Help');
  const { colors, isDark } = useTheme();

  const { faqs, resources, getIconColor, handleContactSupport, handleAbout } = useHelpScreen({ navigation });

  return (
    <View style={[styles.container, { backgroundColor: colors.bgPrimary }]}>
      <StatusBar style={isDark ? 'light' : 'dark'} />

      <View style={[styles.header, { backgroundColor: colors.bgCard, borderBottomColor: colors.border }]}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>Help Center</Text>
      </View>

      <ScrollView style={styles.scrollView} scrollEnabled nestedScrollEnabled showsVerticalScrollIndicator={false}>
        <HelpContent
          colors={colors}
          isDark={isDark}
          faqs={faqs}
          resources={resources}
          getIconColor={getIconColor}
          handleContactSupport={handleContactSupport}
          handleAbout={handleAbout}
        />
      </ScrollView>
    </View>
  );
};

export default HelpScreen;
