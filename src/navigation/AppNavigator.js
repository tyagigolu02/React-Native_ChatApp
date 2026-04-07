import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from '../context/AuthContext';
import { ActivityIndicator, View } from 'react-native';
import { useTheme } from '../context/ThemeContext';

// Screens — imported lazily to keep bundle small
import LandingScreen from '../screens/LandingScreen/LandingScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import ChatScreen from '../screens/ChatScreen/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';
import NewChatScreen from '../screens/NewChatScreen/NewChatScreen';
import AddContactScreen from '../screens/AddContactScreen/AddContactScreen';
import FriendProfileScreen from '../screens/FriendProfileScreen/FriendProfileScreen';
import GroupInfoScreen from '../screens/GroupInfoScreen/GroupInfoScreen';
import ArchivedChatsScreen from '../screens/ArchivedChatsScreen/ArchivedChatsScreen';
import HiddenChatsScreen from '../screens/HiddenChatsScreen/HiddenChatsScreen';
import VaultSettingsScreen from '../screens/VaultSettingsScreen/VaultSettingsScreen';
import BlockedUsersScreen from '../screens/BlockedUsersScreen/BlockedUsersScreen';
import JoinGroupScreen from '../screens/JoinGroupScreen/JoinGroupScreen';
import AboutScreen from '../screens/AboutScreen/AboutScreen';
import DevelopersScreen from '../screens/DevelopersScreen/DevelopersScreen';
import HelpScreen from '../screens/HelpScreen/HelpScreen';
import FeedbackScreen from '../screens/FeedbackScreen/FeedbackScreen';
import PrivacyScreen from '../screens/PrivacyScreen/PrivacyScreen';
import TermsScreen from '../screens/TermsScreen/TermsScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  const { isAuthenticated, isLoading } = useAuth();
  const { colors } = useTheme();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.bgPrimary }}>
        <ActivityIndicator size="large" color="#667eea" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: true,
          cardStyleInterpolator: ({ current }) => ({
            cardStyle: { opacity: current.progress },
          }),
        }}
        initialRouteName={isAuthenticated ? 'Chat' : 'Landing'}
      >
        <Stack.Screen 
          name="Landing" 
          component={LandingScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="NewChat" component={NewChatScreen} />
        <Stack.Screen name="AddContact" component={AddContactScreen} />
        <Stack.Screen name="FriendProfile" component={FriendProfileScreen} />
        <Stack.Screen name="GroupInfo" component={GroupInfoScreen} />
        <Stack.Screen name="ArchivedChats" component={ArchivedChatsScreen} />
        <Stack.Screen name="HiddenChats" component={HiddenChatsScreen} />
        <Stack.Screen name="VaultSettings" component={VaultSettingsScreen} />
        <Stack.Screen name="BlockedUsers" component={BlockedUsersScreen} />
        <Stack.Screen name="JoinGroup" component={JoinGroupScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Developers" component={DevelopersScreen} />
        <Stack.Screen name="Help" component={HelpScreen} />
        <Stack.Screen name="Feedback" component={FeedbackScreen} />
        <Stack.Screen name="Privacy" component={PrivacyScreen} />
        <Stack.Screen name="Terms" component={TermsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
