import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function AnimatedBackground() {
  const anim1 = useRef(new Animated.Value(0)).current;
  const anim2 = useRef(new Animated.Value(0)).current;
  const anim3 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loop = (anim, duration, delay) =>
      Animated.loop(
        Animated.sequence([
          Animated.timing(anim, { toValue: 1, duration, delay, useNativeDriver: true }),
          Animated.timing(anim, { toValue: 0, duration, useNativeDriver: true }),
        ])
      ).start();

    loop(anim1, 8000, 0);
    loop(anim2, 10000, 2000);
    loop(anim3, 12000, 4000);
  }, []);

  const blob = (anim, colors, x, y, size) => {
    const opacity = anim.interpolate({ inputRange: [0, 0.5, 1], outputRange: [0.06, 0.13, 0.06] });
    const scale = anim.interpolate({ inputRange: [0, 0.5, 1], outputRange: [1, 1.15, 1] });
    return (
      <Animated.View
        style={[
          styles.blob,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            left: x,
            top: y,
            backgroundColor: colors[0],
            opacity,
            transform: [{ scale }],
          },
        ]}
      />
    );
  };

  return (
    <View style={styles.container} pointerEvents="none">
      {blob(anim1, ['#667eea'], -width * 0.3, -height * 0.15, width * 1.4)}
      {blob(anim2, ['#f093fb'], width * 0.1, height * 0.4, width * 1.2)}
      {blob(anim3, ['#4facfe'], -width * 0.2, height * 0.6, width * 1.1)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
  },
  blob: {
    position: 'absolute',
  },
});
