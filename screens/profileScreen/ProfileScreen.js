import { View } from "react-native";
import { styles } from "./ProfileScreen.styles";
import PrimaryText from "../../components/core/primaryText/PrimaryText";

export default function ProfileScreen() {

  return (
    <View style={styles.container}>
      <PrimaryText>PROFILE</PrimaryText>
    </View>
  );
}
