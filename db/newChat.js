// SWAMI KARUPPASWAMI THUNNAI

import { v4 as uuid4 } from "uuid";

export const newChatObject = () => {
    let chatObject = {
        id: uuid4(),
        name: "Customer chat",
        created: new Date().toLocaleString(),
        messages: []
    }
    return chatObject;
}