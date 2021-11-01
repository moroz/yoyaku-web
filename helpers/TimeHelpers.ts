import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);
import CompositeDateTime from "./CompositeDateTime";

export const LOCAL_TZ = Intl.DateTimeFormat().resolvedOptions().timeZone;

export const parseToLocal = (ts: string) => {
  return dayjs(ts).tz(LOCAL_TZ);
};

export const formatTimestamp = (ts: string) =>
  dayjs(ts).format("DD.MM.YYYY HH:mm");

export const buildDateTime = ({ date, time }: CompositeDateTime) => {
  const parsed = dayjs(`${date}T${time}`);
  if (!parsed.isValid()) return null;
  return parsed;
};

export const getLocalDate = (ts: string) => {
  return parseToLocal(ts).toISOString().slice(0, 10);
};

export const formatDate = (ts: string) => {
  const parsed = dayjs(ts);
  const intl = new Intl.DateTimeFormat("pl", { dateStyle: "long" });
  return intl.format(parsed.toDate());
};

export const formatTime = (ts: string) => {
  return dayjs(ts).format("HH:mm");
};
