import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Linking,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from '../../context/ThemeContext';
import { useScreenTitle } from '../../context/ScreenTitleContext';
import { Ionicons } from '@expo/vector-icons';

const DevelopersScreen = ({ navigation }) => {
  useScreenTitle('TranslaTalk | Developers');
  const { colors } = useTheme();

  const developers = [
    {
      id: '1',
      name: 'Alice Johnson',
      role: 'Lead Developer',
      avatar: null,
      bio: 'Full-stack developer with passion for real-time communication',
      github: 'https://github.com/alicejohnson',
      linkedin: 'https://linkedin.com/in/alicejohnson',
      twitter: 'https://twitter.com/alicejohnson',
    },
    {
      id: '2',
      name: 'Bob Smith',
      role: 'Backend Engineer',
      avatar: null,
      bio: 'Specializing in scalable distributed systems and APIs',
      github: 'https://github.com/bobsmith',
      linkedin: 'https://linkedin.com/in/bobsmith',
    },
    {
      id: '3',
      name: 'Carol White',
      role: 'Frontend Developer',
      avatar: null,
      bio: 'React Native expert building beautiful mobile experiences',
      github: 'https://github.com/carolwhite',
      twitter: 'https://twitter.com/carolwhite',
    },
    {
      id: '4',
      name: 'David Brown',
      role: 'UI/UX Designer',
      avatar: null,
      bio: 'Creating intuitive and delightful user experiences',
      linkedin: 'https://linkedin.com/in/davidbrown',
      twitter: 'https://twitter.com/davidbrown',
    },
  ];

  const handleOpenLink = (url) => {
    if (url) {
      Linking.openURL(url);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.bgPrimary }]}>
      <StatusBar style={colors.isDark ? 'light' : 'dark'} />

      {/* Header */}
      <View style={[styles.header, { backgroundColor: colors.bgCard, borderBottomColor: colors.border }]}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>
          Developers
        </Text>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Introduction */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.introTitle, { color: colors.textPrimary }]}>
            Meet the Team
          </Text>
          <Text style={[styles.introText, { color: colors.textSecondary }]}>
            TranslaTalk is built by a passionate team of developers dedicated to breaking down 
            language barriers and connecting people worldwide.
          </Text>
        </View>

        {/* Developers List */}
        {developers.map((dev) => (
          <View
            key={dev.id}
            style={[styles.developerCard, { backgroundColor: colors.bgCard }]}
          >
            <View style={styles.developerHeader}>
              {dev.avatar ? (
                <Image source={{ uri: dev.avatar }} style={styles.avatar} />
              ) : (
                <View style={[styles.avatarPlaceholder, { backgroundColor: colors.primary }]}>
                  <Text style={styles.avatarText}>
                    {dev.name.split(' ').map(n => n[0]).join('')}
                  </Text>
                </View>
              )}

              <View style={styles.developerInfo}>
                <Text style={[styles.developerName, { color: colors.textPrimary }]}>
                  {dev.name}
                </Text>
                <Text style={[styles.developerRole, { color: colors.primary }]}>
                  {dev.role}
                </Text>
              </View>
            </View>

            <Text style={[styles.developerBio, { color: colors.textSecondary }]}>
              {dev.bio}
            </Text>

            <View style={styles.socialLinks}>
              {dev.github && (
                <TouchableOpacity
                  style={[styles.socialButton, { backgroundColor: colors.bgSecondary }]}
                  onPress={() => handleOpenLink(dev.github)}
                >
                  <Ionicons name="logo-github" size={20} color={colors.textPrimary} />
                </TouchableOpacity>
              )}
              {dev.linkedin && (
                <TouchableOpacity
                  style={[styles.socialButton, { backgroundColor: colors.bgSecondary }]}
                  onPress={() => handleOpenLink(dev.linkedin)}
                >
                  <Ionicons name="logo-linkedin" size={20} color={colors.textPrimary} />
                </TouchableOpacity>
              )}
              {dev.twitter && (
                <TouchableOpacity
                  style={[styles.socialButton, { backgroundColor: colors.bgSecondary }]}
                  onPress={() => handleOpenLink(dev.twitter)}
                >
                  <Ionicons name="logo-twitter" size={20} color={colors.textPrimary} />
                </TouchableOpacity>
              )}
            </View>
          </View>
        ))}

        {/* Technologies */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            Technologies We Use
          </Text>

          <View style={styles.techGrid}>
            <View style={[styles.techItem, { backgroundColor: colors.bgSecondary }]}>
              <Ionicons name="logo-react" size={32} color="#61dafb" />
              <Text style={[styles.techName, { color: colors.textPrimary }]}>React Native</Text>
            </View>
            <View style={[styles.techItem, { backgroundColor: colors.bgSecondary }]}>
              <Ionicons name="logo-nodejs" size={32} color="#68a063" />
              <Text style={[styles.techName, { color: colors.textPrimary }]}>Node.js</Text>
            </View>
            <View style={[styles.techItem, { backgroundColor: colors.bgSecondary }]}>
              <Ionicons name="server" size={32} color={colors.primary} />
              <Text style={[styles.techName, { color: colors.textPrimary }]}>MongoDB</Text>
            </View>
            <View style={[styles.techItem, { backgroundColor: colors.bgSecondary }]}>
              <Ionicons name="cloud" size={32} color={colors.primary} />
              <Text style={[styles.techName, { color: colors.textPrimary }]}>AWS</Text>
            </View>
          </View>
        </View>

        {/* Contribute */}
        <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            Want to Contribute?
          </Text>
          <Text style={[styles.contributeText, { color: colors.textSecondary }]}>
            TranslaTalk is open source! We welcome contributions from developers around the world.
          </Text>
          <TouchableOpacity
            style={[styles.contributeButton, { backgroundColor: colors.primary }]}
            onPress={() => handleOpenLink('https://github.com/translatalk/react-native-chatapp')}
          >
            <Ionicons name="logo-github" size={20} color="#fff" />
            <Text style={styles.contributeButtonText}>View on GitHub</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingTop: 48,
    borderBottomWidth: 1,
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  scrollView: {
    flex: 1,
  },
  section: {
    marginBottom: 12,
    padding: 16,
  },
  introTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  introText: {
    fontSize: 14,
    lineHeight: 22,
  },
  developerCard: {
    marginBottom: 12,
    padding: 16,
  },
  developerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 12,
  },
  avatarPlaceholder: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  developerInfo: {
    flex: 1,
  },
  developerName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  developerRole: {
    fontSize: 14,
    fontWeight: '500',
  },
  developerBio: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  socialLinks: {
    flexDirection: 'row',
    gap: 8,
  },
  socialButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  techGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  techItem: {
    width: '47%',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  techName: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 8,
  },
  contributeText: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
  },
  contributeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    gap: 8,
  },
  contributeButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  bottomSpacer: {
    height: 24,
  },
});

export default DevelopersScreen;
