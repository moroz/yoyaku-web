import dayjs, { Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

export default class CompositeDateTime {
  date: string = "";
  time: string = "";

  constructor(params: Partial<CompositeDateTime> | Dayjs | Date | string) {
    const anyParams = params as any;
    if (anyParams.date && anyParams.time) {
      this.date = anyParams.date;
      this.time = anyParams.time;
      return;
    }
    const parsed = dayjs(anyParams);
    if (parsed.isValid()) {
      const local = parsed.tz("Europe/Warsaw").toISOString();
      this.date = local.slice(0, 10);
      this.time = local.slice(11, 19);
    }
  }

  toJSON() {
    return this.toDayjs()?.toJSON();
  }

  toDayjs() {
    if (!this.date || !this.time) return null;
    const parsed = dayjs.tz(`${this.date}T${this.time}`, "Europe/Warsaw");
    if (!parsed.isValid()) return null;
    return parsed;
  }

  isAfter(other: CompositeDateTime | null) {
    return this.toDayjs()?.isAfter(other?.toDayjs());
  }
}
