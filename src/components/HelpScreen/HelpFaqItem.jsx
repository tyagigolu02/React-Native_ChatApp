import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../screens/HelpScreen/HelpScreen.styles';

const HelpFaqItem = ({ faq, colors, iconColor }) => {
  return (
    <View style={[styles.faqItem, { backgroundColor: colors.bgCard }]}>
      <View style={styles.faqHeader}>
        <View style={[styles.iconCircle, { backgroundColor: iconColor + '20' }]}>
          <Ionicons name={faq.icon} size={20} color={iconColor} />
        </View>
        <Text style={[styles.faqQuestion, { color: colors.textPrimary }]}>{faq.question}</Text>
      </View>
      <Text style={[styles.faqAnswer, { color: colors.textSecondary }]}>{faq.answer}</Text>
    </View>
  );
};

export default HelpFaqItem;
