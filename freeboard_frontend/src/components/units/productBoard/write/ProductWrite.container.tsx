import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { Address } from "react-daum-postcode";
import {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUpdateUseditemArgs,
  IQuery,
  IQueryFetchUseditemArgs,
  IUpdateUseditemInput,
} from "../../../../commons/types/generated/types";
import {
  CREATE_USED_ITEM,
  FETCH_USED_ITEM,
  UPDATE_USED_ITEM,
} from "./ProductWrite.queries";
import * as yup from "yup";
import ProductWriteUI from "./ProductWrite.presenter";
import { useRecoilState } from "recoil";
import { isOpenState } from "../../../../commons/libraries/store";
import { IFormData } from "./ProductWrite.types";

export const schema = yup.object({
  name: yup.string().required("상품을 입력하세요"),
  remarks: yup.string().required("상품요약정보를 입력하세요"),
  contents: yup.string().required("상품상세내역을 적어주세요"),
  price: yup
    .number()
    .positive("가격을 숫자로 입력해주세요")
    .integer()
    .required("상품 가격을 입력해주세요"),
  addressDetail: yup.string(),
  tags: yup.array(),
});

export default function ProductWite() {
  // const { formState } = useForm<IFormData>({
  //   resolver: yupResolver(schema),
  //   mode: "onChange",
  // });
  const router = useRouter();
  // const [bt, setBt] = useState(false);
  //   const [isOpen, setIsOpen] = useState(false);
  const [name] = useState("");
  const [remarks] = useState("");
  const [contents] = useState("");
  const [price] = useState(0);
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);
  const [tags, setTags] = useState(["", "", "", "", ""]);

  const [imageUrls, setImageUrls] = useState(["", "", ""]);

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query._id),
    },
  });

  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USED_ITEM);

  // const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
  //   setName(event.target.value);
  // };

  // const onChangePrice = (event: ChangeEvent<HTMLInputElement>) => {
  //   setPrice(event.target.value);
  // };
  // const onChangeRemarks = (event: ChangeEvent<HTMLInputElement>) => {
  //   setRemarks(event.target.value);
  // };
  // const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
  //   setContents(event.target.value);
  // };

  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  };

  const onClickAddress = () => {
    setIsOpen(true);
  };
  const cancelModal = () => {
    setIsOpen(false);
  };
  const onCompleteAddress = (address: Address) => {
    setAddress(address.address);
    setZipcode(address.zonecode);
    setIsOpen(false);
  };
  const onChangeImgUrls = (imgUrl: string, index: number) => {
    const newImgUrls = [...imageUrls];
    newImgUrls[index] = imgUrl;
    setImageUrls(newImgUrls);
  };
  const onChangeTags = (tag: string, index: number) => {
    const newTags = [...tags];
    newTags[index] = tag;
    setTags(newTags);
  };
  useEffect(() => {
    if (data?.fetchUseditem.images?.length) {
      setImageUrls([...data.fetchUseditem.images]); // state 변경
    }
    if (data?.fetchUseditem.tags?.length) {
      setTags([...data.fetchUseditem.tags]);
    }
  }, [data]);
  const onClickSignIn = async (data: IFormData) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name,
            remarks,
            contents,
            price,
            tags: [...tags],
            images: [...imageUrls],
            useditemAddress: {
              zipcode,
              address,
              addressDetail,
            },
          },
        },
      });
      console.log(
        data?.name,
        data?.remarks,
        data?.contents,
        data?.price,
        data?.useditemAddress?.address
      );
      Modal.success({ content: "게시물이 성공적으로 등록되었습니다" });
      void router.push(`/products/${result.data?.createUseditem._id ?? ""}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickUpdate = async (data: IFormData) => {
    const currentFiles = JSON.stringify(imageUrls);
    const defaultFiles = JSON.stringify(data?.images);
    const isChangeFiles = currentFiles !== defaultFiles;
    const currentTags = JSON.stringify(tags);
    const defaultTags = JSON.stringify(data?.tags);
    const isChangeTags = currentTags !== defaultTags;
    if (
      !name &&
      !remarks &&
      !contents &&
      !zipcode &&
      !address &&
      !addressDetail &&
      !isChangeFiles &&
      !isChangeTags
    ) {
      if (confirm("수정하시겠습니까?")) {
        Modal.info({ content: "변경사항이 없습니다" });
        return;
      } else {
        if (typeof router.query._id !== "string") return;
        void router.push(`/products/${router.query._id}`);
        return;
      }
    }
    const updateUseditemInput: IUpdateUseditemInput = {};

    if (name) updateUseditemInput.name = name;
    if (remarks) updateUseditemInput.remarks = remarks;
    if (contents) updateUseditemInput.contents = contents;
    if (zipcode || address || addressDetail) {
      updateUseditemInput.useditemAddress = {};
      if (zipcode) updateUseditemInput.useditemAddress.zipcode = zipcode;
      if (address) updateUseditemInput.useditemAddress.address = address;
      if (addressDetail)
        updateUseditemInput.useditemAddress.addressDetail = addressDetail;
    }
    if (isChangeFiles) updateUseditemInput.images = imageUrls;

    try {
      if (typeof router.query._id !== "string") return;
      const result = await updateUseditem({
        variables: {
          useditemId: router.query._id,
          updateUseditemInput,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM,
            variables: { useditemId: router.query._id },
          },
        ],
      });

      Modal.success({ content: "게시물이 수정되었습니다" });
      if (typeof result.data?.updateUseditem._id !== "string") return;

      void router.push(`/products/${result.data?.updateUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <ProductWriteUI
      zipcode={zipcode}
      address={address}
      addressDetail={addressDetail}
      onClickAddress={onClickAddress}
      onCompleteAddress={onCompleteAddress}
      imageUrls={imageUrls}
      tags={tags}
      onChangeTags={onChangeTags}
      onChangeImgUrls={onChangeImgUrls}
      onClickUpdate={onClickUpdate}
      onClickSignIn={onClickSignIn}
      cancelModal={cancelModal}
      onChangeAddressDetail={onChangeAddressDetail}
      // onChangeContents={onChangeContents}
      // onChangeRemarks={onChangeRemarks}
      // onChangePrice={onChangePrice}
      data={data}
    />
    //   <BoardWriteUI
    //     onClickSignIn={onClickSignIn}
    //     onClickUpdate={onClickUpdate}
    //     onChangeWriter={onChangeWriter}
    //     onChangePw={onChangePw}
    //     onChangeTitle={onChangeTitle}
    //     onChangeContents={onChangeContents}
    //     writerEmpty={writerEmpty}
    //     pwEmpty={pwEmpty}
    //     titleEmpty={titleEmpty}
    //     contentsEmpty={contentsEmpty}
    //     bt={bt}
    //     data={data}
    //     onChangeYoutubeUrl={onChangeYoutubeUrl}
    //     onChangeAddressDetail={onChangeAddressDetail}
    //     onClickAddress={onClickAddress}
    //     onCompleteAddress={onCompleteAddress}
    //     isOpen={isOpen}
    //     zipcode={zipcode}
    //     address={address}
    //     addressDetail={addressDetail}
    //     youtubeUrl={youtubeUrl}
    //     onChangeImgUrls={onChangeImgUrls}
    //     imageUrls={imageUrls}
    //   />
  );
}
