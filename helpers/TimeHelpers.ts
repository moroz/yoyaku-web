import dayjs from "dayjs";
import { CompositeDateTime } from "../interfaces/common";

export const formatTimestamp = (ts: string) =>
  dayjs(ts).format("DD.MM.YYYY HH:mm");

export const buildDateTime = ({ date, time }: CompositeDateTime) => {
  const parsed = dayjs(`${date}T${time}`);
  if (!parsed.isValid()) return null;
  return parsed;
};
