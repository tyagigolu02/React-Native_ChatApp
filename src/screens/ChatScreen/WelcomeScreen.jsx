import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';

const WelcomeScreen = () => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.bgSecondary }]}>
      <Ionicons name="chatbubbles-outline" size={80} color={colors.textSecondary} />
      <Text style={[styles.title, { color: colors.textPrimary }]}>
        Welcome to TranslaTalk
      </Text>
      <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
        Select a chat to start messaging
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default WelcomeScreen;
