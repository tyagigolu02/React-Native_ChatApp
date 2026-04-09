import { StyleSheet } from 'react-native';

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

export default styles;
