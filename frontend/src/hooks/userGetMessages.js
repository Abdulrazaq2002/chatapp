import React, { useEffect, useState } from "react";
import userConversation from "../zustand/userConversation";
import { toast } from "react-hot-toast";

export default function userGetMessages() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = userConversation();
  useEffect(() => {
    const userGetMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/message/${selectedConversation._id}`);
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (selectedConversation?._id) userGetMessages();
  }, [selectedConversation?._id, setMessages]);

  return { messages, loading };
}
