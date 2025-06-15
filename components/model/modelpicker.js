// SWAMI KARUPPASWAMI THUNNAI

"use client";
import { listModelQuery } from "@/client_api/modellist";
import { NativeSelect } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getSelectedModel, setSelectedModelToDB } from "@/db/selected_model";

/**
 * A component which is used to pick the models
 * @returns List of available models
 */
const ModelPicker = () => {
  const {
    data: modelsList,
    isLoading: modelLoading,
    isSuccess: modelsFetched,
  } = listModelQuery();

  const [selectedModal, setSelectedModal] = useState(null);

  useEffect(() => {
    if(selectedModal === null) {
      setSelectedModal(getSelectedModel())
    }
  }, [selectedModal]);

  if (modelLoading) {
    return <></>;
  }

  return (
    <NativeSelect.Root>
      <NativeSelect.Field onChange={(e) => {
        setSelectedModal(e.target.value);
        setSelectedModelToDB(e.target.value);
      }}>
        {modelsList.models.map((i) => (
          <option
            value={i.model}
            key={i.model}
            selected={i.model === selectedModal}
          >
            {i.name}
          </option>
        ))}
      </NativeSelect.Field>
      <NativeSelect.Indicator />
    </NativeSelect.Root>
  );
};

export { ModelPicker };
