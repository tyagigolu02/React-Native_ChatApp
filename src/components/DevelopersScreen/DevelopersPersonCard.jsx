import React from 'react';
import { Image, Linking, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../screens/DevelopersScreen/DevelopersScreen.styles';

const DevelopersPersonCard = ({ person, colors, isDark }) => {
  return (
    <View style={[styles.card, { backgroundColor: colors.bgCard }]}>
      <View style={[styles.cardGradientHeader, { backgroundColor: person.color }]} />

      <View style={styles.cardHeader}>
        <Image source={person.image} style={[styles.cardAvatar, { borderColor: colors.bgCard }]} />
        <Ionicons name={person.icon} size={24} color={person.color} style={styles.cardIcon} />
      </View>

      <View style={styles.cardContent}>
        <Text style={[styles.cardName, { color: colors.textPrimary }]}>{person.name}</Text>
        <Text style={[styles.cardRole, { color: person.color }]}>{person.role}</Text>
        <Text style={[styles.cardDesignation, { color: colors.textSecondary }]}>
          {person.designation}
          {person.college ? `, ${person.college}` : ''}
        </Text>

        <Text style={[styles.cardBio, { color: colors.textSecondary }]}>{person.bio}</Text>

        {person.skills?.length ? (
          <View style={styles.skillsContainer}>
            {person.skills.map((skill) => (
              <View
                key={skill}
                style={[
                  styles.skillTag,
                  { backgroundColor: isDark ? `${person.color}20` : `${person.color}15` },
                ]}
              >
                <Text style={[styles.skillText, { color: person.color }]}>{skill}</Text>
              </View>
            ))}
          </View>
        ) : null}

        <TouchableOpacity style={[styles.socialLink, { borderTopColor: colors.border }]} onPress={() => Linking.openURL(person.linkedin)}>
          <Ionicons name="logo-linkedin" size={18} color={person.color} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DevelopersPersonCard;
