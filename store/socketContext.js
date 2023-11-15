import { createContext, useState } from "react";
import { io } from "socket.io-client";
import { goOnline } from "../services/socketService";
import { BASE_URL } from "../theme/constants";
export const SocketContext = createContext({
  socket: null,
  connect: async () => {},
  disconnect: () => {},
});

function SocketContextProvider({ children }) {
  const [socketConnection, setSocketConnection] = useState(null);

  async function connect(handle) {
    // eslint-disable-next-line no-unused-vars
    const socketPromise = new Promise((res, rej) => {
      const newSocket = io.connect(BASE_URL);
      newSocket.on("connect", () => {
        setSocketConnection(newSocket);
        goOnline(newSocket, handle);
        res();
      });
    });

    await socketPromise;
  }

  function disconnect() {
    socketConnection.disconnect();
  }

  const value = {
    socket: socketConnection,
    connect: connect,
    disconnect: disconnect,
  };

  return (
    <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
  );
}

export default SocketContextProvider;
