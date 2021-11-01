import { Slot } from "../interfaces/slots";
import { getLocalDate } from "./TimeHelpers";

export const groupByDate = (slots: Slot[]) => {
  const result: Record<string, Slot[]> = {};
  slots.forEach((slot: Slot) => {
    const key = getLocalDate(slot.startTime);
    if (!result[key]) result[key] = [];
    result[key].push(slot);
  });
  return result;
};
