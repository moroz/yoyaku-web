import { Dayjs } from "dayjs";
import { CompositeDateTime, ID } from "./common";

export interface Slot {
  id: ID;
  startTime: string;
  endTime: string;
  insertedAt: string;
  updatedAt: string;
  capacity: number;
}

export interface SlotParams {
  startTime: CompositeDateTime | any;
  endTime: CompositeDateTime | any;
  capacity: number;
}
