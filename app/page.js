// SWAMI KARUPPASWAMI THUNNAI

"use client";
import Image from "next/image";
import styles from "./page.module.css";
import {
  Box,
  Button,
  CloseButton,
  Drawer,
  Portal,
  Container,
  Text,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { ChatMessage } from "@/components/chat/chatmessage";
import { ModelPicker } from "@/components/model/modelpicker";
import { InitializeModel } from "@/components/model/initializeModel";
import { ChatWindow } from "@/components/chat/chatWindow";
import { ChatHistory } from "@/components/chat/chatHistory";

export default function LindaHome() {
  const [chatHistoryOpened, setChatHistoryOpened] = useState(false);

  return (
    <Box className="hamburgerDrawer">
      <InitializeModel />
      <Drawer.Root
        open={chatHistoryOpened}
        onOpenChange={(e) => setChatHistoryOpened(e.open)}
        placement={"start"}
      >
        <Drawer.Trigger asChild>
          <RxHamburgerMenu className={styles.hamburgerDrawer} size={30} />
        </Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>Linda AI</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>
                <ModelPicker />
                <ChatHistory />
              </Drawer.Body>
              <Drawer.Footer>
                {/* <Button variant="outline">Cancel</Button>
                <Button>Save</Button> */}
                <Text fontSize={"xs"}>Linda AI v1.0</Text>
              </Drawer.Footer>
              <Drawer.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
      <Box className={styles.chatWindow}>
        <Box className={styles.chatMessage}>
          <ChatWindow />
        </Box>
        <Box>
          <Container>
            <ChatMessage />
          </Container>
        </Box>
      </Box>
    </Box>
  );
}
