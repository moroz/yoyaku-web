import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { ID } from "../../interfaces/common";
import { Slot } from "../../interfaces/slots";

export const LIST_SLOTS = gql`
  query ListSlots {
    slots {
      id
      startTime
      endTime
      capacity
      insertedAt
      updatedAt
    }
  }
`;

export interface ListSlotsResult {
  slots: Slot[];
}

export const useListSlotsQuery = () => useQuery<ListSlotsResult>(LIST_SLOTS);

export const GET_SLOT = gql`
  query GetSlot($id: ID!) {
    slot(id: $id) {
      id
      startTime
      endTime
      capacity
    }
  }
`;

export interface GetSlotResult {
  slot: Slot | null;
}

export interface GetSlotVariables {
  id: ID;
}

export const useGetSlotQuery = (id: ID) =>
  useQuery<GetSlotResult, GetSlotVariables>(GET_SLOT, { variables: { id } });
