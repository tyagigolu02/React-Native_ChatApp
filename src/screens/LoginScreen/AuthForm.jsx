import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { useLoginForm } from './utils/useLoginForm';
import styles from './AuthForm.styles';
import AuthFormFields from './AuthFormFields';
import AuthFormActions from './AuthFormActions';

const AuthForm = ({ isSignup, onSubmit, onSwitchView, onForgotPassword }) => {
  const { colors } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    errors,
    isLoading,
    setIsLoading,
    validateForm,
  } = useLoginForm();

  const handleSubmit = async () => {
    if (!validateForm(isSignup)) {
      return;
    }

    setIsLoading(true);
    try {
      await onSubmit({ email, password, firstName, lastName });
    } catch (error) {
      Alert.alert('Error', error.message || 'Authentication failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.textPrimary }]}>{isSignup ? 'Join TranslaTalk' : 'Welcome Back'}</Text>
      <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
        {isSignup ? 'Create your account and start connecting' : 'Sign in to continue your conversations'}
      </Text>

      <AuthFormFields
        isSignup={isSignup}
        colors={colors}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        errors={errors}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        showConfirmPassword={showConfirmPassword}
        setShowConfirmPassword={setShowConfirmPassword}
        onForgotPassword={onForgotPassword}
      />

      <AuthFormActions
        isSignup={isSignup}
        isLoading={isLoading}
        onSubmit={handleSubmit}
        onSwitchView={onSwitchView}
        colors={colors}
      />
    </View>
  );
};

export default AuthForm;
