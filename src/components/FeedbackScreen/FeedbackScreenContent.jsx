import React from 'react';
import { ActivityIndicator, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FeedbackScreenContent = ({
  colors,
  styles,
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
}) => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
        <Ionicons name="megaphone" size={48} color={colors.primary} style={styles.centerIcon} />
        <Text style={[styles.introTitle, { color: colors.textPrimary }]}>We Value Your Feedback</Text>
        <Text style={[styles.introText, { color: colors.textSecondary }]}>Help us improve TranslaTalk by sharing your thoughts, reporting bugs, or suggesting new features.</Text>
      </View>

      <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
        <Text style={[styles.label, { color: colors.textPrimary }]}>Feedback Type <Text style={styles.required}>*</Text></Text>
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
              <Ionicons name={type.icon} size={24} color={feedbackType === type.id ? colors.primary : colors.textSecondary} />
              <Text style={[styles.typeLabel, { color: feedbackType === type.id ? colors.primary : colors.textPrimary }]}>{type.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
        <Text style={[styles.label, { color: colors.textPrimary }]}>Subject <Text style={styles.required}>*</Text></Text>
        <TextInput
          style={[styles.input, { backgroundColor: colors.bgSecondary, color: colors.textPrimary, borderColor: colors.border }]}
          placeholder="Brief description of your feedback"
          placeholderTextColor={colors.textSecondary}
          value={subject}
          onChangeText={setSubject}
        />
      </View>

      <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
        <Text style={[styles.label, { color: colors.textPrimary }]}>Email <Text style={styles.required}>*</Text></Text>
        <TextInput
          style={[styles.input, { backgroundColor: colors.bgSecondary, color: colors.textPrimary, borderColor: colors.border }]}
          placeholder="your.email@example.com"
          placeholderTextColor={colors.textSecondary}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text style={[styles.hint, { color: colors.textSecondary }]}>Provide your email if you&apos;d like us to follow up</Text>
      </View>

      <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
        <Text style={[styles.label, { color: colors.textPrimary }]}>Message <Text style={styles.required}>*</Text></Text>
        <TextInput
          style={[styles.textArea, { backgroundColor: colors.bgSecondary, color: colors.textPrimary, borderColor: colors.border }]}
          placeholder="Share your feedback in detail..."
          placeholderTextColor={colors.textSecondary}
          value={message}
          onChangeText={setMessage}
          multiline
          numberOfLines={6}
          textAlignVertical="top"
        />
        <Text style={[styles.charCount, { color: colors.textSecondary }]}>{message.length} / 1000 characters</Text>
      </View>

      <View style={styles.submitSection}>
        <TouchableOpacity
          style={[styles.submitButton, { backgroundColor: colors.primary }, isSubmitting && styles.submitButtonDisabled]}
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
  );
};

export default FeedbackScreenContent;