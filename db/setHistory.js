// SWAMI KARUPPASWAMI THUNNAI

import { DB_CHAT_HISTORY } from "./constants"

export const setHistoryToDB = (history) => {
    localStorage.setItem(DB_CHAT_HISTORY, JSON.stringify(history));
}