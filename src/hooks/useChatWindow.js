import { useRef, useState } from 'react';

const MOCK_MESSAGES = [
  { id: '1', text: 'Hey, how are you?', sender: 'John Doe', isMine: false, timestamp: '10:30 AM' },
  {
    id: '2',
    text: "I'm doing great! Thanks for asking. How about you?",
    sender: 'Me',
    isMine: true,
    timestamp: '10:32 AM',
  },
  { id: '3', text: "I'm good too! Working on the new project.", sender: 'John Doe', isMine: false, timestamp: '10:33 AM' },
];

const useChatWindow = () => {
  const [messages, setMessages] = useState(MOCK_MESSAGES);
  const [inputText, setInputText] = useState('');
  const flatListRef = useRef(null);

  const handleContentSizeChange = () => {
    flatListRef.current?.scrollToEnd({ animated: true });
  };

  const sendMessage = () => {
    if (!inputText.trim()) {
      return;
    }

    const newMessage = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'Me',
      isMine: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((previousMessages) => [...previousMessages, newMessage]);
    setInputText('');

    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  return {
    messages,
    setMessages,
    inputText,
    setInputText,
    flatListRef,
    sendMessage,
    handleContentSizeChange,
  };
};

export default useChatWindow;