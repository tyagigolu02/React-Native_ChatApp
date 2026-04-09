import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, Easing, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Asset } from 'expo-asset';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import * as ExpoSplashScreen from 'expo-splash-screen';
import * as Haptics from 'expo-haptics';
import { ThemeProvider } from './src/context/ThemeContext';
import { AuthProvider } from './src/context/AuthContext';
import { ScreenTitleProvider, useGetScreenTitle } from './src/context/ScreenTitleContext';
import AppNavigator from './src/navigation/AppNavigator';
import API_URL from './src/constants/Config';
import SplashScreen from './src/screens/SplashScreen';

void ExpoSplashScreen.preventAutoHideAsync();

const TITLE_FONT_FAMILY = 'SpaceGroteskSemiBold';
const SUBTITLE_FONT_FAMILY = 'InterMedium';
const STARTUP_TIMEOUT_MS = 3500;

const wait = (ms) => new Promise((resolve) => {
  setTimeout(resolve, ms);
});

const withTimeout = (promise, timeoutMs = STARTUP_TIMEOUT_MS) =>
  Promise.race([promise, wait(timeoutMs)]);

const loadCustomFonts = async () => {
  try {
    await Font.loadAsync({
      [TITLE_FONT_FAMILY]:
        'https://raw.githubusercontent.com/google/fonts/main/ofl/spacegrotesk/SpaceGrotesk-SemiBold.ttf',
      [SUBTITLE_FONT_FAMILY]:
        'https://raw.githubusercontent.com/google/fonts/main/ofl/inter/Inter_18pt-Medium.ttf',
    });
    return true;
  } catch (error) {
    console.warn('Custom font loading failed. Falling back to system fonts.', error);
    return false;
  }
};

const preloadAssets = async () => {
  try {
    await Asset.loadAsync([require('./src/assets/animation.json')]);
  } catch (error) {
    console.warn('Startup asset preloading failed.', error);
  }
};

const prefetchEssentialData = async () => {
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
  const [appIsReady, setAppIsReady] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [useCustomFonts, setUseCustomFonts] = useState(false);

  const appOpacity = useRef(new Animated.Value(0)).current;
  const splashOpacity = useRef(new Animated.Value(1)).current;
  const splashScale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    let isMounted = true;

    const prepare = async () => {
      const [fontTask] = await Promise.allSettled([
        loadCustomFonts(),
        preloadAssets(),
        prefetchEssentialData(),
      ]);

      if (!isMounted) {
        return;
      }

      if (fontTask.status === 'fulfilled' && fontTask.value) {
        setUseCustomFonts(true);
      }

      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
      setAppIsReady(true);
    };

    prepare();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!appIsReady) {
      return;
    }

    Animated.parallel([
      Animated.timing(appOpacity, {
        toValue: 1,
        duration: 520,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(splashOpacity, {
        toValue: 0,
        duration: 420,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(splashScale, {
        toValue: 0.96,
        duration: 420,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
    ]).start(({ finished }) => {
      if (finished) {
        setShowSplash(false);
      }
    });
  }, [appIsReady, appOpacity, splashOpacity, splashScale]);

  const onLayoutRootView = useCallback(() => {
    ExpoSplashScreen.hideAsync().catch(() => {});
  }, []);

  return (
    <GestureHandlerRootView style={styles.root} onLayout={onLayoutRootView}>
      <StatusBar hidden={showSplash} translucent backgroundColor="transparent" style="light" />

      <Animated.View style={[styles.appContainer, { opacity: appOpacity }]}>
        <AppProviders />
      </Animated.View>

      {showSplash ? (
        <Animated.View
          style={[
            styles.splashOverlay,
            {
              opacity: splashOpacity,
              transform: [{ scale: splashScale }],
            },
          ]}
        >
          <SplashScreen
            titleFontFamily={useCustomFonts ? TITLE_FONT_FAMILY : undefined}
            subtitleFontFamily={useCustomFonts ? SUBTITLE_FONT_FAMILY : undefined}
          />
        </Animated.View>
      ) : null}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  appContainer: {
    flex: 1,
  },
  splashOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 20,
  },
});
