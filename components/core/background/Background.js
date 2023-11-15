import { ImageBackground } from "react-native";
import { styles } from "./Background.styles";

export default function Background({ children }) {
  return (
    <ImageBackground
      source={require("../../../assets/images/chatBack.png")}
      resizeMode="cover"
      style={styles.rootScreen}
    >
      {children}
    </ImageBackground>
  );
}
