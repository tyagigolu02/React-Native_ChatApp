import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';

const PasswordRequirements = ({ password }) => {
  const { colors, isDark } = useTheme();

  const requirements = [
    { id: 'length', text: 'At least 8 characters', regex: /.{8,}/ },
    { id: 'uppercase', text: 'One uppercase letter', regex: /[A-Z]/ },
    { id: 'lowercase', text: 'One lowercase letter', regex: /[a-z]/ },
    { id: 'number', text: 'One number', regex: /[0-9]/ },
    { id: 'special', text: 'One special character', regex: /[!@#$%^&*(),.?":{}|<>]/ },
  ];

  // Split requirements into two columns (3 left, 2 right)
  const leftColumn = requirements.slice(0, 3);
  const rightColumn = requirements.slice(3);

  const renderRequirement = (req) => {
    const isMet = req.regex.test(password);
    return (
      <View key={req.id} style={styles.requirement}>
        <View style={[
          styles.badgeCircle,
          {
            backgroundColor: isMet ? '#10b981' : (isDark ? '#1f2937' : '#f3f4f6'),
            borderColor: isMet ? '#10b981' : (isDark ? '#4b5563' : '#d1d5db'),
          }
        ]}>
          {isMet && (
            <Ionicons
              name="checkmark"
              size={10}
              color="#fff"
              style={{ fontWeight: 'bold' }}
            />
          )}
        </View>
        <Text
          style={[
            styles.requirementText,
            {
              color: isMet ? '#059669' : (isDark ? '#9ca3af' : '#6b7280'),
              fontWeight: isMet ? '500' : '400',
            },
          ]}
        >
          {req.text}
        </Text>
      </View>
    );
  };

  return (
    <View style={[
      styles.container,
      {
        backgroundColor: isDark ? 'rgba(55,65,81,0.5)' : '#f9fafb',
        borderColor: isDark ? '#374151' : '#f3f4f6',
      }
    ]}>
      <Text style={[styles.title, { color: isDark ? '#9ca3af' : '#6b7280' }]}>
        Password Requirements
      </Text>
      <View style={styles.columnsContainer}>
        <View style={styles.column}>
          {leftColumn.map(renderRequirement)}
        </View>
        <View style={styles.column}>
          {rightColumn.map(renderRequirement)}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 8,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
    borderWidth: 1,
  },
  title: {
    fontSize: 11,
    fontWeight: '600',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.3,
  },
  columnsContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  column: {
    flex: 1,
  },
  requirement: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
    gap: 6,
  },
  badgeCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },
  requirementText: {
    fontSize: 11,
    flex: 1,
  },
});

export default PasswordRequirements;
