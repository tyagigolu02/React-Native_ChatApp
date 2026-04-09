import React from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './ChatWindow.styles';
import ChatWindowMessageItem from './ChatWindowMessageItem';

const ChatWindowContent = ({
  chat,
  navigation,
  colors,
  messages,
  inputText,
  setInputText,
  flatListRef,
  sendMessage,
  onContentSizeChange,
}) => {
  return (
    <>
      <View style={[styles.header, { backgroundColor: colors.bgCard }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={colors.textPrimary} />
        </TouchableOpacity>

        <View style={[styles.headerAvatar, { backgroundColor: '#667eea' }]}>
          <Text style={styles.headerAvatarText}>{chat?.name?.charAt(0).toUpperCase() || 'C'}</Text>
        </View>

        <View style={styles.headerInfo}>
          <Text style={[styles.headerName, { color: colors.textPrimary }]}>{chat?.name || 'Chat'}</Text>
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

      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={({ item }) => <ChatWindowMessageItem item={item} colors={colors} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messagesList}
        onContentSizeChange={onContentSizeChange}
      />

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={90}>
        <View style={[styles.inputContainer, { backgroundColor: colors.bgCard }]}>
          <TouchableOpacity style={styles.inputButton}>
            <Ionicons name="happy-outline" size={24} color={colors.textSecondary} />
          </TouchableOpacity>

          <TextInput
            style={[styles.input, { backgroundColor: colors.bgSecondary, color: colors.textPrimary }]}
            placeholder="Type a message..."
            placeholderTextColor={colors.textSecondary}
            value={inputText}
            onChangeText={setInputText}
            multiline
          />

          <TouchableOpacity style={styles.inputButton}>
            <Ionicons name="attach-outline" size={24} color={colors.textSecondary} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.sendButton, { backgroundColor: '#667eea' }]} onPress={sendMessage}>
            <Ionicons name="send" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default ChatWindowContent;