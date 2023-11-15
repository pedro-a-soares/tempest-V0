import { StyleSheet } from "react-native";
import { Colors, Grid, Radius } from "../../theme/constants";

export const styles = StyleSheet.create({
  container: {
    width: "76%",
    gap: Grid.small,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    marginVertical: Grid.small,
    width: "100%",
  },
  logo: {
    width: Grid.titanic,
    height: Grid.titanic,
    borderRadius: Radius.xTitanic,
    justifyContent: "center",
    alignItems: "center",
  },
  genderButton: {
    width: "100%",
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
