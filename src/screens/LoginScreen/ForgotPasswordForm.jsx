import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';
import { requestPasswordReset } from './utils/loginApi';
import PasswordRequirements from './PasswordRequirements';

const ForgotPasswordForm = ({ onSuccess, onBack }) => {
  const { colors } = useTheme();
  const [step, setStep] = useState(1); // 1: email, 2: otp + new password
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleRequestReset = async () => {
    if (!email || !email.includes('@')) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    try {
      await requestPasswordReset(email);
      setStep(2);
      Alert.alert('Success', 'OTP sent to your email');
    } catch (error) {
      Alert.alert('Error', error.message || 'Failed to send reset code');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (!otp || otp.length !== 6) {
      Alert.alert('Error', 'Please enter a valid 6-digit OTP');
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    setIsLoading(true);
    try {
      await onSuccess(email, newPassword, otp);
      Alert.alert('Success', 'Password reset successfully');
    } catch (error) {
      Alert.alert('Error', error.message || 'Failed to reset password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.textPrimary }]}>
        {step === 1 ? 'Forgot Password' : 'Reset Password'}
      </Text>
      <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
        {step === 1
          ? 'Enter your email to receive a reset code'
          : 'Enter the code and your new password'}
      </Text>

      {step === 1 ? (
        <>
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: colors.bgInput,
                color: colors.textPrimary,
                borderColor: colors.border,
              },
            ]}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            placeholderTextColor={colors.textSecondary}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#667eea' }]}
            onPress={handleRequestReset}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Send Reset Code</Text>
            )}
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: colors.bgInput,
                color: colors.textPrimary,
                borderColor: colors.border,
              },
            ]}
            value={otp}
            onChangeText={(text) => setOtp(text.replace(/[^0-9]/g, ''))}
            placeholder="Enter 6-digit OTP"
            placeholderTextColor={colors.textSecondary}
            keyboardType="number-pad"
            maxLength={6}
          />

          <View style={styles.passwordContainer}>
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: colors.bgInput,
                  color: colors.textPrimary,
                  borderColor: colors.border,
                  flex: 1,
                },
              ]}
              value={newPassword}
              onChangeText={setNewPassword}
              placeholder="New Password"
              placeholderTextColor={colors.textSecondary}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Ionicons
                name={showPassword ? 'eye-off' : 'eye'}
                size={24}
                color={colors.textSecondary}
              />
            </TouchableOpacity>
          </View>

          <PasswordRequirements password={newPassword} />

          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: colors.bgInput,
                color: colors.textPrimary,
                borderColor: colors.border,
              },
            ]}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirm New Password"
            placeholderTextColor={colors.textSecondary}
            secureTextEntry={!showPassword}
            autoCapitalize="none"
          />

          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#667eea' }]}
            onPress={handleResetPassword}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Reset Password</Text>
            )}
          </TouchableOpacity>
        </>
      )}

      <TouchableOpacity onPress={onBack} style={styles.backButton}>
        <Text style={[styles.backText, { color: '#667eea' }]}>
          Back to Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 16,
  },
  passwordContainer: {
    position: 'relative',
    width: '100%',
  },
  eyeIcon: {
    position: 'absolute',
    right: 16,
    top: 13,
  },
  button: {
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  backButton: {
    alignItems: 'center',
    marginTop: 8,
  },
  backText: {
    fontSize: 14,
    fontWeight: '600',
  },
});

export default ForgotPasswordForm;
