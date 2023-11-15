import { StyleSheet } from "react-native";
import { Colors, Grid, Width } from "../../theme/constants";

export const styles = StyleSheet.create({
  container: {
    width: Width.small,
    maxWidth: Width.small,
    padding: Grid.small,
  },
  header: {
    textAlign: "center",
    marginBottom: Grid.small,
    fontWeight: "bold",
    color: Colors.textPrimary,
  },
  footer: {
    marginTop: Grid.small,
  },
  buttonText: {
    textAlign: "center",
    color: Colors.textPrimary,
  },
});
