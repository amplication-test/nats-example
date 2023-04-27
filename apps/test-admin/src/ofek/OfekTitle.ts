import { Ofek as TOfek } from "../api/ofek/Ofek";

export const OFEK_TITLE_FIELD = "job";

export const OfekTitle = (record: TOfek): string => {
  return record.job || String(record.id);
};
