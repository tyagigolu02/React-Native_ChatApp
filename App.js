import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from './src/context/ThemeContext';
import { AuthProvider } from './src/context/AuthContext';
import { ScreenTitleProvider, useGetScreenTitle } from './src/context/ScreenTitleContext';
import AppNavigator from './src/navigation/AppNavigator';

function AppContent() {
  const screenTitle = useGetScreenTitle();

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = screenTitle;
    }
  }, [screenTitle]);

  return <AppNavigator />;
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ThemeProvider>
          <AuthProvider>
            <ScreenTitleProvider>
              <AppContent />
            </ScreenTitleProvider>
          </AuthProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
