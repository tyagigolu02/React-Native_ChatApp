import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Linking,
  Image,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from '../../context/ThemeContext';
import { useScreenTitle } from '../../context/ScreenTitleContext';
import { Ionicons } from '@expo/vector-icons';

const DevelopersScreen = ({ navigation }) => {
  useScreenTitle('TranslaTalk | Developers');
  const { colors, isDark } = useTheme();

  const guide = {
    name: 'Vikas Shrivastva',
    role: 'Project Guide',
    designation: 'HoD, CSE Department',
    college: 'MIET Meerut',
    bio: 'Guiding and mentoring the team with expertise in software engineering and academic excellence.',
    image: require('../../assets/VK.jpg'),
    linkedin: 'https://www.linkedin.com/in/dr-vikas-srivastava-540552ab',
    color: '#f59e0b',
    icon: 'school',
  };

  const developers = [
    {
      id: '1',
      name: 'Deepanshu Tyagi',
      role: 'Frontend Developer & QA Tester',
      designation: 'Student, CSE Department',
      bio: 'Crafting intuitive user interfaces and ensuring top-notch quality through rigorous testing.',
      skills: ['React', 'JavaScript', 'TailwindCSS', 'Testing', 'UI/UX Design', 'Figma'],
      image: require('../../assets/tyagi.jpg'),
      linkedin: 'https://www.linkedin.com/in/tyagigolu02/',
      color: '#3b82f6',
      icon: 'brush',
    },
    {
      id: '2',
      name: 'Amit Saini',
      role: 'Backend & Database Developer',
      designation: 'Student, CSE Department',
      bio: 'Building robust backend systems and managing efficient database architectures for seamless data flow.',
      skills: ['Django', 'Python', 'PostgreSQL', 'MongoDB'],
      image: require('../../assets/Amit_Saini.jpg'),
      linkedin: 'https://www.linkedin.com/in/amit-saini-5b7858280/',
      color: '#10b981',
      icon: 'code-slash',
    },
    {
      id: '3',
      name: 'Dev Arya',
      role: 'Backend & DevOps Engineer',
      designation: 'Student, CSE Department',
      bio: 'Developing powerful backend APIs and ensuring smooth deployments with modern DevOps practices.',
      skills: ['Django', 'Python', 'Docker', 'Deployment'],
      image: require('../../assets/Dev_Arya.jpg'),
      linkedin: 'https://www.linkedin.com/in/dev-arya/',
      color: '#8b5cf6',
      icon: 'server',
    },
    {
      id: '4',
      name: 'Ankit Kumar',
      role: 'Frontend Developer & Documentation',
      designation: 'Student, CSE Department',
      bio: 'Ensuring comprehensive project documentation and contributing to frontend development for an enhanced user experience.',
      skills: ['React', 'Markdown', 'Technical Writing', 'CSS3', 'HTML5'],
      image: require('../../assets/Ankit_Kumar.jpg'),
      linkedin: 'https://www.linkedin.com/in/ankit-kumar-4300b425b/',
      color: '#f97316',
      icon: 'document',
    }
  ];

  const stats = [
    { value: '4', label: 'Team Members' },
    { value: '10+', label: 'Languages' },
    { value: '1', label: 'Mission' },
  ];

  return (
    <View style={[styles.container, { backgroundColor: colors.bgPrimary }]}>
      <StatusBar style={colors.isDark ? 'light' : 'dark'} />

      <ScrollView 
        style={styles.scrollView} 
        scrollEnabled={true}
        nestedScrollEnabled={true}
      >
        {/* Hero Section */}
        <View style={[styles.heroSection, { backgroundColor: colors.bgCard }]}>
          <Text style={[styles.badge, { backgroundColor: isDark ? 'rgba(102,126,234,0.1)' : 'rgba(102,126,234,0.1)', color: colors.primary }]}>
            <Ionicons name="people" size={16} /> Our Amazing Team
          </Text>
          
          <Text style={[styles.heroTitle, { color: colors.textPrimary }]}>
            The Minds Behind{'\n'}TranslaTalk
          </Text>
          
          <Text style={[styles.heroSubtitle, { color: colors.textSecondary }]}>
            Meet the talented developers who brought this project to life. We're passionate about breaking language barriers and connecting people worldwide.
          </Text>

          {/* Stats */}
          <View style={styles.statsContainer}>
            {stats.map((stat, index) => (
              <View key={index} style={styles.statItem}>
                <Text style={[styles.statValue, { color: colors.textPrimary }]}>
                  {stat.value}
                </Text>
                <Text style={[styles.statLabel, { color: colors.textSecondary }]}>
                  {stat.label}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Guide Section */}
        <View style={styles.guideSection}>
          <Text style={[styles.sectionLabel, { color: colors.textSecondary }]}>
            PROJECT GUIDE
          </Text>
          
          <View style={[styles.card, { backgroundColor: colors.bgCard }]}>
            {/* Gradient Header */}
            <View style={[styles.cardGradientHeader, { backgroundColor: guide.color }]} />
            
            <View style={styles.cardHeader}>
              <Image
                source={guide.image}
                style={[styles.cardAvatar, { borderColor: colors.bgCard }]}
              />
              <Ionicons name={guide.icon} size={24} color={guide.color} style={styles.cardIcon} />
            </View>

            <View style={styles.cardContent}>
              <Text style={[styles.cardName, { color: colors.textPrimary }]}>
                {guide.name}
              </Text>
              <Text style={[styles.cardRole, { color: guide.color }]}>
                {guide.role}
              </Text>
              <Text style={[styles.cardDesignation, { color: colors.textSecondary }]}>
                {guide.designation}, {guide.college}
              </Text>
              
              <Text style={[styles.cardBio, { color: colors.textSecondary }]}>
                {guide.bio}
              </Text>

              <TouchableOpacity
                style={[styles.socialLink, { borderTopColor: colors.border }]}
                onPress={() => Linking.openURL(guide.linkedin)}
              >
                <Ionicons name="logo-linkedin" size={18} color={guide.color} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Development Team Section */}
        <View style={styles.teamSection}>
          <Text style={[styles.sectionLabel, { color: colors.textSecondary }]}>
            DEVELOPMENT TEAM
          </Text>
          
          {developers.map((dev) => (
            <View key={dev.id} style={[styles.card, { backgroundColor: colors.bgCard }]}>
              {/* Gradient Header */}
              <View style={[styles.cardGradientHeader, { backgroundColor: dev.color }]} />
              
              <View style={styles.cardHeader}>
                <Image
                  source={dev.image}
                  style={[styles.cardAvatar, { borderColor: colors.bgCard }]}
                />
                <Ionicons name={dev.icon} size={24} color={dev.color} style={styles.cardIcon} />
              </View>

              <View style={styles.cardContent}>
                <Text style={[styles.cardName, { color: colors.textPrimary }]}>
                  {dev.name}
                </Text>
                <Text style={[styles.cardRole, { color: dev.color }]}>
                  {dev.role}
                </Text>
                <Text style={[styles.cardDesignation, { color: colors.textSecondary }]}>
                  {dev.designation}
                </Text>
                
                <Text style={[styles.cardBio, { color: colors.textSecondary }]}>
                  {dev.bio}
                </Text>

                {/* Skills */}
                <View style={styles.skillsContainer}>
                  {dev.skills.map((skill, idx) => (
                    <View 
                      key={idx} 
                      style={[
                        styles.skillTag,
                        { backgroundColor: isDark ? `${dev.color}20` : `${dev.color}15` }
                      ]}
                    >
                      <Text style={[styles.skillText, { color: dev.color }]}>
                        {skill}
                      </Text>
                    </View>
                  ))}
                </View>

                <TouchableOpacity
                  style={[styles.socialLink, { borderTopColor: colors.border }]}
                  onPress={() => Linking.openURL(dev.linkedin)}
                >
                  <Ionicons name="logo-linkedin" size={18} color={dev.color} />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        {/* Contribute Section */}
        <View style={[styles.contributeSection, { backgroundColor: isDark ? colors.primary : '#2c3e50' }]}>
          <Ionicons name="rocket" size={40} color="#fff" style={{ marginBottom: 16 }} />
          <Text style={[styles.contributeTitle, { color: '#fff' }]}>
            Want to Contribute?
          </Text>
          <Text style={[styles.contributeText, { color: 'rgba(255,255,255,0.9)' }]}>
            We're always looking for talented individuals to join our mission. Feel free to reach out or contribute to our open-source project.
          </Text>
          <TouchableOpacity
            style={[styles.contributeButton, { backgroundColor: '#fff' }]}
            onPress={() => navigation.navigate('Feedback')}
          >
            <Ionicons name="paper-plane" size={18} color={isDark ? colors.primary : '#2c3e50'} style={{ marginRight: 8 }} />
            <Text style={[styles.contributeButtonText, { color: isDark ? colors.primary : '#2c3e50' }]}>Get In Touch</Text>
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
  scrollView: {
    flex: 1,
    ...(typeof document !== 'undefined' && {
      maxHeight: 'calc(100vh)',
      overflowY: 'auto',
    }),
  },
  heroSection: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 16,
    alignSelf: 'center',
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

export default DevelopersScreen;
