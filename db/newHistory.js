// SWAMI KARUPPASWAMI THUNNAI

import { newChatObject } from "./newChat";

export const newHistoryObject = () => {
  let newChat = newChatObject();
  let history = {
    selected: newChat.id,
    chats: [newChat],
  };
  return history;
};
