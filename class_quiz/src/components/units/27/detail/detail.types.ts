import { IQuery } from "../../../../commons/types/generated/types";

export interface IDetailBoardPagUIProps {
  data: Pick<IQuery, "fetchBoard"> | undefined;
}
