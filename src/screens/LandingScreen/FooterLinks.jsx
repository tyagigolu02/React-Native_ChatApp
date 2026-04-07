import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../context/ThemeContext';
import { FONTS } from '../../theme/colors';

const footerItems = [
  { label: 'About', screen: 'About' },
  { label: 'Our Team', screen: 'Developers' },
  { label: 'Privacy', screen: 'Privacy' },
  { label: 'Terms', screen: 'Terms' },
  { label: 'Help', screen: 'Help' },
];

export default function FooterLinks() {
  const navigation = useNavigation();
  const { isDark } = useTheme();

  return (
    <View style={styles.container}>
      {footerItems.map((item, index) => (
        <React.Fragment key={item.screen}>
          {index > 0 && (
            <Text style={[styles.dot, { color: isDark ? '#6b7280' : '#9ca3af' }]}>•</Text>
          )}
          <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
            <Text style={[styles.link, { color: isDark ? '#9ca3af' : '#6b7280' }]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        </React.Fragment>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    gap: 4,
    paddingHorizontal: 16,
  },
  link: {
    fontSize: FONTS.sizes.sm,
    fontWeight: FONTS.weights.medium,
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
  dot: {
    fontSize: FONTS.sizes.sm,
    paddingHorizontal: 2,
  },
});
