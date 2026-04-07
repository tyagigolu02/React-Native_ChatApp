import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../../context/ThemeContext';
import { useScreenTitle } from '../../context/ScreenTitleContext';
import { useAuth } from '../../context/AuthContext';

const ProfileScreen = ({ navigation }) => {
  useScreenTitle('TranslaTalk | Profile');
  const { colors } = useTheme();
  const { currentUser } = useAuth();
  
  const [firstName, setFirstName] = useState(currentUser?.firstName || '');
  const [lastName, setLastName] = useState(currentUser?.lastName || '');
  const [bio, setBio] = useState(currentUser?.bio || '');
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert('Success', 'Profile updated successfully!');
    }, 1000);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.bgSecondary }]}>
      <StatusBar style={colors.isDark ? 'light' : 'dark'} />
      
      <View style={[styles.header, { backgroundColor: colors.bgCard }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>Edit Profile</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.bannerContainer}>
          <LinearGradient colors={['#667eea', '#764ba2']} style={styles.banner}>
            <TouchableOpacity style={styles.editBannerButton}>
              <Ionicons name="camera" size={20} color="#fff" />
            </TouchableOpacity>
          </LinearGradient>

          <View style={styles.avatarContainer}>
            <View style={[styles.avatar, { backgroundColor: '#667eea' }]}>
              <Text style={styles.avatarText}>
                {firstName.charAt(0).toUpperCase() || 'U'}
              </Text>
            </View>
            <TouchableOpacity style={styles.editAvatarButton}>
              <Ionicons name="camera" size={16} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.card, { backgroundColor: colors.bgCard }]}>
          <View style={styles.row}>
            <View style={styles.field}>
              <Text style={[styles.label, { color: colors.textSecondary }]}>First Name</Text>
              <TextInput
                style={[styles.input, { backgroundColor: colors.bgInput, color: colors.textPrimary, borderColor: colors.border }]}
                value={firstName}
                onChangeText={setFirstName}
                placeholder="First Name"
                placeholderTextColor={colors.textSecondary}
              />
            </View>
            <View style={styles.field}>
              <Text style={[styles.label, { color: colors.textSecondary }]}>Last Name</Text>
              <TextInput
                style={[styles.input, { backgroundColor: colors.bgInput, color: colors.textPrimary, borderColor: colors.border }]}
                value={lastName}
                onChangeText={setLastName}
                placeholder="Last Name"
                placeholderTextColor={colors.textSecondary}
              />
            </View>
          </View>

          <View>
            <Text style={[styles.label, { color: colors.textSecondary }]}>Email</Text>
            <TextInput
              style={[styles.input, { backgroundColor: colors.bgTertiary, color: colors.textSecondary, borderColor: colors.border }]}
              value={currentUser?.email || ''}
              editable={false}
            />
          </View>

          <View>
            <Text style={[styles.label, { color: colors.textSecondary }]}>Bio</Text>
            <TextInput
              style={[styles.input, styles.bioInput, { backgroundColor: colors.bgInput, color: colors.textPrimary, borderColor: colors.border }]}
              value={bio}
              onChangeText={setBio}
              placeholder="Tell us about yourself..."
              placeholderTextColor={colors.textSecondary}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />
          </View>

          <TouchableOpacity style={styles.saveButton} onPress={handleSave} disabled={isLoading}>
            <LinearGradient colors={['#667eea', '#764ba2']} style={styles.saveGradient}>
              {isLoading ? <ActivityIndicator color="#fff" /> : <Text style={styles.saveButtonText}>Save Changes</Text>}
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 12, paddingTop: 48 },
  backButton: { padding: 4 },
  headerTitle: { fontSize: 18, fontWeight: 'bold' },
  scrollContent: { paddingBottom: 40 },
  bannerContainer: { position: 'relative', marginBottom: 60 },
  banner: { height: 160, justifyContent: 'flex-end', alignItems: 'flex-end', padding: 16 },
  editBannerButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(0,0,0,0.3)', justifyContent: 'center', alignItems: 'center' },
  avatarContainer: { position: 'absolute', bottom: -50, left: 24 },
  avatar: { width: 100, height: 100, borderRadius: 50, justifyContent: 'center', alignItems: 'center', borderWidth: 4, borderColor: '#fff' },
  avatarText: { color: '#fff', fontSize: 40, fontWeight: 'bold' },
  editAvatarButton: { position: 'absolute', bottom: 0, right: 0, width: 32, height: 32, borderRadius: 16, backgroundColor: '#667eea', justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#fff' },
  card: { marginHorizontal: 16, padding: 20, borderRadius: 12 },
  row: { flexDirection: 'row', gap: 12, marginBottom: 16 },
  field: { flex: 1 },
  label: { fontSize: 13, fontWeight: '600', marginBottom: 8 },
  input: { height: 50, borderWidth: 1, borderRadius: 10, paddingHorizontal: 16, fontSize: 15, marginBottom: 16 },
  bioInput: { height: 100, paddingTop: 12 },
  saveButton: { borderRadius: 10, overflow: 'hidden', marginTop: 8 },
  saveGradient: { height: 50, justifyContent: 'center', alignItems: 'center' },
  saveButtonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});

export default ProfileScreen;
