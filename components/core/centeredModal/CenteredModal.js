import { Modal, TouchableWithoutFeedback } from "react-native";
import { View } from "react-native";
import { styles } from "./CenteredModal.styles";

export default function CenteredModal({ visible, onOutsideTouch, children }) {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <TouchableWithoutFeedback onPress={onOutsideTouch}>
        <View style={styles.centeredView}>
          <TouchableWithoutFeedback>
            <View style={styles.modalView}>{children}</View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
