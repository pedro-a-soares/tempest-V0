import { StyleSheet } from "react-native";
import { Colors, Grid, Radius } from "../../../theme/constants";

export const styles = StyleSheet.create({
  textInput: {
    height: Grid.huge,
    borderWidth: 1,
    borderColor: Colors.backgroundSecondary,
    backgroundColor: Colors.backgroundSecondary,
    color: Colors.textPrimary,
    borderRadius: Radius.big,
    width: "100%",
    padding: Grid.base,
    textAlignVertical: "center",
  },
});
