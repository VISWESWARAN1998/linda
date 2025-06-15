// SWAMI KARUPPASWAMI THUNNAI

import { v4 as uuid4 } from "uuid";
import { ChatContext } from "@/app/chatContext";
import {
  Avatar,
  Container,
  Flex,
  Heading,
  Box,
  Text,
  Card,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import Markdown from "react-markdown";

/**
 * UI component of chat window
 * @returns Chat window
 */
const ChatWindow = () => {
  const { chatHistory } = useContext(ChatContext);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    for (let index in chatHistory?.chats) {
      let chat = chatHistory?.chats[index];
      if (chat?.id === chatHistory?.selected) {
        setMessages(chat.messages);
        break;
      }
    }
  }, [chatHistory]);

  if (messages.length === 0) {
    return (
      <Flex
        height={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
        gap={3}
      >
        <Avatar.Root size={"2xl"}>
          <Avatar.Image src="/brain.png" />
        </Avatar.Root>
        <Heading fontSize={"2xl"}>
          This is the beginning of something amazing!
        </Heading>
      </Flex>
    );
  }

  return (
    <Container>
      {messages.map((message) =>
        message.role === "user" ? (
          <Flex flex={1} justifyContent={"flex-end"}>
            <Card.Root key={uuid4} style={{ width: "30%" }}>
              <Card.Body>{message.content}</Card.Body>
            </Card.Root>
          </Flex>
        ) : (
          <Flex flex={1}>
            <Card.Root key={uuid4} style={{ width: "60%" }}>
              <Card.Body>
                <Markdown>{message.content}</Markdown>
              </Card.Body>
            </Card.Root>
          </Flex>
        ),
      )}
    </Container>
  );
};

export { ChatWindow };
