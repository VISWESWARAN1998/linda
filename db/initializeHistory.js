// SWAMI KARUPPASWAMI THUNNAI

import { DB_CHAT_HISTORY } from "./constants";
import { newHistoryObject } from "./newHistory";

/**
 * This method will be creating the history for the very first time
 * when history is not available. Else will return the history
 */
export const initializeChatHistory = async (callback) => {
  let history = localStorage.getItem(DB_CHAT_HISTORY);
  // For the first time there won't be any history. So we create it
  if (history === null) {
    const newHistory = newHistoryObject();
    localStorage.setItem(DB_CHAT_HISTORY, JSON.stringify(newHistory));
    callback(newHistory);
  } else {
    callback(JSON.parse(history));
  }
};
