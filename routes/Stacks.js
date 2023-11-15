import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateAccountScreen from "../screens/createAccountScreen/CreateAccountScreen";
import { Colors, FontSizes, FontWeights } from "../theme/constants";
import LoginScreen from "../screens/loginScreen/LoginScreen";
import ChatScreen from "../screens/chatScreen/ChatScreen";
import ProfileScreen from "../screens/profileScreen/ProfileScreen";
import ChatsScreen from "../screens/chatsScreen/ChatsScreen";
import { StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();

export function AuthStack() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccountScreen}
          options={{
            headerStyle: {
              backgroundColor: Colors.backgroundPrimary,
            },
            headerTintColor: Colors.textPrimary,
          }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ChatsScreen"
          component={ChatsScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.headerPrimary,
  },
  headerText: {
    color: Colors.textPrimary,
    fontSize: FontSizes.large,
    fontWeight: FontWeights.bold,
  },
});
