import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { VIEW_TYPES } from './utils/loginData';

const ViewSwitcher = ({ currentView, onViewChange }) => {
  const { colors, isDark } = useTheme();

  const tabs = [
    { id: VIEW_TYPES.LOGIN, label: 'Sign In' },
    { id: VIEW_TYPES.SIGNUP, label: 'Sign Up' },
  ];

  // Don't show switcher for OTP and Forgot Password views
  if (
    currentView === VIEW_TYPES.OTP ||
    currentView === VIEW_TYPES.FORGOT_PASSWORD
  ) {
    return null;
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.bgInput }]}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.id}
          style={[
            styles.tab,
            currentView === tab.id && {
              backgroundColor: isDark ? colors.bgCard : '#fff',
              ...styles.activeTab,
            },
          ]}
          onPress={() => onViewChange(tab.id)}
        >
          <Text
            style={[
              styles.tabText,
              {
                color:
                  currentView === tab.id ? colors.textPrimary : colors.textSecondary,
              },
            ]}
          >
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 10,
    padding: 4,
    marginBottom: 24,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  activeTab: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  tabText: {
    fontSize: 15,
    fontWeight: '500',
  },
});

export default ViewSwitcher;
