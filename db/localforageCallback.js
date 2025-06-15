// SWAMI KARUPPASWAMI THUNNAI

import localforage from "localforage";

export const localforageCallback = (key, callback) => {
  localforage.getItem(key, (err, value) => {
    callback(value);
  });
};
