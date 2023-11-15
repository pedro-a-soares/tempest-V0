import React, { useState } from "react";
import { Alert, View } from "react-native";
import Input from "../core/input/Input";
import Divider from "../core/divider/Divider";
import { styles } from "./LoginForm.styles";
import PressableText from "../core/pressableText/PressableText";

export default function LoginForm({ signIn, onCreateAccount }) {
  const [loginValues, setLoginValues] = useState({
    username: "",
    password: "",
  });

  function loginChangeHandler(inputIdentifier, enteredValue) {
    setLoginValues((currLoginValues) => {
      return {
        ...currLoginValues,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  async function onSubmit() {
    if (Object.values(loginValues).includes("")) {
      Alert.alert("Error", "Please insert an email and a password.");
      return;
    }

    await signIn(loginValues.username, loginValues.password);
  }

  return (
    <View style={styles.container}>
      <Input
        textInputConfig={{
          placeholder: "handle",
          onChangeText: (text) => loginChangeHandler("username", text),
          value: loginValues.username,
        }}
      />
      <Input
        textInputConfig={{
          placeholder: "password",
          autoCapitalize: "none",
          secureTextEntry: true,
          onChangeText: (text) => loginChangeHandler("password", text),
          value: loginValues.password,
        }}
      />
      <View style={styles.buttonContainer}>
        <PressableText
          text="Sign in"
          onPressFn={onSubmit}
          buttonStyle={styles.buttons}
          textStyle={styles.buttonText}
        />
      </View>
      <Divider midText="or" />
      <View style={styles.buttonContainer}>
        <PressableText
          text="Create account"
          onPressFn={onCreateAccount}
          buttonStyle={styles.buttons}
          textStyle={styles.buttonText}
        />
      </View>
    </View>
  );
}
