// import { ChangeEvent } from "react";
import { ChangeEvent, ComponentType } from "react";
import { Address } from "react-daum-postcode";
import ReactQuill from "react-quill";

// import {
//   FormState,
//   UseFormHandleSubmit,
//   UseFormRegister,
// } from "react-hook-form";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IUpdateUseditemInput {
  name: string;
  contents: string;
  remarks: string;
  price: number;
  tags: string[];
  useditemAddress: {
    zipcode: string;
    address: string;
    addressDetail: string;
  };
  images?: string[];
}

// export interface IFormData {
//   name: string;
//   remarks: string;
//   price: number;
//   tags: string;
//   contents: string;
//   useditemAddress: {
//     zipcode: number;
//     address: string;
//     addressDetail: string;
//   };
//   images: string[];
// }

export interface IProductWriteUIProps {
  zipcode: string;
  address: string;
  addressDetail: string;
  onClickAddress: () => void;
  onCompleteAddress: (address: Address) => void;
  imageUrls: string[];
  tags: string[];
  onChangeTags: (tags: string, index: number) => void;
  onChangeImgUrls: (imageUrls: string, index: number) => void;
  // formState: FormState<IFormData>;
  onClickSignIn: () => void;
  // handleSubmit: UseFormHandleSubmit<IFormData>;
  onClickUpdate: () => void;
  cancelModal: () => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (value: string) => void;
  onChangeRemarks: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePrice: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  data: Pick<IQuery, "fetchUseditem"> | undefined;
  bt: boolean;
  nameEmpty: string;
  priceEmpty: string;
  remarksEmpty: string;
  contentsEmpty: string;
  ReactQuill: ComponentType<ReactQuill.ReactQuillProps>;
  // register: UseFormRegister<IFormData>;
  // handleSubmit: UseFormHandleSubmit<IFormData>;
  // formState: FormState<IFormData>;
}
export interface IButtonProps {
  isActive: boolean;
}
