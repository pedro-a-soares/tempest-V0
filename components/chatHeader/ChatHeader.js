import { View, Text, StyleSheet, Image } from "react-native";
import { Colors, Grid, Radius, defaultAvatar } from "../../theme/constants";

export function ChatHeader({ personName, personAvatar }) {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.logo}
          source={{ uri: personAvatar ? personAvatar : defaultAvatar }}
        />
      </View>
      <Text style={styles.text}>{personName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: Grid.huge,
    height: Grid.huge,
    borderRadius: Radius.huge,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
    marginLeft: -16,
  },
  text: {
    color: Colors.textPrimary,
    fontSize: 18,
  },
});
