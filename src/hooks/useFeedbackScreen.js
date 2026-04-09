import { useState } from 'react';
import { Alert } from 'react-native';

const FEEDBACK_TYPES = [
  { id: 'general', label: 'General Feedback', icon: 'chatbubble-outline' },
  { id: 'bug', label: 'Bug Report', icon: 'bug-outline' },
  { id: 'feature', label: 'Feature Request', icon: 'bulb-outline' },
  { id: 'complaint', label: 'Complaint', icon: 'sad-outline' },
];

const useFeedbackScreen = ({ navigation }) => {
  const [feedbackType, setFeedbackType] = useState('general');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    if (!subject.trim() || !message.trim()) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      Alert.alert('Success', 'Thank you for your feedback! We will review it and get back to you soon.', [
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
      ]);
    }, 1500);
  };

  return {
    feedbackType,
    setFeedbackType,
    subject,
    setSubject,
    message,
    setMessage,
    email,
    setEmail,
    isSubmitting,
    feedbackTypes: FEEDBACK_TYPES,
    handleSubmit,
  };
};

export default useFeedbackScreen;