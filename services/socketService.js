export const connectToRoom = (socket, room) => {
  socket.emit("joinRoom", room);
};

export const disconnectFromRoom = (socket, room) => {
  socket.emit("disconnectRoom", room);
};

export const messageSent = (socket, room) => {
  socket.emit("messageSent", room);
};

export const registerMessageEventHandler = (socket, callback) => {
  socket.on("syncState", () => {
    callback();
  });
};

export const registerAddContactHandler = (socket, callback) => {
  socket.on("syncContactState", () => {
    callback();
  });
};

export const contactAdded = (socket, contactHandle) => {
  socket.emit("contactAdded", contactHandle);
};

export const goOnline = (socket, userHandle) => {
  socket.emit("goOnline", userHandle);
};
