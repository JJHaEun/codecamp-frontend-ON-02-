import { ChangeEvent, RefObject } from "react";

export interface IUpload01Props {
  index: number;
  imageUrl: string;
  onChangeImgUrls: (imgUrl: string, index: number) => void;
  defaultFileUrl?: string;
}
export interface IUpload01UIProps {
  imageUrl: string;
  onClickImg: () => void;
  fileRef: RefObject<HTMLInputElement>;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  defaultFileUrl?: string;
}
