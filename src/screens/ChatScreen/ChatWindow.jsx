import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';

// Mock messages for MVP
const MOCK_MESSAGES = [
  {
    id: '1',
    text: 'Hey, how are you?',
    sender: 'John Doe',
    isMine: false,
    timestamp: '10:30 AM',
  },
  {
    id: '2',
    text: "I'm doing great! Thanks for asking. How about you?",
    sender: 'Me',
    isMine: true,
    timestamp: '10:32 AM',
  },
  {
    id: '3',
    text: "I'm good too! Working on the new project.",
    sender: 'John Doe',
    isMine: false,
    timestamp: '10:33 AM',
  },
];

const ChatWindow = ({ chat, navigation }) => {
  const { colors } = useTheme();
  const [messages, setMessages] = useState(MOCK_MESSAGES);
  const [inputText, setInputText] = useState('');
  const flatListRef = useRef(null);

  const sendMessage = () => {
    if (!inputText.trim()) return;

    const newMessage = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'Me',
      isMine: true,
      timestamp: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setMessages([...messages, newMessage]);
    setInputText('');
    
    // Scroll to bottom
    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  const renderMessage = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.isMine ? styles.myMessage : styles.theirMessage,
      ]}
    >
      <View
        style={[
          styles.messageBubble,
          {
            backgroundColor: item.isMine ? '#667eea' : colors.bgCard,
          },
        ]}
      >
        <Text
          style={[
            styles.messageText,
            { color: item.isMine ? '#fff' : colors.textPrimary },
          ]}
        >
          {item.text}
        </Text>
        <Text
          style={[
            styles.messageTime,
            { color: item.isMine ? 'rgba(255,255,255,0.7)' : colors.textSecondary },
          ]}
        >
          {item.timestamp}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.bgPrimary }]}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: colors.bgCard }]}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color={colors.textPrimary} />
        </TouchableOpacity>

        <View
          style={[styles.headerAvatar, { backgroundColor: '#667eea' }]}
        >
          <Text style={styles.headerAvatarText}>
            {chat?.name?.charAt(0).toUpperCase() || 'C'}
          </Text>
        </View>

        <View style={styles.headerInfo}>
          <Text style={[styles.headerName, { color: colors.textPrimary }]}>
            {chat?.name || 'Chat'}
          </Text>
          <Text style={[styles.headerStatus, { color: colors.textSecondary }]}>
            {chat?.isOnline ? 'Online' : 'Offline'}
          </Text>
        </View>

        <TouchableOpacity style={styles.headerButton}>
          <Ionicons name="call-outline" size={22} color={colors.textPrimary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerButton}>
          <Ionicons name="videocam-outline" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerButton}>
          <Ionicons name="ellipsis-vertical" size={20} color={colors.textPrimary} />
        </TouchableOpacity>
      </View>

      {/* Messages */}
      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messagesList}
        onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
      />

      {/* Input */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={90}
      >
        <View style={[styles.inputContainer, { backgroundColor: colors.bgCard }]}>
          <TouchableOpacity style={styles.inputButton}>
            <Ionicons name="happy-outline" size={24} color={colors.textSecondary} />
          </TouchableOpacity>

          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: colors.bgSecondary,
                color: colors.textPrimary,
              },
            ]}
            placeholder="Type a message..."
            placeholderTextColor={colors.textSecondary}
            value={inputText}
            onChangeText={setInputText}
            multiline
          />

          <TouchableOpacity style={styles.inputButton}>
            <Ionicons name="attach-outline" size={24} color={colors.textSecondary} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.sendButton, { backgroundColor: '#667eea' }]}
            onPress={sendMessage}
          >
            <Ionicons name="send" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  backButton: {
    marginRight: 12,
  },
  headerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  headerAvatarText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerInfo: {
    flex: 1,
  },
  headerName: {
    fontSize: 16,
    fontWeight: '600',
  },
  headerStatus: {
    fontSize: 12,
    marginTop: 2,
  },
  headerButton: {
    padding: 8,
    marginLeft: 4,
  },
  messagesList: {
    padding: 16,
  },
  messageContainer: {
    marginBottom: 12,
    maxWidth: '80%',
  },
  myMessage: {
    alignSelf: 'flex-end',
  },
  theirMessage: {
    alignSelf: 'flex-start',
  },
  messageBubble: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 18,
  },
  messageText: {
    fontSize: 15,
    lineHeight: 20,
  },
  messageTime: {
    fontSize: 11,
    marginTop: 4,
    alignSelf: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
  },
  inputButton: {
    padding: 8,
  },
  input: {
    flex: 1,
    maxHeight: 100,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    fontSize: 15,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ChatWindow;
