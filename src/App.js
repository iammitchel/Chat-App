import React from "react";
import Chatkit from "@pusher/chatkit-client"
import MessageList from "./components/MessageList"
import NewRoomForm from "./components/NewRoomForm";
import RoomList from "./components/RoomList";
import SendMessageForm from "./components/SendMessageForm";

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <RoomList />
        <MessageList />
      </div>
      <div style={{
        display: "flex",
        paddingTop: 10,
      }}>
        <NewRoomForm />
        <SendMessageForm />
      </div>
    </div>
  );
}

export default App;
