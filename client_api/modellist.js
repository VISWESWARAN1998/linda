// SWAMI KARUPPASWAMI THUNNAI

import { useQuery } from "@tanstack/react-query";

const _listModel = async () => {
  return fetch("/api/ollamajs/list", { method: "GET" }).then((data) => {
    return data.json();
  });
};

export const LIST_MODEL = "LIST_MODEL";

export const listModelQuery = () => {
  return useQuery({
    queryKey: [LIST_MODEL],
    queryFn: _listModel,
  });
};
