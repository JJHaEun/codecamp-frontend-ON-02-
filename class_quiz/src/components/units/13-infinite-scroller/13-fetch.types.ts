import { IQuery } from "../../../commons/types/generated/types";

export interface IInfiniteScrollUIProps {
  onLoadMore: () => void;
  data?: Pick<IQuery, "fetchBoards">;
}
