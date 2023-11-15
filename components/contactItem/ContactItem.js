import { Text, View, TouchableOpacity, Image } from "react-native";
import { defaultAvatar } from "../../theme/constants";
import { styles } from "./ContactItem.styles";

export default function ContactItem({ contactData, onPressContact }) {
  const contactInfo = {
    handle: contactData.item.handle,
    avatar: contactData.item.avatar ? contactData.item.avatar : defaultAvatar,
    name: contactData.item.name,
    gender: contactData.item.gender ?? "undisclosed",
    country: contactData.item.country ?? "undisclosed",
  };

  return (
    <TouchableOpacity onPress={onPressContact}>
      <View style={styles.contactItem}>
        <View>
          <Image
            style={styles.logo}
            source={{
              uri: contactInfo.avatar,
            }}
          />
        </View>
        <View style={styles.identity}>
          <Text
            style={styles.contactItemText}
          >{`${contactInfo.name} (${contactInfo.handle})`}</Text>
          <Text
            style={styles.contactItemDescription}
          >{`Gender: ${contactInfo.gender}   Country: ${contactInfo.country}`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
