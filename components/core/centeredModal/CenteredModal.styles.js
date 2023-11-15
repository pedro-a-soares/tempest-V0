import { StyleSheet } from "react-native";
import { Colors, Grid, Radius } from "../../../theme/constants";

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: Grid.big,
  },
  modalView: {
    padding: Grid.tiny,
    backgroundColor: Colors.overlayPrimary,
    borderRadius: Radius.big,
    shadowColor: Colors.backgroundPrimary,
  },
});
