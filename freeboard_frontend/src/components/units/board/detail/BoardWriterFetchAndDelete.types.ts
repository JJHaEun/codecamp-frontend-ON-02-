import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardWriteFetchUIProps {
  // data: any;
  data?: Pick<IQuery, "fetchBoard">;
  onClickList: () => void;
  onClickUpdate: () => void;
  onClickDelete: () => void;
}
