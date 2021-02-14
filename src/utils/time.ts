import dayjs, { Dayjs } from "dayjs";

export const formatTime = (time: string | number | Date | Dayjs | undefined) =>
  dayjs(time).format("YYYY-MM-DD HH:mm:ss");
