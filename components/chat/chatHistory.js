// SWAMI KARUPPASWAMI THUNNAI

import styles from "./page.module.css";
import { ChatContext } from "@/app/chatContext";
import { Accordion, Box, Container, Heading, Span, Text } from "@chakra-ui/react";
import { useContext } from "react";

/**
 * UI component which renders chat history accordion in drawer
 */
const ChatHistory = () => {

    const {chatHistory} = useContext(ChatContext);

    return (
        <Box className={styles.chatHistoryWindow}>
            <Heading>History</Heading>
            {chatHistory?.chats?.map(chat => (
                <Text key={chat.id} fontSize={"md"} bg={chatHistory?.selected === chat.id ? "#fafafa" : "white"} className={styles.chatHistoryItem}>
                    {chat.name}
                </Text>
            ))}
        </Box>
    );
};

export {ChatHistory};