import { View, Text, ScrollView } from "react-native";
import { styles } from "./ChatBox.styles";

export default function ChatBox({ messages, userName, scrollViewRef }) {
  return (
    <ScrollView
      ref={scrollViewRef}
      style={styles.messagesContainer}
      contentContainerStyle={styles.messagesContent}
    >
      {messages.map((message, index) => (
        <View
          key={index}
          style={
            message.userHandle != userName
              ? styles.userMessage
              : styles.otherMessage
          }
        >
          <Text style={styles.messageText}>{message.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
