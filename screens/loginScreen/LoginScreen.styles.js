import { StyleSheet } from "react-native";
import { Colors, FontSizes, Grid } from "../../theme/constants";

export const styles = StyleSheet.create({
  logoContainer: {
    flex: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: Grid.giant + Grid.large,
  },
  logoText: {
    fontWeight: "bold",
    fontSize: FontSizes.giant,
    color: Colors.textPrimary,
  },
  container: {
    flex: 12,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
