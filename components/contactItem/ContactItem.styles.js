import { StyleSheet } from "react-native";
import { Colors, FontSizes, Grid, Radius } from "../../theme/constants";

export const styles = StyleSheet.create({
  contactItem: {
    flexDirection: "row",
    marginBottom: Grid.sizable,
    alignItems: "center",
  },
  contactItemText: {
    fontSize: FontSizes.base,
    color: Colors.textPrimary,
  },
  contactItemDescription: {
    fontSize: FontSizes.small,
    color: Colors.textSecondary,
  },
  logo: {
    width: Grid.huge,
    height: Grid.huge,
    borderRadius: Radius.huge,
    justifyContent: "center",
    alignItems: "center",
    marginRight: Grid.medium,
  },
  identity: {
    flexDirection: "column",
  },
});
