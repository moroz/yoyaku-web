import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { Slot } from "../../interfaces/slots";

export const LIST_SLOTS = gql`
  query ListSlots {
    slots {
      id
      startTime
      endTime
      insertedAt
      updatedAt
    }
  }
`;

export interface ListSlotsResult {
  slots: Slot[];
}

export const useListSlotsQuery = () => useQuery<ListSlotsResult>(LIST_SLOTS);
