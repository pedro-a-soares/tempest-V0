import { StyleSheet } from "react-native";
import { Border, Colors, Grid, Radius } from "../../../theme/constants";

export const styles = StyleSheet.create({
  textInput: {
    height: Grid.huge + Grid.tiny,
    borderWidth: Border.tiny,
    borderColor: Colors.backgroundSecondary,
    backgroundColor: Colors.backgroundSecondary,
    color: Colors.textPrimary,
    borderRadius: Radius.big,
    width: "100%",
    padding: Grid.base,
  },
});
