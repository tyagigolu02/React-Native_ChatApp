import React from 'react';
import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PolicyContent = ({
  styles,
  colors,
  isDark,
  pageTitle,
  lastUpdated,
  sections,
  contactTitle,
  contactDescription,
  contactItems,
}) => {
  return (
    <ScrollView
      style={styles.scrollView}
      scrollEnabled
      nestedScrollEnabled
      showsVerticalScrollIndicator={false}
    >
      <View style={[styles.titleSection, { backgroundColor: colors.bgCard }]}>
        <Text style={[styles.pageTitle, { color: colors.textPrimary }]}>{pageTitle}</Text>
        <Text style={[styles.lastUpdated, { color: colors.textSecondary }]}>Last updated: {lastUpdated}</Text>
      </View>

      {sections.map((section) => (
        <View key={section.id} style={[styles.section, { backgroundColor: colors.bgCard }]}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionNumber, { color: isDark ? '#fff' : '#000' }]}>{section.id}.</Text>
            <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>{section.title}</Text>
          </View>

          {section.items ? (
            <View style={styles.itemsList}>
              {section.items.map((item, index) => (
                <View key={index} style={styles.listItem}>
                  <Text style={[styles.bullet, { color: colors.textSecondary }]}>•</Text>
                  <Text style={[styles.itemText, { color: colors.textSecondary }]}>{item}</Text>
                </View>
              ))}
            </View>
          ) : (
            <Text style={[styles.contentText, { color: colors.textSecondary }]}>{section.content}</Text>
          )}
        </View>
      ))}

      <View style={[styles.section, { backgroundColor: colors.bgCard }]}>
        <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>{contactTitle}</Text>
        <Text style={[styles.contentText, { color: colors.textSecondary, marginBottom: 16 }]}>
          {contactDescription}
        </Text>

        {contactItems.map((item) => (
          <TouchableOpacity
            key={item.key}
            style={[
              styles.contactItem,
              { backgroundColor: isDark ? 'rgba(102,126,234,0.1)' : 'rgba(102,126,234,0.05)' },
            ]}
            onPress={item.onPress}
          >
            <Ionicons
              name={item.icon}
              size={20}
              color={isDark ? '#667eea' : colors.primary}
              style={{ marginRight: 12 }}
            />
            <View style={{ flex: 1 }}>
              <Text style={[styles.contactLabel, { color: colors.textSecondary }]}>{item.label}</Text>
              <Text style={[styles.contactValue, { color: isDark ? '#667eea' : colors.primary }]}>
                {item.value}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.bottomSpacer} />
    </ScrollView>
  );
};

export default PolicyContent;