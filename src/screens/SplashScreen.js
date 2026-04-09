import React from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LottieView from 'lottie-react-native';

const SplashScreen = ({ titleFontFamily, subtitleFontFamily }) => {
  const { width, height } = useWindowDimensions();
  const animationSize = Math.min(width * 0.62, height * 0.34, 280);

  return (
    <LinearGradient
      colors={['#000000', '#1A1A1A']}
      start={{ x: 0.1, y: 0 }}
      end={{ x: 0.9, y: 1 }}
      style={styles.container}
    >
      <View style={styles.animationWrap}>
        <LottieView
          source={require('../assets/animation.json')}
          autoPlay
          loop
          style={[styles.animation, { width: animationSize, height: animationSize }]}
        />
      </View>

      <View style={styles.brandingWrap}>
        <Text style={[styles.brandText, titleFontFamily ? { fontFamily: titleFontFamily } : null]}>
          TranslaTalk
        </Text>
        <Text style={[styles.subText, subtitleFontFamily ? { fontFamily: subtitleFontFamily } : null]}>
          Powered by AI
        </Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  animationWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animation: {
    alignSelf: 'center',
  },
  brandingWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 58,
    paddingHorizontal: 24,
  },
  brandText: {
    color: '#F5F5F5',
    fontSize: 34,
    fontWeight: '700',
    letterSpacing: 5.5,
    textTransform: 'none',
  },
  subText: {
    marginTop: 12,
    color: '#767676',
    fontSize: 13,
    letterSpacing: 2.6,
    fontWeight: '500',
  },
});

export default SplashScreen;
