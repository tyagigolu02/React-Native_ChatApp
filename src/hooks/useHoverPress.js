import { useState } from 'react';
import { Platform } from 'react-native';

export function useHoverPress() {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const isWeb = Platform.OS === 'web';

  return {
    isHovered: isWeb ? isHovered : false,
    isPressed,
    hoverProps: isWeb ? {
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
    } : {},
    pressProps: {
      onPressIn: () => setIsPressed(true),
      onPressOut: () => setIsPressed(false),
    },
  };
}
