import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../screens/HelpScreen/HelpScreen.styles';
import HelpFaqItem from './HelpFaqItem';

const HelpContent = ({
  colors,
  isDark,
  faqs,
  resources,
  getIconColor,
  handleContactSupport,
  handleAbout,
}) => {
  return (
    <>
      <View style={[styles.heroSection, { backgroundColor: colors.bgCard }]}>
        <View
          style={[
            styles.heroIconContainer,
            { backgroundColor: 'rgba(102,126,234,0.1)' },
          ]}
        >
          <Ionicons name="help-circle" size={32} color={colors.primary} />
        </View>
        <Text style={[styles.heroTitle, { color: colors.textPrimary }]}>How can we help you?</Text>
        <Text style={[styles.heroSubtitle, { color: colors.textSecondary }]}>
          Find answers to frequently asked questions about TranslaTalk
        </Text>
      </View>

      <View style={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <HelpFaqItem key={faq.id} faq={faq} colors={colors} iconColor={getIconColor(index)} />
        ))}
      </View>

      <View style={[styles.supportBanner, { backgroundColor: isDark ? colors.primary : '#2c3e50' }]}>
        <Text style={styles.supportTitle}>Still need help?</Text>
        <Text style={styles.supportDescription}>
          Can&apos;t find what you&apos;re looking for? Our support team is here to help you with any
          questions or issues.
        </Text>

        <View style={styles.supportButtonsContainer}>
          <TouchableOpacity style={[styles.supportButton, { backgroundColor: '#fff' }]} onPress={handleContactSupport}>
            <Ionicons
              name="chatbubble-ellipses"
              size={18}
              color={isDark ? colors.primary : '#2c3e50'}
              style={{ marginRight: 8 }}
            />
            <Text style={[styles.supportButtonText, { color: isDark ? colors.primary : '#2c3e50' }]}>
              Contact Support
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.supportButtonAlt, { borderColor: 'rgba(255,255,255,0.3)' }]}
            onPress={handleAbout}
          >
            <Ionicons name="information-circle" size={18} color="#fff" style={{ marginRight: 8 }} />
            <Text style={styles.supportButtonAltText}>About TranslaTalk</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.resourcesSection}>
        {resources.map((resource) => {
          return (
            resource.touchable ? (
              <TouchableOpacity
                key={resource.id}
                style={[styles.resourceCard, { backgroundColor: colors.bgCard }]}
                onPress={resource.onPress}
              >
                <Ionicons name={resource.icon} size={32} color={colors.primary} style={{ marginBottom: 12 }} />
                <Text style={[styles.resourceTitle, { color: colors.textPrimary }]}>{resource.title}</Text>
                <Text style={[styles.resourceDesc, { color: colors.textSecondary }]}>{resource.description}</Text>
              </TouchableOpacity>
            ) : (
              <View
                key={resource.id}
                style={[styles.resourceCard, { backgroundColor: colors.bgCard }]}
              >
                <Ionicons name={resource.icon} size={32} color={colors.primary} style={{ marginBottom: 12 }} />
                <Text style={[styles.resourceTitle, { color: colors.textPrimary }]}>{resource.title}</Text>
                <Text style={[styles.resourceDesc, { color: colors.textSecondary }]}>{resource.description}</Text>
              </View>
            )
          );
        })}
      </View>

      <View style={styles.bottomSpacer} />
    </>
  );
};

export default HelpContent;
