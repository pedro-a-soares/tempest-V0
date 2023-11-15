import { ActivityIndicator, View } from "react-native";
import { Colors } from "../../../theme/constants";
import { styles } from "./LoadingOverlay.styles";

export default function LoadingOverlay() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.secondary} />
    </View>
  );
}
