import { MouseEventHandler } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IProductDetailUIProps {
  onClickMoveToPage: (path: string) => MouseEventHandler<HTMLButtonElement>;
  onClickPick: () => void;
  onClickDelete: () => void;
  onClickcheckPermissionDeleteModal: () => void;
  handleCancel: () => void;
  data: Pick<IQuery, "fetchUseditem"> | undefined;
  isOpenDelete: boolean;
}
