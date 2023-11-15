import { StyleSheet } from "react-native";
import { Colors, Grid } from "../../../theme/constants";

export const styles = StyleSheet.create({
  logo: {
    width: Grid.titanic,
    height: Grid.titanic,
    borderRadius: Grid.enormous,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: Grid.small,
  },
  buttonText: {
    textAlign: "center",
    color: Colors.textPrimary,
  },
});
