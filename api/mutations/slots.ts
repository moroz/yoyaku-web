import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { MutationResult } from "../../interfaces/common";
import { Slot, SlotParams } from "../../interfaces/slots";

export const CREATE_SLOT_MUTATION = gql`
  mutation CreateSlot($params: SlotParams) {
    createSlot(params: $params) {
      success
      errors
      data {
        id
        startTime
        endTime
      }
    }
  }
`;

export interface CreateSlotMutationResult {
  createSlot: MutationResult<Slot, SlotParams>;
}

export interface CreateSlotMutationVars {
  params: SlotParams;
}

export const useCreateSlotMutation = () =>
  useMutation<CreateSlotMutationResult, CreateSlotMutationVars>(
    CREATE_SLOT_MUTATION
  );
