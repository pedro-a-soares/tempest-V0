import { View } from "react-native";
import { styles } from "./CreateAccountScreen.styles";
import Background from "../../components/core/background/Background";

import PrimaryText from "../../components/core/primaryText/PrimaryText";

export default function CreateAccountScreen() {
  return (
    <Background>
      <View style={styles.container}>
        <PrimaryText>CREATE ACCOUNT</PrimaryText>
      </View>
    </Background>
  );
}
