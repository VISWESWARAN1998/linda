// SWAMI KARUPPASWAMI THUNNAI

import { DB_SELECTED_MODEL } from "./constants";

/**
 * Function which fetches the selected modal from DB.
 */
export const getSelectedModel = (callback) => {
  return localStorage.getItem(DB_SELECTED_MODEL);
};

/**
 * Function to set the selected model to DB.
 * @param {*} model model to be saved as selected model in DB.
 */
export const setSelectedModelToDB = (model) => {
  localStorage.setItem(DB_SELECTED_MODEL, model);
};

/**
 * Function to initialize the fist model available when user has not choosen a model.
 * @param {*} modelList list of available ollama models.
 */
export const initializeModel = (modelList) => {
  if (localStorage.getItem(DB_SELECTED_MODEL) === null) {
    setSelectedModelToDB(modelList[0].model);
  }
};
