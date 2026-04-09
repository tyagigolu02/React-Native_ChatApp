import React from 'react';
import { Text, View } from 'react-native';
import styles from './ChatWindow.styles';

const ChatWindowMessageItem = ({ item, colors }) => {
  return (
    <View style={[styles.messageContainer, item.isMine ? styles.myMessage : styles.theirMessage]}>
      <View style={[styles.messageBubble, { backgroundColor: item.isMine ? '#667eea' : colors.bgCard }]}>
        <Text style={[styles.messageText, { color: item.isMine ? '#fff' : colors.textPrimary }]}>
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
};

export default ChatWindowMessageItem;