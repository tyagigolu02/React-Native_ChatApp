import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import API_URL from '../constants/Config';

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

const login = async (username, password) => {
    setIsLoading(true);
    try {
      // Django ke login endpoint par request (Apne django url ke hisab se change kar lena)
      const response = await apiClient.post('/token/', {
        username,
        password,
      });

      if (response.data.access) {
        let token = response.data.access;
        setUserToken(token);
        setUserInfo(response.data.user); // Agar tera backend user data bhejta hai
        
        // Token phone ki memory mein save kar lo
        await AsyncStorage.setItem('userToken', token);
        await AsyncStorage.setItem('userInfo', JSON.stringify(response.data.user));
        
        console.log("Login Success!");
      }
    } catch (e) {
      console.error(`Login error: ${e.response?.data?.detail || e.message}`);
      alert("Login Failed: Please check username and password.");
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    setUserToken(null);
    setUserInfo(null);
    await AsyncStorage.removeItem('userToken');
    await AsyncStorage.removeItem('userInfo');
    setIsLoading(false);
  };

  const register = async (userData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/chat/register/`, {
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
  }

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
