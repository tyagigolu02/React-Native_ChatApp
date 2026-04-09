import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './UserManualSectionCard.styles';

const renderImages = (images, isDark) =>
  images.map((image, imgIndex) => (
    <View key={imgIndex} style={styles.imageWrapper}>
      <Image
        source={image.source}
        style={styles.columnImage}
        resizeMode="contain"
      />
      {image.caption ? (
        <Text style={[styles.imageCaption, { color: isDark ? '#aaa' : '#666' }]}>
          {image.caption}
        </Text>
      ) : null}
    </View>
  ));

const renderSteps = (steps, colors, isDark) =>
  steps.map((step, stepIndex) => (
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
  ));

const UserManualSectionCard = ({
  section,
  index,
  colors,
  isDark,
  isExpanded,
  onToggle,
}) => {
  const hasSteps = section.steps && section.steps.length > 0;
  const hasImages = section.images && section.images.length > 0;
  const hasFeatures = section.features && section.features.length > 0;
  const hasKeyPoints = section.keyPoints && section.keyPoints.length > 0;

  return (
    <View>
      <TouchableOpacity
        style={[
          styles.sectionHeader,
          {
            backgroundColor: isExpanded
              ? colors.primary
              : isDark
                ? '#2a2a3e'
                : '#f0f0f0',
          },
        ]}
        onPress={onToggle}
      >
        <View style={styles.sectionNumberAndTitle}>
          <View
            style={[
              styles.sectionNumber,
              { backgroundColor: isExpanded ? '#fff' : colors.primary },
            ]}
          >
            <Text
              style={[
                styles.sectionNumberText,
                { color: isExpanded ? colors.primary : '#fff' },
              ]}
            >
              {index + 1}
            </Text>
          </View>
          <Text
            style={[
              styles.sectionTitle,
              { color: isExpanded ? '#fff' : colors.primary },
            ]}
            numberOfLines={2}
          >
            {section.title}
          </Text>
        </View>
        <Ionicons
          name={isExpanded ? 'chevron-up' : 'chevron-down'}
          size={24}
          color={isExpanded ? '#fff' : colors.primary}
        />
      </TouchableOpacity>

      {isExpanded && (
        <View
          style={[
            styles.sectionContent,
            { backgroundColor: isDark ? '#1a1a2e' : '#fafafa' },
          ]}
        >
          <Text style={[styles.description, { color: isDark ? '#ddd' : '#333' }]}>
            {section.description}
          </Text>

          {hasSteps && hasImages && (
            <View style={styles.sectionStepContainer}>
              {index % 2 === 0 ? (
                <>
                  <View style={styles.stepsColumn}>{renderSteps(section.steps, colors, isDark)}</View>
                  <View style={styles.imagesColumn}>{renderImages(section.images, isDark)}</View>
                </>
              ) : (
                <>
                  <View style={styles.imagesColumn}>{renderImages(section.images, isDark)}</View>
                  <View style={styles.stepsColumn}>{renderSteps(section.steps, colors, isDark)}</View>
                </>
              )}
            </View>
          )}

          {hasSteps && !hasImages && (
            <View style={styles.stepsContainer}>
              {renderSteps(section.steps, colors, isDark)}
            </View>
          )}

          {!hasSteps && hasImages && (
            <View style={styles.imagesContainer}>{renderImages(section.images, isDark)}</View>
          )}

          {hasFeatures && (
            <View style={styles.featuresContainer}>
              <Text style={[styles.featureHeader, { color: colors.primary }]}>Features:</Text>
              {section.features.map((feature, featureIndex) => (
                <View key={featureIndex} style={styles.featureItem}>
                  <Ionicons name={feature.icon} size={18} color={colors.primary} />
                  <View style={styles.featureTextContainer}>
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

          {hasKeyPoints && (
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
  );
};

export default UserManualSectionCard;
