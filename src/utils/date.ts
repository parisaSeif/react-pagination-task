import dayjs from "dayjs";
import jalaliday from "jalaliday";

dayjs.extend(jalaliday);

export const formatJalaliDate = (
  date: string
) => {
  return dayjs(date)
    .calendar("jalali")
    .locale("fa")
    .format("YYYY/MM/DD HH:mm");
};