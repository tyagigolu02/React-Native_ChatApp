import React, { useState } from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from '../../context/ThemeContext';
import { useScreenTitle } from '../../context/ScreenTitleContext';
import ChatSidebar from './ChatSidebar';
import ChatWindow from './ChatWindow';
import WelcomeScreen from './WelcomeScreen';

const ChatScreen = ({ navigation }) => {
  useScreenTitle('TranslaTalk | Messages');
  const { colors } = useTheme();
  const { width } = useWindowDimensions();
  const [selectedChat, setSelectedChat] = useState(null);
  
  // On mobile, hide sidebar when chat is selected
  const isMobile = width < 768;
  const showSidebar = !isMobile || !selectedChat;
  const showChat = !isMobile || selectedChat;

  return (
    <View style={[styles.container, { backgroundColor: colors.bgPrimary }]}>
      <StatusBar style={colors.isDark ? 'light' : 'dark'} />
      
      <View style={styles.content}>
        {/* Sidebar */}
        {showSidebar && (
          <View style={[styles.sidebarContainer, isMobile && styles.fullWidth]}>
            <ChatSidebar
              onSelectChat={setSelectedChat}
              selectedChatId={selectedChat?.id}
              navigation={navigation}
            />
          </View>
        )}

        {/* Chat Window or Welcome Screen */}
        {showChat && (
          <View style={[styles.chatContainer, isMobile && styles.fullWidth]}>
            {selectedChat ? (
              <ChatWindow chat={selectedChat} navigation={navigation} />
            ) : (
              <WelcomeScreen />
            )}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebarContainer: {
    width: 350,
    borderRightWidth: 1,
    borderRightColor: 'rgba(0,0,0,0.1)',
  },
  chatContainer: {
    flex: 1,
  },
  fullWidth: {
    width: '100%',
  },
});

export default ChatScreen;
