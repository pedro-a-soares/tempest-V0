import { Text, View } from "react-native";
import { styles } from "./Divider.styles";

export default function Divider({ midText }) {
  return (
    <View style={styles.dividerContainer}>
      <View style={styles.dividerLine} />
      <Text style={styles.divider}>{midText}</Text>
      <View style={styles.dividerLine} />
    </View>
  );
}
