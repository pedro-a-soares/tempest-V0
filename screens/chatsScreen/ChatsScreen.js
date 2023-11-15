import { View } from "react-native";
import { styles } from "./ChatsScreen.styles";
import PrimaryText from "../../components/core/primaryText/PrimaryText";

export default function ChatsScreen() {
  return (
    <View style={styles.container}>
      <PrimaryText>CHATS SCREEN</PrimaryText>
    </View>
  );
}
