import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type OfekWhereInput = {
  id?: StringFilter;
  job?: StringNullableFilter;
  one?: StringNullableFilter;
};
