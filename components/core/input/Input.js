import { TextInput } from "react-native";
import { styles } from "./Input.styles";
import { Colors } from "../../../theme/constants";

export default function Input({ textInputConfig, styleProps = {} }) {
  return (
    <TextInput
      {...textInputConfig}
      placeholderTextColor={Colors.textSecondary}
      style={[styles.textInput, styleProps]}
    />
  );
}
