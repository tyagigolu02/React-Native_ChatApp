import React from 'react';
import { ActivityIndicator, Platform, Text, TouchableOpacity, View } from 'react-native';
import styles from './AuthForm.styles';
import { useHoverPress } from '../../hooks/useHoverPress';

const AuthFormActions = ({ isSignup, isLoading, onSubmit, onSwitchView, colors }) => {
  const isWeb = Platform.OS === 'web';
  const submitBtn = useHoverPress();
  const switchBtn = useHoverPress();

  return (
    <>
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: '#667eea' },
          (submitBtn.isPressed || (isWeb && submitBtn.isHovered)) && styles.buttonHover,
        ]}
        onPress={onSubmit}
        disabled={isLoading}
        {...submitBtn.pressProps}
        {...submitBtn.hoverProps}
      >
        {isLoading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>{isSignup ? 'Sign Up' : 'Sign In'}</Text>
        )}
      </TouchableOpacity>

      <View style={styles.switchView}>
        <Text style={[styles.switchText, { color: '#667eea' }]}>
          {isSignup ? 'Already have an account?' : "Don't have an account?"}
        </Text>
        <TouchableOpacity onPress={onSwitchView} {...switchBtn.pressProps} {...switchBtn.hoverProps}>
          <Text
            style={[
              styles.switchLink,
              { color: '#667eea' },
              (switchBtn.isPressed || (isWeb && switchBtn.isHovered)) && styles.switchLinkHover,
            ]}
          >
            {isSignup ? ' Sign In' : ' Sign Up'}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default AuthFormActions;