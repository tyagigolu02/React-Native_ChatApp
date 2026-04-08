import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';
import { useHoverPress } from '../../hooks/useHoverPress';
import PasswordRequirements from './PasswordRequirements';
import { useLoginForm } from './utils/useLoginForm';

const AuthForm = ({ isSignup, onSubmit, onSwitchView, onForgotPassword }) => {
  const { colors } = useTheme();
  const isWeb = Platform.OS === 'web';
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const submitBtn = useHoverPress();
  const switchBtn = useHoverPress();

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
      <Text style={[styles.title, { color: colors.textPrimary }]}>
        {isSignup ? 'Join TranslaTalk' : 'Welcome Back'}
      </Text>
      <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
        {isSignup
          ? 'Create your account and start connecting'
          : 'Sign in to continue your conversations'}
      </Text>

      {/* First Name & Last Name (Sign Up only) */}
      {isSignup && (
        <View style={styles.row}>
          <View style={styles.halfField}>
            <Text style={[styles.label, { color: colors.textSecondary }]}>
              First Name
            </Text>
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: colors.bgInput,
                  color: colors.textPrimary,
                  borderColor: errors.firstName ? colors.error : colors.border,
                },
              ]}
              value={firstName}
              onChangeText={setFirstName}
              placeholder="First Name"
              placeholderTextColor={colors.textSecondary}
              autoCapitalize="words"
            />
            {errors.firstName && (
              <Text style={[styles.errorText, { color: colors.error }]}>
                {errors.firstName}
              </Text>
            )}
          </View>

          <View style={styles.halfField}>
            <Text style={[styles.label, { color: colors.textSecondary }]}>
              Last Name
            </Text>
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: colors.bgInput,
                  color: colors.textPrimary,
                  borderColor: errors.lastName ? colors.error : colors.border,
                },
              ]}
              value={lastName}
              onChangeText={setLastName}
              placeholder="Last Name"
              placeholderTextColor={colors.textSecondary}
              autoCapitalize="words"
            />
            {errors.lastName && (
              <Text style={[styles.errorText, { color: colors.error }]}>
                {errors.lastName}
              </Text>
            )}
          </View>
        </View>
      )}

      {/* Email */}
      <View>
        <Text style={[styles.label, { color: colors.textSecondary }]}>
          Email Address
        </Text>
        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: colors.bgInput,
              color: colors.textPrimary,
              borderColor: errors.email ? colors.error : colors.border,
            },
          ]}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor={colors.textSecondary}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {errors.email && (
          <Text style={[styles.errorText, { color: colors.error }]}>
            {errors.email}
          </Text>
        )}
      </View>

      {/* Password */}
      <View>
        <View style={styles.labelRow}>
          <Text style={[styles.label, { color: colors.textSecondary }]}>
            Password
          </Text>
          {!isSignup && (
            <TouchableOpacity onPress={onForgotPassword}>
              <Text style={[styles.forgotText, { color: '#667eea' }]}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          )}
        </View>

        {isSignup ? (
          // Sign Up: Two columns for password and confirm password
          <>
            <View style={styles.row}>
              <View style={styles.halfField}>
                <TextInput
                  style={[
                    styles.input,
                    {
                      backgroundColor: colors.bgInput,
                      color: colors.textPrimary,
                      borderColor: errors.password ? colors.error : colors.border,
                    },
                  ]}
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Password"
                  placeholderTextColor={colors.textSecondary}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                />
              </View>

              <View style={styles.halfField}>
                <View style={styles.confirmPasswordContainer}>
                  <TextInput
                    style={[
                      styles.input,
                      {
                        backgroundColor: colors.bgInput,
                        color: colors.textPrimary,
                        borderColor: errors.confirmPassword
                          ? colors.error
                          : colors.border,
                      },
                    ]}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    placeholder="Confirm Password"
                    placeholderTextColor={colors.textSecondary}
                    secureTextEntry={!showConfirmPassword}
                    autoCapitalize="none"
                  />
                  {confirmPassword.length > 0 && (
                    <View style={styles.checkIcon}>
                      <Ionicons
                        name={
                          password === confirmPassword
                            ? 'checkmark-circle'
                            : 'close-circle'
                        }
                        size={20}
                        color={
                          password === confirmPassword
                            ? colors.success
                            : colors.error
                        }
                      />
                    </View>
                  )}
                </View>
              </View>
            </View>
            <PasswordRequirements password={password} />
          </>
        ) : (
          // Login: Single password field with eye icon
          <View style={styles.passwordContainer}>
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: colors.bgInput,
                  color: colors.textPrimary,
                  borderColor: errors.password ? colors.error : colors.border,
                },
              ]}
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
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
        )}
        {errors.password && (
          <Text style={[styles.errorText, { color: colors.error }]}>
            {errors.password}
          </Text>
        )}
      </View>

      {/* Submit Button */}
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: '#667eea' },
          (submitBtn.isPressed || (isWeb && submitBtn.isHovered)) && styles.buttonHover,
        ]}
        onPress={handleSubmit}
        disabled={isLoading}
        {...submitBtn.pressProps}
        {...submitBtn.hoverProps}
      >
        {isLoading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Text>
        )}
      </TouchableOpacity>

      {/* Switch View */}
      <View style={styles.switchView}>
        <Text style={[styles.switchText, { color: colors.textSecondary }]}>
          {isSignup ? 'Already have an account?' : "Don't have an account?"}
        </Text>
        <TouchableOpacity
          onPress={onSwitchView}
          {...switchBtn.pressProps}
          {...switchBtn.hoverProps}
        >
          <Text style={[
            styles.switchLink,
            { color: '#667eea' },
            (switchBtn.isPressed || (isWeb && switchBtn.isHovered)) && styles.switchLinkHover,
          ]}>
            {isSignup ? ' Sign In' : ' Sign Up'}
          </Text>
        </TouchableOpacity>
      </View>
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
    marginBottom: 4,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  halfField: {
    flex: 1,
  },
  label: {
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 6,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 14,
    fontSize: 15,
    marginBottom: 2,
  },
  passwordContainer: {
    position: 'relative',
    width: '100%',
  },
  confirmPasswordContainer: {
    position: 'relative',
    width: '100%',
  },
  eyeIcon: {
    position: 'absolute',
    right: 16,
    top: 13,
  },
  checkIcon: {
    position: 'absolute',
    right: 16,
    top: 15,
  },
  errorText: {
    fontSize: 12,
    marginBottom: 8,
    marginLeft: 4,
  },
  forgotText: {
    fontSize: 12,
    fontWeight: '600',
  },
  button: {
    height: 48,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 12,
  },
  buttonHover: {
    opacity: 0.85,
    transform: [{ scale: 1.02 }],
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
  switchView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
  },
  switchText: {
    fontSize: 13,
  },
  switchLink: {
    fontSize: 13,
    fontWeight: '600',
  },
  switchLinkHover: {
    opacity: 0.7,
    textDecorationLine: 'underline',
  },
});

export default AuthForm;
