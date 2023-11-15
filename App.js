import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthContextProvider, { AuthContext } from "./store/authContext";
import { useContext } from "react";
import { AuthStack, AuthenticatedStack } from "./routes/Stacks";
import SocketContextProvider from "./store/socketContext";

function Navigation() {
  const authContext = useContext(AuthContext);
  return (
    <NavigationContainer>
      {!authContext.isAuthenticated && <AuthStack />}
      {authContext.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <AuthContextProvider>
        <SocketContextProvider>
          <Navigation />
        </SocketContextProvider>
      </AuthContextProvider>
    </>
  );
}
