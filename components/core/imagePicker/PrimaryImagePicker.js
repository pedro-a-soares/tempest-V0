import { View, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { styles } from "./PrimaryImagePicker.styles";
import PressableText from "../pressableText/PressableText";

export default function PrimaryImagePicker({ avatar, onSelectAvatar }) {
  async function selectImage() {
    try {
      const image = await ImagePicker.launchImageLibraryAsync({
        base64: true,
        allowsEditing: true,
        aspect: [4, 3],
      });

      // workarround for deprecated warning
      delete image.canceled;

      if (image.assets[0].base64) {
        const base64Image = "data:image/png;base64," + image.assets[0].base64;
        onSelectAvatar(base64Image);
      }
    } catch (error) {
      return;
    }
  }

  return (
    <View>
      <Image style={styles.logo} source={{ uri: avatar }} />
      <PressableText
        text="Insert Image"
        textStyle={styles.buttonText}
        onPressFn={selectImage}
      />
    </View>
  );
}
