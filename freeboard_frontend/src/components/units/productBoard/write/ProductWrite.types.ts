// import { ChangeEvent } from "react";
import { Address } from "react-daum-postcode";
import {
  FormState,
  UseFormHandleSubmit,
  UseFormRegisterReturn,
} from "react-hook-form";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IUpdateUseditemInput {
  name?: string;
  contents?: string;
  remarks?: string;
  price?: number;
  useditemAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
  images?: string[];
}

export interface IFormData {
  name: string;
  remarks: string;
  price: number;
  tag: string;
  contents: string;
  useditemAddress: {
    zipcode: string;
    address: string;
    addressDetail: string;
  };
  images: string[];
}

export interface IProductWriteUIProps {
  zipcode: string;
  address: string;
  addressDetail: string;
  onClickAddress: () => void;
  onCompleteAddress: (address: Address) => void;
  imageUrls: string[];
  onChangeImgUrls: (imageUrls: string, index: number) => void;
  formState: FormState<IFormData>;
  onClickSignIn: () => void;
  handleSubmit: UseFormHandleSubmit<IFormData>;
  onClickUpdate: () => void;
  // onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  // onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  // onChangeRemarks: (event: ChangeEvent<HTMLInputElement>) => void;
  // onChangePrice: (event: ChangeEvent<HTMLInputElement>) => void;
  // onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  register: UseFormRegisterReturn;
  data: Pick<IQuery, "fetchUseditem"> | undefined;
}
