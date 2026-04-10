import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from './src/context/ThemeContext';
import { AuthProvider } from './src/context/AuthContext';
import { ScreenTitleProvider, useGetScreenTitle } from './src/context/ScreenTitleContext';
import AppNavigator from './src/navigation/AppNavigator';
import API_URL from './src/constants/Config';

const STARTUP_TIMEOUT_MS = 3500;

const wait = (ms) => new Promise((resolve) => {
  setTimeout(resolve, ms);
});

const withTimeout = (promise, timeoutMs = STARTUP_TIMEOUT_MS) =>
  Promise.race([promise, wait(timeoutMs)]);

const prefetchEssentialData = async () => {
  if (typeof window !== 'undefined') {
    // Skip backend prefetch on web to avoid localhost:8001 connection issues
    return;
  }

  const warmupRequests = [
    fetch(`${API_URL}/`, { method: 'GET' }),
    fetch(`${API_URL}/chat/profile/get/`, { method: 'GET' }),
  ];

  try {
    await withTimeout(Promise.allSettled(warmupRequests), STARTUP_TIMEOUT_MS);
  } catch (error) {
    console.warn('Backend prefetch failed.', error);
  }
};

function AppContent() {
  const screenTitle = useGetScreenTitle();

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = screenTitle;
    }
  }, [screenTitle]);

  return <AppNavigator />;
}

function AppProviders() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AuthProvider>
          <ScreenTitleProvider>
            <AppContent />
          </ScreenTitleProvider>
        </AuthProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default function App() {
  useEffect(() => {
    void prefetchEssentialData();
  }, []);

  return (
    <GestureHandlerRootView style={styles.root}>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <AppProviders />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
