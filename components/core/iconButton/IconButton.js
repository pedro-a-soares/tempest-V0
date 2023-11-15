import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function IconButton({ buttonStyle, onPressFn, iconName }) {
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPressFn}>
      <Icon name={iconName} size={30} color="white" />
    </TouchableOpacity>
  );
}
