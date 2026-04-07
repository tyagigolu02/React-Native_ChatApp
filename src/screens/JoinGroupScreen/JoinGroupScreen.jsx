import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from '../../context/ThemeContext';
import { useScreenTitle } from '../../context/ScreenTitleContext';
import { Ionicons } from '@expo/vector-icons';

const JoinGroupScreen = ({ route, navigation }) => {
  useScreenTitle('TranslaTalk | Join Group');
  const { colors } = useTheme();
  const { inviteCode } = route.params || {};

  const [status, setStatus] = useState('joining'); // 'joining' | 'success' | 'error'
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Simulate joining group
    const joinGroup = async () => {
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Mock success/error based on invite code
        if (inviteCode && inviteCode.length > 0) {
          setStatus('success');
          setMessage('You have successfully joined the group!');
          
          // Auto-redirect after 2 seconds
          setTimeout(() => {
            navigation.replace('Chat');
          }, 2000);
        } else {
          setStatus('error');
          setMessage('Invalid or expired invite link');
        }
      } catch (error) {
        setStatus('error');
        setMessage('Failed to join group. Please try again.');
      }
    };

    joinGroup();
  }, [inviteCode, navigation]);

  const handleGoHome = () => {
    navigation.replace('Chat');
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.bgPrimary }]}>
      <StatusBar style={colors.isDark ? 'light' : 'dark'} />

      <View style={styles.content}>
        <View style={[styles.card, { backgroundColor: colors.bgCard }]}>
          {status === 'joining' && (
            <>
              <ActivityIndicator size="large" color={colors.primary} />
              <Text style={[styles.title, { color: colors.textPrimary }]}>
                Joining Group...
              </Text>
              <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
                Please wait while we process your request
              </Text>
            </>
          )}

          {status === 'success' && (
            <>
              <View style={[styles.iconCircle, { backgroundColor: '#10b981' }]}>
                <Ionicons name="checkmark" size={48} color="#fff" />
              </View>
              <Text style={[styles.title, { color: colors.textPrimary }]}>
                Success!
              </Text>
              <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
                {message}
              </Text>
              <Text style={[styles.redirectText, { color: colors.textSecondary }]}>
                Redirecting to chat...
              </Text>
            </>
          )}

          {status === 'error' && (
            <>
              <View style={[styles.iconCircle, { backgroundColor: '#ef4444' }]}>
                <Ionicons name="close" size={48} color="#fff" />
              </View>
              <Text style={[styles.title, { color: colors.textPrimary }]}>
                Error
              </Text>
              <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
                {message}
              </Text>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: colors.primary }]}
                onPress={handleGoHome}
              >
                <Text style={styles.buttonText}>Go to Home</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  iconCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
    lineHeight: 20,
  },
  redirectText: {
    fontSize: 12,
    marginTop: 16,
    fontStyle: 'italic',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginTop: 24,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default JoinGroupScreen;
