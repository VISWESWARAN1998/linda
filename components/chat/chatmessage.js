// SWAMI KARUPPASWAMI THUNNAI

import { getSelectedModel, initializeModel } from "@/db/selected_model";
import styles from "./page.module.css";
import { Flex, Card, Textarea, Spinner } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { FaCircleArrowUp } from "react-icons/fa6";
import { ChatContext } from "@/app/chatContext";
import { setHistoryToDB } from "@/db/setHistory";

const ChatMessage = () => {

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const {chatHistory} = useContext(ChatContext);
  const {setChatHistory} = useContext(ChatContext);

  const addMessageToHistory = (messagePayload) => {
    setChatHistory(prev => {
    const updatedChats = prev.chats.map(chat => {
        if (chat.id === prev.selected) {
          return {
            ...chat,
            messages: [...chat.messages, messagePayload] // immutably add message
          };
        }
        return chat;
      });

      const updatedHistory = {
        ...prev,
        chats: updatedChats
      };

      setHistoryToDB(updatedHistory); // update in DB
      return updatedHistory; // update React state
    });
  }

  const getChatMessages = () => {
     let history = JSON.parse(JSON.stringify(chatHistory));
    for(let index in history.chats) {
      let chat = history.chats[index];
      if(chat.id === history.selected) {
        return history.chats[index].messages;
      }
    }
  }

  const sendMessage = () => {
    const messageCopy = message;
    setMessage("");
    let messagePayload = {
      role: "user",
      content: messageCopy
    };
    const messages = [...getChatMessages(), messagePayload];
    addMessageToHistory(messagePayload);
    setLoading(true);
    fetch("/api/ollamajs/chat", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: getSelectedModel(),
        messages: messages
      })
    }).then(data => data.json().then(response => {
      setLoading(false);
      addMessageToHistory(response.response.message);
    }))
  };

  return (
    <Card.Root size={"sm"}>
      <Card.Body>
        <Textarea
          placeholder="Ask anything"
          rows={1}
          className={styles.chatTextArea}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <Flex justifyContent={"flex-end"}>
          {loading ? <Spinner /> : <FaCircleArrowUp size={30} cursor={"pointer"} onClick={sendMessage} />}
        </Flex>
      </Card.Body>
    </Card.Root>
  );
};

export { ChatMessage };
