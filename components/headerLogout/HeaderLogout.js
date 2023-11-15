import { View } from "react-native";
import { AuthContext } from "../../store/authContext";
import { useContext } from "react";
import IconButton from "../core/iconButton/IconButton";
import { SocketContext } from "../../store/socketContext";

export function HeaderLogout() {
  const authContext = useContext(AuthContext);
  const socketContext = useContext(SocketContext);

  const logUserOut = () => {
    authContext.logout();
    socketContext.disconnect();
  };

  return (
    <View>
      <IconButton iconName="sign-out" onPressFn={logUserOut} />
    </View>
  );
}
