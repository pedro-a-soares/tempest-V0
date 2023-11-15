import { StyleSheet } from "react-native";
import { Colors, Grid } from "../../theme/constants";

export const styles = StyleSheet.create({
  messagesContainer: {
    height: "70%",
  },
  messagesContent: {
    justifyContent: "flex-end",
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: Colors.primary,
    borderRadius: Grid.base,
    margin: Grid.base,
    padding: Grid.base,
  },
  otherMessage: {
    alignSelf: "flex-start",
    backgroundColor: Colors.backgroundSecondary,
    borderRadius: Grid.base,
    margin: Grid.base,
    padding: Grid.base,
  },
  messageText: {
    color: Colors.textPrimary,
  },
});
