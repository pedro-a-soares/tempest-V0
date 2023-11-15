import { StyleSheet, View } from "react-native";
import { Colors, Grid } from "../../theme/constants";
import PressableText from "../core/pressableText/PressableText";

export default function CountryPicker({ onSelectCountry }) {
  const countries = ["Portugal", "Spain", "Other"];
  return (
    <>
      {countries.map((country) => {
        return (
          <View key={country} style={styles.pickerWrapper}>
            <PressableText
              text={country}
              onPressFn={onSelectCountry.bind(this, country)}
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
