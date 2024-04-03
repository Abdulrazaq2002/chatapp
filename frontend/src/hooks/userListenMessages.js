import { useEffect } from "react";
import { userSocketContext } from "../context/socketContext";
import userConversation from "../zustand/userConversation";
import notificationSound from "../sound/notificationSound.mp3";

const useListenMessages = () => {
  const { socket } = userSocketContext();
  const { messages, setMessages } = userConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true;
      const sound = new Audio(notificationSound);
      sound.play();
      setMessages([...messages, newMessage]);
    });
    return () => socket?.off("newMessages");
  }, [socket, setMessages, messages]);
};

export default useListenMessages;
