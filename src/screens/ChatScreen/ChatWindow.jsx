import React from 'react';
import { View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import useChatWindow from '../../hooks/useChatWindow';
import styles from './ChatWindow.styles';
import ChatWindowContent from './ChatWindowContent';

const ChatWindow = ({ chat, navigation }) => {
  const { colors } = useTheme();
  const {
    messages,
    inputText,
    setInputText,
    flatListRef,
    sendMessage,
    handleContentSizeChange,
  } = useChatWindow();

  return (
    <View style={[styles.container, { backgroundColor: colors.bgPrimary }]}>
      <ChatWindowContent
        chat={chat}
        navigation={navigation}
        colors={colors}
        messages={messages}
        inputText={inputText}
        setInputText={setInputText}
        flatListRef={flatListRef}
        sendMessage={sendMessage}
        onContentSizeChange={handleContentSizeChange}
      />
    </View>
  );
};

export default ChatWindow;
