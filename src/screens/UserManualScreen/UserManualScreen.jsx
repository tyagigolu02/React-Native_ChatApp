import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';
import { userManualSections } from './userManualData';

const UserManualScreen = ({ navigation }) => {
  const { colors, isDark } = useTheme();
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (index) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const isExpanded = (index) => expandedSections[index] || false;

  const webScrollViewStyles = typeof document !== 'undefined' ? {
    maxHeight: 'calc(100vh - 80px)',
    overflowY: 'auto',
    WebkitOverflowScrolling: 'touch',
  } : {};

  return (
    <View style={[styles.mainContainer, { backgroundColor: colors.bgPrimary }]}>
      {/* Top Bar */}
      <View style={[styles.topBar, { backgroundColor: colors.primary }]}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.topBarTitle}>User Manual</Text>
        <View style={{ width: 40 }} />
      </View>

      {/* Scrollable Content */}
      <ScrollView 
        style={[styles.scrollView, webScrollViewStyles]}
        scrollEnabled={true}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={true}
      >
        {/* Header */}
        <View style={[styles.header, { backgroundColor: colors.primary }]}>
          <Ionicons name="book" size={40} color="#fff" style={{ marginBottom: 12 }} />
          <Text style={styles.headerTitle}>User Manual</Text>
          <Text style={styles.headerSubtitle}>Complete TranslaTalk Guide</Text>
        </View>

        {/* Introduction */}
        <View style={[styles.introSection, { backgroundColor: isDark ? '#2a2a3e' : '#f8f9fa' }]}>
          <Text style={[styles.introTitle, { color: colors.primary }]}>Welcome to TranslaTalk</Text>
          <Text style={[styles.introText, { color: isDark ? '#ccc' : '#555' }]}>
            Your complete communication platform with real-time translation, encrypted messaging,
            and advanced features. Tap any section to learn more.
          </Text>
        </View>

        {/* Sections */}
        <View style={styles.sectionsContainer}>
          {userManualSections && userManualSections.map((section, index) => (
            <View key={index}>
              {/* Section Header */}
              <TouchableOpacity
                style={[
                  styles.sectionHeader,
                  {
                    backgroundColor: isExpanded(index)
                      ? colors.primary
                      : isDark
                        ? '#2a2a3e'
                        : '#f0f0f0',
                  },
                ]}
                onPress={() => toggleSection(index)}
              >
                <View style={styles.sectionNumberAndTitle}>
                  <View
                    style={[
                      styles.sectionNumber,
                      { backgroundColor: isExpanded(index) ? '#fff' : colors.primary },
                    ]}
                  >
                    <Text
                      style={[
                        styles.sectionNumberText,
                        { color: isExpanded(index) ? colors.primary : '#fff' },
                      ]}
                    >
                      {index + 1}
                    </Text>
                  </View>
                  <Text
                    style={[
                      styles.sectionTitle,
                      { color: isExpanded(index) ? '#fff' : colors.primary },
                    ]}
                    numberOfLines={2}
                  >
                    {section.title}
                  </Text>
                </View>
                <Ionicons
                  name={isExpanded(index) ? 'chevron-up' : 'chevron-down'}
                  size={24}
                  color={isExpanded(index) ? '#fff' : colors.primary}
                />
              </TouchableOpacity>

              {/* Section Content */}
              {isExpanded(index) && (
                <View
                  style={[
                    styles.sectionContent,
                    { backgroundColor: isDark ? '#1a1a2e' : '#fafafa' },
                  ]}
                >
                  {/* Description */}
                  <Text style={[styles.description, { color: isDark ? '#ddd' : '#333' }]}>
                    {section.description}
                  </Text>

                  {/* Steps with Alternating Layout */}
                  {section.steps && section.steps.length > 0 && (
                    <View style={styles.sectionStepContainer}>
                      {index % 2 === 0 ? (
                        <>
                          {/* Left: Steps Content */}
                          <View style={styles.stepsColumn}>
                            {section.steps.map((step, stepIndex) => (
                              <View key={stepIndex} style={styles.stepItem}>
                                <View style={[styles.stepNum, { backgroundColor: colors.primary }]}>
                                  <Text style={styles.stepNumText}>{stepIndex + 1}</Text>
                                </View>
                                <View style={styles.stepContent}>
                                  <Text style={[styles.stepTitle, { color: isDark ? '#fff' : '#333' }]}>
                                    {step.title}
                                  </Text>
                                  <Text style={[styles.stepDesc, { color: isDark ? '#bbb' : '#666' }]}>
                                    {step.description}
                                  </Text>
                                </View>
                              </View>
                            ))}
                          </View>

                          {/* Right: Images Column */}
                          {section.images && section.images.length > 0 && (
                            <View style={styles.imagesColumn}>
                              {section.images.map((image, imgIndex) => (
                                <View key={imgIndex} style={styles.imageWrapper}>
                                  <Image
                                    source={image.source}
                                    style={styles.columnImage}
                                    resizeMode="contain"
                                  />
                                </View>
                              ))}
                            </View>
                          )}
                        </>
                      ) : (
                        <>
                          {/* Left: Images Column */}
                          {section.images && section.images.length > 0 && (
                            <View style={styles.imagesColumn}>
                              {section.images.map((image, imgIndex) => (
                                <View key={imgIndex} style={styles.imageWrapper}>
                                  <Image
                                    source={image.source}
                                    style={styles.columnImage}
                                    resizeMode="contain"
                                  />
                                </View>
                              ))}
                            </View>
                          )}

                          {/* Right: Steps Content */}
                          <View style={styles.stepsColumn}>
                            {section.steps.map((step, stepIndex) => (
                              <View key={stepIndex} style={styles.stepItem}>
                                <View style={[styles.stepNum, { backgroundColor: colors.primary }]}>
                                  <Text style={styles.stepNumText}>{stepIndex + 1}</Text>
                                </View>
                                <View style={styles.stepContent}>
                                  <Text style={[styles.stepTitle, { color: isDark ? '#fff' : '#333' }]}>
                                    {step.title}
                                  </Text>
                                  <Text style={[styles.stepDesc, { color: isDark ? '#bbb' : '#666' }]}>
                                    {step.description}
                                  </Text>
                                </View>
                              </View>
                            ))}
                          </View>
                        </>
                      )}
                    </View>
                  )}

                  {/* Features */}
                  {section.features && section.features.length > 0 && (
                    <View style={styles.featuresContainer}>
                      <Text style={[styles.featureHeader, { color: colors.primary }]}>Features:</Text>
                      {section.features.map((feature, featureIndex) => (
                        <View key={featureIndex} style={styles.featureItem}>
                          <Ionicons name={feature.icon} size={18} color={colors.primary} />
                          <View style={{ marginLeft: 12, flex: 1 }}>
                            <Text style={[styles.featureTitle, { color: isDark ? '#fff' : '#333' }]}>
                              {feature.title}
                            </Text>
                            <Text style={[styles.featureDesc, { color: isDark ? '#aaa' : '#666' }]}>
                              {feature.description}
                            </Text>
                          </View>
                        </View>
                      ))}
                    </View>
                  )}

                  {/* Key Points */}
                  {section.keyPoints && section.keyPoints.length > 0 && (
                    <View style={styles.keyPointsContainer}>
                      <Text style={[styles.keyPointHeader, { color: colors.primary }]}>Key Points:</Text>
                      {section.keyPoints.map((point, pointIndex) => (
                        <View key={pointIndex} style={styles.keyPoint}>
                          <View style={[styles.bullet, { backgroundColor: colors.primary }]} />
                          <Text style={[styles.pointText, { color: isDark ? '#ddd' : '#333' }]}>
                            {point}
                          </Text>
                        </View>
                      ))}
                    </View>
                  )}
                </View>
              )}
            </View>
          ))}
        </View>

        {/* Footer */}
        <View style={[styles.footer, { backgroundColor: isDark ? '#2a2a3e' : '#f0f0f0' }]}>
          <Ionicons name="help-circle" size={32} color={colors.primary} style={{ marginBottom: 12 }} />
          <Text style={[styles.footerTitle, { color: isDark ? '#fff' : '#333' }]}>
            Need More Help?
          </Text>
          <Text style={[styles.footerDesc, { color: isDark ? '#aaa' : '#666' }]}>
            Visit our Help page for FAQs or contact support.
          </Text>
        </View>

        <View style={{ height: 30 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingTop: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBarTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.85)',
  },
  introSection: {
    marginHorizontal: 16,
    marginVertical: 16,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 10,
  },
  introTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  introText: {
    fontSize: 14,
    lineHeight: 21,
  },
  sectionsContainer: {
    marginHorizontal: 12,
    marginVertical: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 6,
    borderRadius: 8,
    marginHorizontal: 4,
  },
  sectionNumberAndTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  sectionNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  sectionNumberText: {
    fontWeight: '700',
    fontSize: 13,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '600',
    flex: 1,
  },
  sectionContent: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 8,
    borderRadius: 8,
    marginHorizontal: 16,
  },
  description: {
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 14,
  },
  sectionStepContainer: {
    flexDirection: 'row',
    marginBottom: 14,
    alignItems: 'flex-start',
    gap: 16,
  },
  stepsColumn: {
    flex: 1,
  },
  imagesColumn: {
    flex: 1,
    justifyContent: 'flex-start',
    gap: 12,
  },
  imageWrapper: {
    marginBottom: 12,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  columnImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  stepItem: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'flex-start',
    gap: 12,
  },
  stepContent: {
    flex: 1,
  },
  stepNum: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
    minWidth: 32,
  },
  stepNumText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 12,
  },
  stepTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 3,
  },
  stepDesc: {
    fontSize: 13,
    lineHeight: 18,
  },
  featuresContainer: {
    marginBottom: 14,
  },
  featureHeader: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 10,
  },
  featureItem: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  featureTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 2,
  },
  featureDesc: {
    fontSize: 13,
    lineHeight: 18,
  },
  keyPointHeader: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 10,
  },
  keyPointsContainer: {
    marginBottom: 8,
  },
  keyPoint: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'flex-start',
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 10,
    marginTop: 6,
  },
  pointText: {
    fontSize: 13,
    lineHeight: 18,
    flex: 1,
  },
  footer: {
    marginHorizontal: 16,
    marginVertical: 20,
    marginBottom: 20,
    paddingHorizontal: 16,
    paddingVertical: 18,
    borderRadius: 10,
    alignItems: 'center',
  },
  footerTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  footerDesc: {
    fontSize: 13,
    lineHeight: 18,
    textAlign: 'center',
  },
});

export default UserManualScreen;
