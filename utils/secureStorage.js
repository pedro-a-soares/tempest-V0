import * as SecureStore from "expo-secure-store";

export async function storageSave(key, value) {
  await SecureStore.setItemAsync(key, value);
}

export async function storageGet(key) {
  let result = await SecureStore.getItemAsync(key);
  return result;
}
