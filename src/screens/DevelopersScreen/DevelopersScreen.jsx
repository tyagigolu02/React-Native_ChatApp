import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from '../../context/ThemeContext';
import { useScreenTitle } from '../../context/ScreenTitleContext';
import useDevelopersScreen from '../../hooks/useDevelopersScreen';
import styles from './DevelopersScreen.styles';
import DevelopersHeroSection from '../../components/DevelopersScreen/DevelopersHeroSection';
import DevelopersPersonCard from '../../components/DevelopersScreen/DevelopersPersonCard';
import DevelopersContributeSection from '../../components/DevelopersScreen/DevelopersContributeSection';

const DevelopersScreen = ({ navigation }) => {
  useScreenTitle('TranslaTalk | Developers');
  const { colors, isDark } = useTheme();

  const { guide, developers, stats, handleGetInTouch } = useDevelopersScreen({ navigation });

  return (
    <View style={[styles.container, { backgroundColor: colors.bgPrimary }]}>
      <StatusBar style={colors.isDark ? 'light' : 'dark'} />

      <ScrollView style={styles.scrollView} scrollEnabled nestedScrollEnabled>
        <DevelopersHeroSection colors={colors} isDark={isDark} stats={stats} />

        <View style={styles.guideSection}>
          <Text style={[styles.sectionLabel, { color: colors.textSecondary }]}>PROJECT GUIDE</Text>
          <DevelopersPersonCard person={guide} colors={colors} isDark={isDark} />
        </View>

        <View style={styles.teamSection}>
          <Text style={[styles.sectionLabel, { color: colors.textSecondary }]}>DEVELOPMENT TEAM</Text>
          {developers.map((developer) => (
            <DevelopersPersonCard
              key={developer.id}
              person={developer}
              colors={colors}
              isDark={isDark}
            />
          ))}
        </View>

        <DevelopersContributeSection colors={colors} isDark={isDark} onGetInTouch={handleGetInTouch} />

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </View>
  );
};

export default DevelopersScreen;
