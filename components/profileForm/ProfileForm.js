import React, { useState } from "react";
import { View } from "react-native";
import PressableInput from "../core/pressableInput/PressableInput";
import CenteredModal from "../core/centeredModal/CenteredModal";
import GenderPicker from "../genderPicker/GenderPicker";
import { styles } from "./ProfileForm.styles";
import { defaultAvatar } from "../../theme/constants";
import PrimaryImagePicker from "../core/imagePicker/PrimaryImagePicker";
import CountryPicker from "../countryPicker/CountryPicker";
import PrimaryText from "../core/primaryText/PrimaryText";
import PressableText from "../core/pressableText/PressableText";

export default function ProfileForm({ profileInfo, saveProfile }) {
  const [isGenderPickerVisible, setIsGenderPickerVisible] = useState(false);
  const [isCountryPickerVisible, setIsCountryPickerVisible] = useState(false);
  const [profileValues, setProfileValues] = useState(profileInfo);

  function onSelectAvatar(newAvatar) {
    onProfileChangeHandler("avatar", newAvatar);
  }

  function onSelectGender(selectedValue) {
    onProfileChangeHandler("gender", selectedValue);
    setIsGenderPickerVisible(false);
  }

  function onSelectCountry(selectedValue) {
    onProfileChangeHandler("country", selectedValue);
    setIsCountryPickerVisible(false);
  }

  function onProfileChangeHandler(inputIdentifier, enteredValue) {
    setProfileValues((currValues) => {
      return {
        ...currValues,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  function openGenderModal() {
    setIsGenderPickerVisible(true);
  }

  function openCountryModal() {
    setIsCountryPickerVisible(true);
  }

  return (
    <View style={styles.container}>
      <PrimaryImagePicker
        avatar={profileValues.avatar ? profileValues.avatar : defaultAvatar}
        onSelectAvatar={onSelectAvatar}
      />
      <PrimaryText>{profileValues.name}</PrimaryText>
      <PrimaryText>{profileValues.handle}</PrimaryText>
      <View style={styles.genderButton}>
        <PressableInput
          textInputConfig={{
            placeholder: "gender",
            value: profileValues.gender,
          }}
          onPressFn={openGenderModal}
        />
      </View>
      <View style={styles.genderButton}>
        <PressableInput
          textInputConfig={{
            placeholder: "country",
            value: profileValues.country,
          }}
          onPressFn={openCountryModal}
        />
      </View>
      <View style={styles.buttonContainer}>
        <PressableText
          text="Save"
          onPressFn={() => saveProfile(profileValues)}
          buttonStyle={styles.buttons}
          textStyle={styles.buttonText}
        />
      </View>
      <CenteredModal
        visible={isCountryPickerVisible}
        onOutsideTouch={() => setIsCountryPickerVisible(false)}
      >
        <CountryPicker onSelectCountry={onSelectCountry} />
      </CenteredModal>
      <CenteredModal
        visible={isGenderPickerVisible}
        onOutsideTouch={() => setIsGenderPickerVisible(false)}
      >
        <GenderPicker onSelectGender={onSelectGender} />
      </CenteredModal>
    </View>
  );
}
