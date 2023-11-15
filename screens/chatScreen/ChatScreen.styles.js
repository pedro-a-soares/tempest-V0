import { StyleSheet } from "react-native";
import { Colors, Grid } from "../../theme/constants";

export const styles = StyleSheet.create({
  inputContainer: {
    height: "30%",
    flexDirection: "row",
    alignItems: "center",
    padding: Grid.base,
  },
  input: {
    width: "85%",
  },
  sendButton: {
    backgroundColor: Colors.headerPrimary,
    marginLeft: Grid.base,
  },
  sendButtonText: {
    color: Colors.textPrimary,
  },
});
