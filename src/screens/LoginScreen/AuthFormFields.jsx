import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PasswordRequirements from './PasswordRequirements';
import styles from './AuthForm.styles';

const AuthFormFields = ({
  isSignup,
  colors,
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
  showPassword,
  setShowPassword,
  showConfirmPassword,
  onForgotPassword,
}) => {
  return (
    <>
      {isSignup && (
        <View style={styles.row}>
          <View style={styles.halfField}>
            <Text style={[styles.label, { color: colors.textSecondary }]}>First Name</Text>
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
            {errors.firstName ? <Text style={[styles.errorText, { color: colors.error }]}>{errors.firstName}</Text> : null}
          </View>

          <View style={styles.halfField}>
            <Text style={[styles.label, { color: colors.textSecondary }]}>Last Name</Text>
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
            {errors.lastName ? <Text style={[styles.errorText, { color: colors.error }]}>{errors.lastName}</Text> : null}
          </View>
        </View>
      )}

      <View>
        <Text style={[styles.label, { color: colors.textSecondary }]}>Email Address</Text>
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
        {errors.email ? <Text style={[styles.errorText, { color: colors.error }]}>{errors.email}</Text> : null}
      </View>

      <View>
        <View style={styles.labelRow}>
          <Text style={[styles.label, { color: colors.textSecondary }]}>Password</Text>
          {!isSignup ? (
            <TouchableOpacity onPress={onForgotPassword}>
              <Text style={[styles.forgotText, { color: '#667eea' }]}>Forgot Password?</Text>
            </TouchableOpacity>
          ) : null}
        </View>

        {isSignup ? (
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
                        borderColor: errors.confirmPassword ? colors.error : colors.border,
                      },
                    ]}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    placeholder="Confirm Password"
                    placeholderTextColor={colors.textSecondary}
                    secureTextEntry={!showConfirmPassword}
                    autoCapitalize="none"
                  />
                  {confirmPassword.length > 0 ? (
                    <View style={styles.checkIcon}>
                      <Ionicons
                        name={password === confirmPassword ? 'checkmark-circle' : 'close-circle'}
                        size={20}
                        color={password === confirmPassword ? colors.success : colors.error}
                      />
                    </View>
                  ) : null}
                </View>
              </View>
            </View>
            <PasswordRequirements password={password} />
          </>
        ) : (
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
            <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowPassword((previous) => !previous)}>
              <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color={colors.textSecondary} />
            </TouchableOpacity>
          </View>
        )}
        {errors.password ? <Text style={[styles.errorText, { color: colors.error }]}>{errors.password}</Text> : null}
      </View>
    </>
  );
};

export default AuthFormFields;