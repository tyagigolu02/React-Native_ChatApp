import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { resendOTP } from './utils/loginApi';
import { OTP_LENGTH, OTP_TIMER_SECONDS } from './utils/loginData';

const OtpForm = ({ email, onVerify, onBack }) => {
  const { colors } = useTheme();
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(OTP_TIMER_SECONDS);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleVerify = async () => {
    if (otp.length !== OTP_LENGTH) {
      Alert.alert('Error', 'Please enter a valid 6-digit OTP');
      return;
    }

    setIsLoading(true);
    try {
      await onVerify(otp);
    } catch (error) {
      Alert.alert('Error', error.message || 'OTP verification failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = async () => {
    setIsLoading(true);
    try {
      await resendOTP(email);
      setTimer(OTP_TIMER_SECONDS);
      setCanResend(false);
      Alert.alert('Success', 'OTP has been resent to your email');
    } catch (error) {
      Alert.alert('Error', error.message || 'Failed to resend OTP');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.textPrimary }]}>Verify OTP</Text>
      <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
        Enter the 6-digit code sent to {email}
      </Text>

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
        placeholder="Enter OTP"
        placeholderTextColor={colors.textSecondary}
        keyboardType="number-pad"
        maxLength={OTP_LENGTH}
      />

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#667eea' }]}
        onPress={handleVerify}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Verify</Text>
        )}
      </TouchableOpacity>

      <View style={styles.resendContainer}>
        {!canResend ? (
          <Text style={[styles.timerText, { color: colors.textSecondary }]}>
            Resend OTP in {timer}s
          </Text>
        ) : (
          <TouchableOpacity onPress={handleResend} disabled={isLoading}>
            <Text style={[styles.resendText, { color: '#667eea' }]}>
              Resend OTP
            </Text>
          </TouchableOpacity>
        )}
      </View>

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
    fontSize: 18,
    letterSpacing: 8,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  resendContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  timerText: {
    fontSize: 14,
  },
  resendText: {
    fontSize: 14,
    fontWeight: '600',
  },
  backButton: {
    alignItems: 'center',
  },
  backText: {
    fontSize: 14,
    fontWeight: '600',
  },
});

export default OtpForm;
