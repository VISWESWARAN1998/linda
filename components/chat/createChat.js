// SWAMI KARUPPASWAMI THUNNAI

import { ChatContext } from "@/app/chatContext";
import { newChatObject } from "@/db/newChat";
import { setHistoryToDB } from "@/db/setHistory";
import { Button } from "@chakra-ui/react";
import { useContext } from "react";

const CreateChat = () => {
  const { chatHistory, setChatHistory } = useContext(ChatContext);

  const newChat = () => {
    const chat = newChatObject();
    const newHistory = {
      ...chatHistory,
      chats: [...chatHistory.chats, chat],
      selected: chat.id,
    };
    setHistoryToDB(newHistory);
    setChatHistory((prev) => ({
      ...prev,
      chats: [...prev.chats, chat],
      selected: chat.id,
    }));
  };

  return <Button onClick={newChat}>New Chat</Button>;
};

export { CreateChat };
