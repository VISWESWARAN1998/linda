// SWAMI KARUPPASWAMI THUNNAI

import { listModelQuery } from "@/client_api/modellist";
import { initializeModel } from "@/db/selected_model";
import { memo } from "react";

/**
 * A component which will initilize the first model by default
 * when user has not selected any model
 */
const InitializeModel = memo(() => {
  const { data: modelsList, isSuccess: modelsFetched } = listModelQuery();

  if(modelsFetched && modelsList.models.length > 0) {
    initializeModel(modelsList.models);
  }

});

export {InitializeModel};
