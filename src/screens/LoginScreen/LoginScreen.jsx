import React, { useState } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Alert,
  useWindowDimensions,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from '../../context/ThemeContext';
import { useScreenTitle } from '../../context/ScreenTitleContext';
import { useAuth } from '../../context/AuthContext';
import ThemeToggle from '../../components/ThemeToggle';
import ViewSwitcher from './ViewSwitcher';
import AuthForm from './AuthForm';
import OtpForm from './OtpForm';
import ForgotPasswordForm from './ForgotPasswordForm';
import AuthSidebar from './AuthSidebar';
import { VIEW_TYPES } from './utils/loginData';
import {
  loginUser,
  signupUser,
  verifyOTP,
  resetPassword,
} from './utils/loginApi';

const LoginScreen = ({ navigation }) => {
  useScreenTitle('TranslaTalk | Login');
  const { colors } = useTheme();
  const { login } = useAuth();
  const { width } = useWindowDimensions();
  const [currentView, setCurrentView] = useState(VIEW_TYPES.LOGIN);
  const [pendingEmail, setPendingEmail] = useState('');

  const showSidebar = width >= 768;

  const handleLogin = async ({ email, password }) => {
    try {
      const response = await loginUser(email, password);
      
      if (response.requiresOTP) {
        setPendingEmail(email);
        setCurrentView(VIEW_TYPES.OTP);
        Alert.alert('OTP Sent', 'Please check your email for the verification code');
        return;
      }

      await login(response.token, response.user);
      Alert.alert('Success', 'Login successful!');
    } catch (error) {
      throw error;
    }
  };

  const handleSignup = async ({ email, password, firstName, lastName }) => {
    try {
      const response = await signupUser(email, password, `${firstName} ${lastName}`);
      
      setPendingEmail(email);
      setCurrentView(VIEW_TYPES.OTP);
      Alert.alert('OTP Sent', 'Please check your email to verify your account');
    } catch (error) {
      throw error;
    }
  };

  const handleVerifyOTP = async (otp) => {
    try {
      const response = await verifyOTP(pendingEmail, otp);
      await login(response.token, response.user);
      Alert.alert('Success', 'Account verified successfully!');
    } catch (error) {
      throw error;
    }
  };

  const handleResetPassword = async (email, newPassword, otp) => {
    try {
      await resetPassword(email, newPassword, otp);
      setCurrentView(VIEW_TYPES.LOGIN);
    } catch (error) {
      throw error;
    }
  };

  const handleSwitchView = () => {
    setCurrentView(
      currentView === VIEW_TYPES.LOGIN ? VIEW_TYPES.SIGNUP : VIEW_TYPES.LOGIN
    );
  };

  const handleForgotPassword = () => {
    setCurrentView(VIEW_TYPES.FORGOT_PASSWORD);
  };

  const handleBackToLogin = () => {
    setCurrentView(VIEW_TYPES.LOGIN);
    setPendingEmail('');
  };

  const renderView = () => {
    switch (currentView) {
      case VIEW_TYPES.LOGIN:
        return (
          <AuthForm
            isSignup={false}
            onSubmit={handleLogin}
            onSwitchView={handleSwitchView}
            onForgotPassword={handleForgotPassword}
          />
        );
      case VIEW_TYPES.SIGNUP:
        return (
          <AuthForm
            isSignup={true}
            onSubmit={handleSignup}
            onSwitchView={handleSwitchView}
          />
        );
      case VIEW_TYPES.OTP:
        return (
          <OtpForm
            email={pendingEmail}
            onVerify={handleVerifyOTP}
            onBack={handleBackToLogin}
          />
        );
      case VIEW_TYPES.FORGOT_PASSWORD:
        return (
          <ForgotPasswordForm
            onSuccess={handleResetPassword}
            onBack={handleBackToLogin}
          />
        );
      default:
        return null;
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.bgSecondary }]}>
      <StatusBar style={colors.isDark ? 'light' : 'dark'} />
      <View style={styles.mainContainer}>
        {showSidebar && (
          <AuthSidebar isSignup={currentView === VIEW_TYPES.SIGNUP} />
        )}

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={[styles.keyboardView, showSidebar && styles.formHalf]}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.formContainer}>
              <View style={styles.themeToggleContainer}>
                <ThemeToggle />
              </View>

              <ViewSwitcher
                currentView={currentView}
                onViewChange={setCurrentView}
              />
              {renderView()}
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  keyboardView: {
    flex: 1,
  },
  formHalf: {
    width: '50%',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  formContainer: {
    maxWidth: 450,
    width: '100%',
    alignSelf: 'center',
  },
  themeToggleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 16,
  },
});

export default LoginScreen;
