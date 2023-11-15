import { Pressable, TextInput, View } from "react-native";
import { Colors } from "../../../theme/constants";
import { styles } from "./PressableInput.styles";

export default function PressableInput({
  textInputConfig,
  styleProps = {},
  onPressFn,
}) {
  return (
    <>
      <Pressable onPress={onPressFn}>
        <View pointerEvents="none">
          <TextInput
            {...textInputConfig}
            placeholderTextColor={Colors.textSecondary}
            style={[styleProps, styles.textInput]}
          />
        </View>
      </Pressable>
    </>
  );
}
