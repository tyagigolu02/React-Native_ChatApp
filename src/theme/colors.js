// TranslaTalk color palette — mirrors the web CSS variables
// Primary: purple gradient #667eea → #764ba2

export const COLORS = {
  // Primary brand palette
  primary: {
    400: '#7c93f0',
    500: '#667eea',
    600: '#764ba2',
    700: '#5a3d8c',
  },

  // Gradients (for LinearGradient component)
  gradients: {
    primary: ['#667eea', '#764ba2'],
    secondary: ['#f093fb', '#f5576c'],
    accent: ['#4facfe', '#00f2fe'],
    dark: ['#0f0f23', '#1a1a2e'],
  },

  // Light theme
  light: {
    bgPrimary: '#ffffff',
    bgSecondary: '#f8fafc',
    bgTertiary: '#e2e8f0',
    bgCard: '#ffffff',
    bgInput: '#ffffff',
    bgGlass: 'rgba(255,255,255,0.25)',
    textPrimary: '#1a202c',
    textSecondary: '#4a5568',
    textMuted: '#718096',
    border: 'rgba(0,0,0,0.08)',
    borderLight: '#e2e8f0',
    shadow: 'rgba(31,38,135,0.15)',
    overlay: 'rgba(0,0,0,0.5)',
    success: '#48bb78',
    error: '#f56565',
    warning: '#ed8936',
    info: '#4299e1',
    white: '#ffffff',
    black: '#000000',
    gray50: '#f9fafb',
    gray100: '#f3f4f6',
    gray200: '#e5e7eb',
    gray300: '#d1d5db',
    gray400: '#9ca3af',
    gray500: '#6b7280',
    gray600: '#4b5563',
    gray700: '#374151',
    gray800: '#1f2937',
    gray900: '#111827',
    green400: '#4ade80',
    green500: '#22c55e',
    green600: '#16a34a',
    red400: '#f87171',
    red500: '#ef4444',
  },

  // Dark theme
  dark: {
    bgPrimary: '#0f0f23',
    bgSecondary: '#1a1a2e',
    bgTertiary: '#16213e',
    bgCard: '#1a1a2e',
    bgInput: '#16213e',
    bgGlass: 'rgba(255,255,255,0.1)',
    textPrimary: '#ffffff',
    textSecondary: '#e2e8f0',
    textMuted: '#a0aec0',
    border: 'rgba(255,255,255,0.1)',
    borderLight: '#2d3748',
    shadow: 'rgba(0,0,0,0.37)',
    overlay: 'rgba(0,0,0,0.7)',
    success: '#48bb78',
    error: '#f56565',
    warning: '#ed8936',
    info: '#4299e1',
    white: '#ffffff',
    black: '#000000',
    gray50: '#1f2937',
    gray100: '#1f2937',
    gray200: '#2d3748',
    gray300: '#4a5568',
    gray400: '#718096',
    gray500: '#a0aec0',
    gray600: '#cbd5e0',
    gray700: '#e2e8f0',
    gray800: '#edf2f7',
    gray900: '#f7fafc',
    green400: '#4ade80',
    green500: '#22c55e',
    green600: '#4ade80',
    red400: '#f87171',
    red500: '#ef4444',
  },
};

export const FONTS = {
  regular: 'System',
  medium: 'System',
  bold: 'System',
  sizes: {
    xs: 11,
    sm: 13,
    base: 15,
    lg: 17,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
    '6xl': 60,
  },
  weights: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },
};

export const SPACING = {
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
  16: 64,
};

export const RADIUS = {
  sm: 6,
  md: 10,
  lg: 14,
  xl: 18,
  '2xl': 24,
  full: 9999,
};

export const SHADOWS = {
  sm: {
    shadowColor: '#667eea',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  md: {
    shadowColor: '#667eea',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 8,
  },
};
