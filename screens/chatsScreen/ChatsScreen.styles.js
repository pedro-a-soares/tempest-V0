import { StyleSheet } from "react-native";
import { Colors, FontSizes, Grid } from "../../theme/constants";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.tertiary,
    flex: 1,
    padding: Grid.medium,
  },
  addContactButton: {
    position: "absolute",
    top: 500,
    right: Grid.huge,
    backgroundColor: Colors.primary,
    borderRadius: Grid.medium,
    padding: Grid.base,
  },
  noContacts: {
    color: Colors.textPrimary,
    textAlign: "center",
    marginTop: "70%",
    fontSize: FontSizes.base,
  },
});
