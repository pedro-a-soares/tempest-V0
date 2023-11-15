import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
});
