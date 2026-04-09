import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../screens/DevelopersScreen/DevelopersScreen.styles';

const DevelopersContributeSection = ({ colors, isDark, onGetInTouch }) => {
  return (
    <View style={[styles.contributeSection, { backgroundColor: isDark ? colors.primary : '#2c3e50' }]}>
      <Ionicons name="rocket" size={40} color="#fff" style={{ marginBottom: 16 }} />
      <Text style={styles.contributeTitle}>Want to Contribute?</Text>
      <Text style={styles.contributeText}>
        We&apos;re always looking for talented individuals to join our mission. Feel free to reach
        out or contribute to our open-source project.
      </Text>
      <TouchableOpacity style={styles.contributeButton} onPress={onGetInTouch}>
        <Ionicons
          name="paper-plane"
          size={18}
          color={isDark ? colors.primary : '#2c3e50'}
          style={{ marginRight: 8 }}
        />
        <Text style={[styles.contributeButtonText, { color: isDark ? colors.primary : '#2c3e50' }]}>
          Get In Touch
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DevelopersContributeSection;
