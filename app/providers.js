// SWAMI KARUPPASWAMI THUNNAI

"use client";
import { Provider } from "@/components/ui/provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChatContext } from "./chatContext";
import { useEffect, useState } from "react";
import { initializeChatHistory } from "@/db/initializeHistory";

export const LindaProviders = ({ children }) => {
  const queryClient = new QueryClient();
  const [historyInitialized, setHistoryInitialized] = useState(false);
  const [chatHistory, setChatHistory] = useState({});

  useEffect(() => {
    if(!historyInitialized) {
      initializeChatHistory(setChatHistory);
      setHistoryInitialized(true);
    }
  }, [historyInitialized]);

  return (
    <QueryClientProvider client={queryClient}>
      <ChatContext.Provider value={{chatHistory, setChatHistory}}>
        <Provider>{children}</Provider>
      </ChatContext.Provider>
    </QueryClientProvider>
  );
};
