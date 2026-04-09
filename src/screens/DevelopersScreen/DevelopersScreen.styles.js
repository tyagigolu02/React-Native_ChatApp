import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    ...(typeof document !== 'undefined' && { maxHeight: 'calc(100vh)', overflowY: 'auto' }),
  },
  heroSection: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 16,
    alignSelf: 'center',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '500',
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  heroSubtitle: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 24,
    alignItems: 'center',
    width: '100%',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
  },
  guideSection: {
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  teamSection: {
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  sectionLabel: {
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 12,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  card: {
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardGradientHeader: {
    height: 96,
    opacity: 0.7,
  },
  cardHeader: {
    paddingHorizontal: 16,
    alignItems: 'flex-start',
    position: 'relative',
    marginTop: -48,
    marginBottom: 12,
    zIndex: 1,
  },
  cardAvatar: {
    width: 96,
    height: 96,
    borderRadius: 16,
    borderWidth: 4,
  },
  cardIcon: {
    position: 'absolute',
    top: -12,
    right: 16,
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 8,
    borderRadius: 12,
  },
  cardContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  cardName: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  cardRole: {
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 2,
  },
  cardDesignation: {
    fontSize: 12,
    marginBottom: 12,
  },
  cardBio: {
    fontSize: 13,
    lineHeight: 19,
    marginBottom: 12,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 12,
  },
  skillTag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  skillText: {
    fontSize: 11,
    fontWeight: '600',
  },
  socialLink: {
    paddingTop: 12,
    borderTopWidth: 1,
    alignItems: 'flex-start',
  },
  contributeSection: {
    marginHorizontal: 12,
    marginBottom: 12,
    borderRadius: 16,
    paddingVertical: 32,
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#851e86',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  contributeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
    textAlign: 'center',
  },
  contributeText: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
  },
  contributeButton: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 24,
  },
  contributeButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  bottomSpacer: {
    height: 24,
  },
});

export default styles;
