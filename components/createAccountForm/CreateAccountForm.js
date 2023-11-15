import { useState } from "react";
import { View, Alert } from "react-native";
import Input from "../../components/core/input/Input";
import { styles } from "./CreateAccount.styles";
import PressableText from "../core/pressableText/PressableText";

export default function CreateAccountForm({ createAccount }) {
  const [profileValues, setProfileValues] = useState({
    name: "",
    handle: "",
    password: "",
  });

  function profileChangeHandler(inputIdentifier, enteredValue) {
    setProfileValues((currValues) => {
      return { ...currValues, [inputIdentifier]: enteredValue };
    });
  }

  async function onSubmit() {
    if (Object.values(profileValues).includes("")) {
      Alert.alert("Error", "Please insert a name, email and a password.");
      return;
    }

    await createAccount(profileValues);
  }

  return (
    <View style={styles.container}>
      <Input
        textInputConfig={{
          placeholder: "name",
          onChangeText: (text) => profileChangeHandler("name", text),
          value: profileValues.name,
        }}
      />
      <Input
        textInputConfig={{
          placeholder: "handle",
          autoCapitalize: "none",
          onChangeText: (text) => profileChangeHandler("handle", text),
          value: profileValues.email,
        }}
      />
      <Input
        textInputConfig={{
          placeholder: "password",
          autoCapitalize: "none",
          secureTextEntry: true,
          onChangeText: (text) => profileChangeHandler("password", text),
          value: profileValues.password,
        }}
      />
      <View style={styles.buttonContainer}>
        <PressableText
          text="Create"
          onPressFn={onSubmit}
          buttonStyle={styles.buttons}
          textStyle={styles.buttonText}
        />
      </View>
    </View>
  );
}
