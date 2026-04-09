import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';
import { userManualSections } from './userManualData';
import styles from './UserManualStyles';

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

  return (
    <View style={[styles.container, { backgroundColor: colors.bgPrimary }]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
      >
        {/* Header */}
        <View style={[styles.header, { backgroundColor: colors.primary }]}>
          <Ionicons name="book" size={40} color="#fff" style={{ marginBottom: 12 }} />
          <Text style={styles.headerTitle}>User Manual</Text>
          <Text style={styles.headerSubtitle}>
            Complete guide to using TranslaTalk
          </Text>
        </View>

        {/* Introduction */}
        <View style={[styles.introSection, { backgroundColor: isDark ? '#1a1a2e' : '#f8f9fa' }]}>
          <Text style={[styles.introTitle, { color: colors.primary }]}>
            Welcome to TranslaTalk
          </Text>
          <Text style={[styles.introText, { color: isDark ? '#ccc' : '#555' }]}>
            Your complete communication platform with real-time translation, encrypted messaging,
            and advanced features. This guide will help you get started.
          </Text>
        </View>

        {/* Sections */}
        <View style={styles.sectionsContainer}>
          {userManualSections && userManualSections.length > 0 ? (
            userManualSections.map((section, index) => (
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
                        {
                          backgroundColor: isExpanded(index) ? '#fff' : colors.primary,
                        },
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
                        {
                          color: isExpanded(index) ? '#fff' : colors.primary,
                        },
                      ]}
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
                    {/* Main Description */}
                    <Text style={[styles.sectionDescription, { color: isDark ? '#ddd' : '#333' }]}>
                      {section.description}
                    </Text>

                    {/* Images */}
                    {section.images && section.images.length > 0 && (
                      <View style={styles.imagesContainer}>
                        {section.images.map((image, imgIndex) => (
                          <View key={imgIndex} style={styles.imageWrapper}>
                            <Image
                              source={image.source}
                              style={styles.sectionImage}
                              resizeMode="contain"
                              onError={() => console.log('Image failed:', imgIndex)}
                            />
                            {image.caption && (
                              <Text
                                style={[
                                  styles.imageCaption,
                                  { color: isDark ? '#aaa' : '#666' },
                                ]}
                              >
                                {image.caption}
                              </Text>
                            )}
                          </View>
                        ))}
                      </View>
                    )}

                    {/* Steps */}
                    {section.steps && section.steps.length > 0 && (
                      <View style={styles.stepsContainer}>
                        {section.steps.map((step, stepIndex) => (
                          <View key={stepIndex} style={styles.step}>
                            <View
                              style={[
                                styles.stepNumber,
                                { backgroundColor: colors.primary },
                              ]}
                            >
                              <Text style={styles.stepNumberText}>{stepIndex + 1}</Text>
                            </View>
                            <View style={styles.stepContent}>
                              <Text
                                style={[
                                  styles.stepTitle,
                                  { color: isDark ? '#fff' : '#333' },
                                ]}
                              >
                                {step.title}
                              </Text>
                              <Text
                                style={[
                                  styles.stepDescription,
                                  { color: isDark ? '#bbb' : '#666' },
                                ]}
                              >
                                {step.description}
                              </Text>
                            </View>
                          </View>
                        ))}
                      </View>
                    )}

                    {/* Features List */}
                    {section.features && section.features.length > 0 && (
                      <View style={styles.featuresContainer}>
                        {section.features.map((feature, featureIndex) => (
                          <View key={featureIndex} style={styles.featureItem}>
                            <Ionicons name={feature.icon} size={20} color={colors.primary} />
                            <View style={styles.featureTextContainer}>
                              <Text
                                style={[
                                  styles.featureTitle,
                                  { color: isDark ? '#fff' : '#333' },
                                ]}
                              >
                                {feature.title}
                              </Text>
                              <Text
                                style={[
                                  styles.featureDescription,
                                  { color: isDark ? '#aaa' : '#666' },
                                ]}
                              >
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
                        {section.keyPoints.map((point, pointIndex) => (
                          <View key={pointIndex} style={styles.keyPoint}>
                            <View
                              style={[
                                styles.keyPointBullet,
                                { backgroundColor: colors.primary },
                              ]}
                            />
                            <Text
                              style={[
                                styles.keyPointText,
                                { color: isDark ? '#ddd' : '#333' },
                              ]}
                            >
                              {point}
                            </Text>
                          </View>
                        ))}
                      </View>
                    )}
                  </View>
                )}
              </View>
            ))
          ) : (
            <Text style={{ color: isDark ? '#fff' : '#000', padding: 20 }}>
              No sections available
            </Text>
          )}
        </View>

        {/* Support Section */}
        <View
          style={[
            styles.supportSection,
            { backgroundColor: isDark ? '#2a2a3e' : '#f0f0f0' },
          ]}
        >
          <Ionicons name="help-circle" size={32} color={colors.primary} style={{ marginBottom: 12 }} />
          <Text style={[styles.supportTitle, { color: isDark ? '#fff' : '#333' }]}>
            Need More Help?
          </Text>
          <Text
            style={[
              styles.supportDescription,
              { color: isDark ? '#aaa' : '#666' },
            ]}
          >
            Visit our Help page or contact support for additional assistance.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default UserManualScreen;
