import { Text, View, Alert } from "react-native";
import Input from "../core/input/Input";
import { useState } from "react";
import { addContact } from "../../services/contactsService";
import { styles } from "./AddContactForm.styles";
import PressableText from "../core/pressableText/PressableText";

export default function AddContactForm({
  closeModal,
  onContactsChangeHandler,
}) {
  const [contact, setContact] = useState("");

  function onContactChangeHandler(enteredValue) {
    setContact(enteredValue);
  }

  async function submitContact() {
    try {
      const contacts = await addContact(contact);
      onContactsChangeHandler(contacts);
      closeModal();
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>New contact</Text>
      <Input
        textInputConfig={{
          placeholder: "handle",
          onChangeText: onContactChangeHandler,
          value: contact,
          autoCapitalize: "none",
        }}
      />
      <View style={styles.footer}>
        <PressableText
          text="Save"
          textStyle={styles.buttonText}
          onPressFn={submitContact}
        />
      </View>
    </View>
  );
}
