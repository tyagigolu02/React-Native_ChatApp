import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from '../../context/ThemeContext';
import { useScreenTitle } from '../../context/ScreenTitleContext';
import { Ionicons } from '@expo/vector-icons';
import styles from './FeedbackScreen.styles';
import useFeedbackScreen from '../../hooks/useFeedbackScreen';
import FeedbackScreenContent from '../../components/FeedbackScreen/FeedbackScreenContent';

const FeedbackScreen = ({ navigation }) => {
  useScreenTitle('TranslaTalk | Feedback');
  const { colors } = useTheme();
  const {
    feedbackType,
    setFeedbackType,
    subject,
    setSubject,
    message,
    setMessage,
    email,
    setEmail,
    isSubmitting,
    feedbackTypes,
    handleSubmit,
  } = useFeedbackScreen({ navigation });

  return (
    <View style={[styles.container, { backgroundColor: colors.bgPrimary }]}>
      <StatusBar style={colors.isDark ? 'light' : 'dark'} />

      <View style={[styles.header, { backgroundColor: colors.bgCard, borderBottomColor: colors.border }]}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>Send Feedback</Text>
      </View>

      <FeedbackScreenContent
        colors={colors}
        styles={styles}
        feedbackType={feedbackType}
        setFeedbackType={setFeedbackType}
        subject={subject}
        setSubject={setSubject}
        message={message}
        setMessage={setMessage}
        email={email}
        setEmail={setEmail}
        isSubmitting={isSubmitting}
        feedbackTypes={feedbackTypes}
        handleSubmit={handleSubmit}
      />
    </View>
  );
};

export default FeedbackScreen;
