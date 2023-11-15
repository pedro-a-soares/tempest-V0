import { Text } from "react-native";
import { styles } from "./PrimaryText.styles";

export default function PrimaryText({ children }) {
  return <Text style={styles.textInput}>{children}</Text>;
}
