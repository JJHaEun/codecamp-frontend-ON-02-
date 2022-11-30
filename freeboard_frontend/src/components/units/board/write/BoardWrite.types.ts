import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardWriteProps {
  data?: Pick<IQuery, "fetchBoard">;
  writerEmpty?: string;
  pwEmpty?: string;
  titleEmpty?: string;
  contentsEmpty?: string;
}
export interface IBoardWriteUIProps {
  onClickSignIn: () => void;
  onClickUpdate: () => void;
  onChangeWriter?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePw?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickAddress: () => void;
  onCompleteAddress: (data: any) => void;
  writerEmpty?: string;
  pwEmpty?: string;
  titleEmpty?: string;
  contentsEmpty?: string;
  bt: boolean;
  data?: Pick<IQuery, "fetchBoard">;

  isOpen: boolean;
  zipcode: string;
  address: string;
  addressDetail: string;
  youtubeUrl: string;
  onChangeImgUrls: (imageUrls: string, index: number) => void;
  imageUrls: string[];
}
export interface IBtProps {
  changes: boolean;
}
export interface IUpdateBoardInput {
  writer?: string;
  contents?: string;
  title?: string;
  youtubeUrl?: string;
  boardAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
  images?: string[];
}
