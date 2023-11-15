import { Text, View, Button } from "react-native";
import { styles } from "./LoginScreen.styles";
import Background from "../../components/core/background/Background";

export default function LoginScreen({ navigation }) {
  return (
    <Background>
        <Text style={styles.logoText}>LOGINSCREEN</Text>
        <Button
          title="createAccount"
          onPress={() => navigation.navigate("CreateAccount")}
        ></Button>
        <Button
          title="profileScreen"
          onPress={() => navigation.navigate("ProfileScreen")}
        ></Button>
        <Button
          title="chatsScreen"
          onPress={() => navigation.navigate("ChatsScreen")}
        ></Button>
        <Button
          title="chatScreen"
          onPress={() => navigation.navigate("ChatScreen")}
        ></Button>
    </Background>
  );
}
