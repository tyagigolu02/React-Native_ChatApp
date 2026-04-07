import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from '../../context/ThemeContext';
import { useScreenTitle } from '../../context/ScreenTitleContext';
import { Ionicons } from '@expo/vector-icons';

const FeedbackScreen = ({ navigation }) => {
  useScreenTitle('TranslaTalk | Feedback');
  const { colors } = useTheme();

  const [feedbackType, setFeedbackType] = useState('general');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const feedbackTypes = [
    { id: 'general', label: 'General Feedback', icon: 'chatbubble-outline' },
    { id: 'bug', label: 'Bug Report', icon: 'bug-outline' },
    { id: 'feature', label: 'Feature Request', icon: 'bulb-outline' },
    { id: 'complaint', label: 'Complaint', icon: 'sad-outline' },
  ];

  const handleSubmit = () => {
    if (!subject.trim() || !message.trim()) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      Alert.alert(
        'Success',
        'Thank you for your feedback! We will review it and get back to you soon.',
        [
          {
            text: 'OK',
            onPress: () => {
              setSubject('');
              setMessage('');
              setEmail('');
              setFeedbackType('general');
              navigation.goBack();
            },
          },
        ]
      );
    }, 1500);
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
          Send Feedback
        </Text>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Introduction */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <Ionicons name="megaphone" size={48} color={colors.primary} style={styles.centerIcon} />
          <Text style={[styles.introTitle, { color: colors.textPrimary }]}>
            We Value Your Feedback
          </Text>
          <Text style={[styles.introText, { color: colors.textSecondary }]}>
            Help us improve TranslaTalk by sharing your thoughts, reporting bugs, or suggesting new features.
          </Text>
        </View>

        {/* Feedback Type */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.label, { color: colors.textPrimary }]}>
            Feedback Type <Text style={styles.required}>*</Text>
          </Text>
          <View style={styles.typeGrid}>
            {feedbackTypes.map((type) => (
              <TouchableOpacity
                key={type.id}
                style={[
                  styles.typeButton,
                  { 
                    backgroundColor: colors.bgSecondary,
                    borderColor: feedbackType === type.id ? colors.primary : colors.border,
                  },
                  feedbackType === type.id && { borderWidth: 2 },
                ]}
                onPress={() => setFeedbackType(type.id)}
              >
                <Ionicons
                  name={type.icon}
                  size={24}
                  color={feedbackType === type.id ? colors.primary : colors.textSecondary}
                />
                <Text
                  style={[
                    styles.typeLabel,
                    { color: feedbackType === type.id ? colors.primary : colors.textPrimary },
                  ]}
                >
                  {type.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Subject */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.label, { color: colors.textPrimary }]}>
            Subject <Text style={styles.required}>*</Text>
          </Text>
          <TextInput
            style={[
              styles.input,
              { 
                backgroundColor: colors.bgSecondary, 
                color: colors.textPrimary,
                borderColor: colors.border,
              },
            ]}
            placeholder="Brief description of your feedback"
            placeholderTextColor={colors.textSecondary}
            value={subject}
            onChangeText={setSubject}
          />
        </View>

        {/* Email */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.label, { color: colors.textPrimary }]}>
            Email (Optional)
          </Text>
          <TextInput
            style={[
              styles.input,
              { 
                backgroundColor: colors.bgSecondary, 
                color: colors.textPrimary,
                borderColor: colors.border,
              },
            ]}
            placeholder="your.email@example.com"
            placeholderTextColor={colors.textSecondary}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Text style={[styles.hint, { color: colors.textSecondary }]}>
            Provide your email if you'd like us to follow up
          </Text>
        </View>

        {/* Message */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.label, { color: colors.textPrimary }]}>
            Message <Text style={styles.required}>*</Text>
          </Text>
          <TextInput
            style={[
              styles.textArea,
              { 
                backgroundColor: colors.bgSecondary, 
                color: colors.textPrimary,
                borderColor: colors.border,
              },
            ]}
            placeholder="Share your feedback in detail..."
            placeholderTextColor={colors.textSecondary}
            value={message}
            onChangeText={setMessage}
            multiline
            numberOfLines={6}
            textAlignVertical="top"
          />
          <Text style={[styles.charCount, { color: colors.textSecondary }]}>
            {message.length} / 1000 characters
          </Text>
        </View>

        {/* Submit Button */}
        <View style={styles.submitSection}>
          <TouchableOpacity
            style={[
              styles.submitButton,
              { backgroundColor: colors.primary },
              isSubmitting && styles.submitButtonDisabled,
            ]}
            onPress={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <>
                <Ionicons name="send" size={20} color="#fff" />
                <Text style={styles.submitButtonText}>Submit Feedback</Text>
              </>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>
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
  section: {
    marginBottom: 12,
    padding: 16,
  },
  centerIcon: {
    alignSelf: 'center',
    marginBottom: 12,
  },
  introTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  introText: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  required: {
    color: '#ef4444',
  },
  typeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  typeButton: {
    width: '47%',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
  },
  typeLabel: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 8,
    textAlign: 'center',
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    fontSize: 14,
    borderWidth: 1,
  },
  hint: {
    fontSize: 11,
    marginTop: 4,
    fontStyle: 'italic',
  },
  textArea: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    fontSize: 14,
    borderWidth: 1,
    minHeight: 120,
  },
  charCount: {
    fontSize: 11,
    marginTop: 4,
    textAlign: 'right',
  },
  submitSection: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  submitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 8,
    gap: 8,
  },
  submitButtonDisabled: {
    opacity: 0.6,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomSpacer: {
    height: 24,
  },
});

export default FeedbackScreen;
