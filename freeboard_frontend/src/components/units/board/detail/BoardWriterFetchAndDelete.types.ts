import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardWriteFetchUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  onClickList: () => void;
  onClickUpdate: () => void;
  onClickDelete: () => void;
  onClickLike: () => void;
  onClickDisLike: () => void;
  onClickcheckPermissionDeleteModal: () => void;
  handleCancel: () => void;
  isOpenDelete: boolean;
}
