import { Pressable, Text, View } from "react-native";
import { Colors, Radius } from "../../../theme/constants";
import { styles } from "./PressableText.styles";

export default function PressableText({
  text,
  textStyle,
  onPressFn,
  buttonStyle,
}) {
  return (
    <Pressable
      onPress={onPressFn}
      style={({ pressed }) => [
        buttonStyle,
        {
          backgroundColor: pressed
            ? Colors.pressedColor
            : buttonStyle?.backgroundColor,
          borderRadius: Radius.big,
        },
      ]}
    >
      <View pointerEvents="none" style={styles.wrapperView}>
        <Text style={textStyle}>{text}</Text>
      </View>
    </Pressable>
  );
}
