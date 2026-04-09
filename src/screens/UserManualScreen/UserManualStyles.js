import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  // Header Section
  header: {
    paddingTop: 30,
    paddingBottom: 24,
    paddingHorizontal: 20,
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
    textAlign: 'center',
  },

  // Introduction Section
  introSection: {
    marginHorizontal: 16,
    marginVertical: 20,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 12,
  },
  introTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  introText: {
    fontSize: 14,
    lineHeight: 21,
  },

  // Sections Container
  sectionsContainer: {
    marginHorizontal: 12,
    marginVertical: 12,
  },

  // Section Header
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 8,
    borderRadius: 10,
  },
  sectionNumberAndTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  sectionNumber: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  sectionNumberText: {
    fontWeight: '700',
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
  },

  // Section Content
  sectionContent: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 12,
    borderRadius: 10,
  },
  sectionDescription: {
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 16,
  },

  // Images Container
  imagesContainer: {
    marginBottom: 16,
  },
  imageWrapper: {
    marginBottom: 12,
    alignItems: 'center',
  },
  sectionImage: {
    width: '100%',
    height: 220,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  imageCaption: {
    fontSize: 12,
    marginTop: 8,
    textAlign: 'center',
    fontStyle: 'italic',
  },

  // Steps Container
  stepsContainer: {
    marginBottom: 16,
  },
  step: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  stepNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginTop: 2,
  },
  stepNumberText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  stepDescription: {
    fontSize: 13,
    lineHeight: 19,
  },

  // Features Container
  featuresContainer: {
    marginBottom: 16,
  },
  featureItem: {
    flexDirection: 'row',
    marginBottom: 14,
    alignItems: 'flex-start',
  },
  featureTextContainer: {
    marginLeft: 12,
    flex: 1,
  },
  featureTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 13,
    lineHeight: 19,
  },

  // Key Points Container
  keyPointsContainer: {
    marginBottom: 16,
  },
  keyPoint: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  keyPointBullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 12,
    marginTop: 6,
  },
  keyPointText: {
    fontSize: 13,
    lineHeight: 19,
    flex: 1,
  },

  // Support Section
  supportSection: {
    marginHorizontal: 16,
    marginVertical: 24,
    marginBottom: 32,
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  supportTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  supportDescription: {
    fontSize: 13,
    lineHeight: 19,
    textAlign: 'center',
  },
});

export default styles;
