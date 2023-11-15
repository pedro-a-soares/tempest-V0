import { StyleSheet, View } from "react-native";
import { Colors, Grid } from "../../theme/constants";
import PressableText from "../core/pressableText/PressableText";

export default function GenderPicker({ onSelectGender }) {
  const genders = ["male", "female", "prefer not to answer"];
  return (
    <>
      {genders.map((gender) => {
        return (
          <View key={gender} style={styles.pickerWrapper}>
            <PressableText
              text={gender}
              onPressFn={onSelectGender.bind(this, gender)}
              textStyle={styles.pickerText}
            />
          </View>
        );
      })}
    </>
  );
}

const styles = StyleSheet.create({
  pickerWrapper: {
    width: 200,
    marginBottom: Grid.small,
  },
  pickerText: {
    textAlign: "center",
    color: Colors.textPrimary,
    padding: 8,
    borderBottomColor: Colors.tertiary,
    borderBottomWidth: 2,
  },
});
