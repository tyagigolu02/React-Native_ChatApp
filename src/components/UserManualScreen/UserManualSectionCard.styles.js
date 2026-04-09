import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
  imagesContainer: {
    marginBottom: 16,
  },
  imageWrapper: {
    marginBottom: 12,
    alignItems: 'center',
  },
  columnImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  imageCaption: {
    fontSize: 12,
    marginTop: 8,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  stepsContainer: {
    marginBottom: 16,
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
    marginBottom: 16,
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
  featureTextContainer: {
    marginLeft: 12,
    flex: 1,
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
  keyPointsContainer: {
    marginBottom: 8,
  },
  keyPointHeader: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 10,
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
});

export default styles;
