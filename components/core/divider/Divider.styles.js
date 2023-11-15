import { Colors, Grid, FontSizes, Border } from "../../../theme/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  dividerLine: {
    flex: 1,
    height: Border.tiny,
    backgroundColor: Colors.backgroundTertiary,
  },
  divider: {
    paddingHorizontal: Grid.small,
    color: Colors.textPrimary,
    fontSize: FontSizes.large,
  },
});
