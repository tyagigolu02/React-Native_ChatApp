import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';

const PasswordRequirements = ({ password }) => {
  const { colors } = useTheme();

  const requirements = [
    { id: 'length', text: 'At least 8 characters', regex: /.{8,}/ },
    { id: 'uppercase', text: 'One uppercase letter', regex: /[A-Z]/ },
    { id: 'lowercase', text: 'One lowercase letter', regex: /[a-z]/ },
    { id: 'number', text: 'One number', regex: /[0-9]/ },
    { id: 'special', text: 'One special character', regex: /[!@#$%^&*(),.?":{}|<>]/ },
  ];

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.textSecondary }]}>
        Password Requirements:
      </Text>
      {requirements.map((req) => {
        const isMet = req.regex.test(password);
        return (
          <View key={req.id} style={styles.requirement}>
            <Ionicons
              name={isMet ? 'checkmark-circle' : 'close-circle'}
              size={18}
              color={isMet ? colors.success : colors.textSecondary}
            />
            <Text
              style={[
                styles.requirementText,
                {
                  color: isMet ? colors.success : colors.textSecondary,
                },
              ]}
            >
              {req.text}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    marginBottom: 8,
  },
  title: {
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 8,
  },
  requirement: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3,
  },
  requirementText: {
    fontSize: 12,
    marginLeft: 8,
  },
});

export default PasswordRequirements;
