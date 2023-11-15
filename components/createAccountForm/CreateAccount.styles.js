import { StyleSheet } from "react-native";
import { Colors, Grid, Radius } from "../../theme/constants";

export const styles = StyleSheet.create({
  container: {
    width: "76%",
    gap: Grid.small,
  },
  buttonContainer: {
    marginVertical: Grid.small,
  },
  buttons: {
    backgroundColor: Colors.primary,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    color: Colors.textPrimary,
    borderRadius: Radius.titanic,
  },
});
