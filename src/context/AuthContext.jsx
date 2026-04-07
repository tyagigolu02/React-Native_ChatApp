import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import API_URL from '../config';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('currentUser').then((stored) => {
      if (stored) {
        setCurrentUser(JSON.parse(stored));
        setIsAuthenticated(true);
      }
      setIsLoading(false);
    });
  }, []);

  const login = (userData) => {
    setCurrentUser(userData);
    setIsAuthenticated(true);
    AsyncStorage.setItem('currentUser', JSON.stringify(userData));
    return { success: true };
  };

  const register = async (userData) => {
    try {
      const response = await fetch(`${API_URL}/chat/register/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'ngrok-skip-browser-warning': 'true' },
        body: JSON.stringify({
          email: userData.email,
          password: userData.password,
          firstName: userData.firstName,
          lastName: userData.lastName,
        }),
      });
      if (response.ok) return { success: true };
      const errorData = await response.json();
      return { success: false, error: errorData.error };
    } catch (error) {
      return { success: false, error: 'Cannot connect to server' };
    }
  };

  const logout = async () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
    await AsyncStorage.removeItem('currentUser');
  };

  const updateUser = async (updatedData) => {
    const updatedUser = { ...currentUser, ...updatedData };
    setCurrentUser(updatedUser);
    await AsyncStorage.setItem('currentUser', JSON.stringify(updatedUser));
    return { success: true };
  };

  const refreshProfile = async () => {
    try {
      const response = await fetch(`${API_URL}/chat/profile/get/`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'ngrok-skip-browser-warning': 'true' },
      });
      if (response.ok) {
        const profileData = await response.json();
        await updateUser({
          firstName: profileData.firstName,
          lastName: profileData.lastName,
          email: profileData.email,
          bio: profileData.bio,
          profile_pic_url: profileData.profile_pic_url,
          profile_pic_updated_at: profileData.profile_pic_updated_at,
          preferred_language: profileData.preferred_language,
        });
        return { success: true };
      }
      return { success: false, error: 'Failed to refresh profile' };
    } catch {
      return { success: false, error: 'Cannot connect to server' };
    }
  };

  const value = {
    currentUser,
    isAuthenticated,
    isLoading,
    login,
    register,
    logout,
    updateUser,
    refreshProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
