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
// import * as yup from "yup";
import ProductWriteUI from "./ProductWrite.presenter";
import { useRecoilState } from "recoil";
import { isOpenState } from "../../../../commons/libraries/store";
import dynamic from "next/dynamic";
// import { IFormData } from "./ProductWrite.types";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useForm } from "react-hook-form";

// export const schema = yup.object({
//   name: yup.string().required("상품을 입력하세요"),
//   remarks: yup.string().required("상품요약정보를 입력하세요"),
//   contents: yup.string().required("상품상세내역을 적어주세요"),
//   price: yup
//     .number()
//     .positive("가격을 숫자로 입력해주세요")
//     .integer()
//     .required("상품 가격을 입력해주세요"),
//   addressDetail: yup.string(),
//   tags: yup.array(),
// });
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});
const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],

    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
];
export default function ProductWite() {
  // const ref =useRef()
  // const { register, formState, handleSubmit } = useForm<IFormData>({
  //   resolver: yupResolver(schema),
  //   mode: "onChange",
  // });
  // const { formState } = useForm<IFormData>({
  //   resolver: yupResolver(schema),
  //   mode: "onChange",
  // });
  const router = useRouter();
  const [bt, setBt] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [remarks, setRemarks] = useState("");
  const [contents, setContents] = useState("");
  const [price, setPrice] = useState(0);
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);
  const [tags, setTags] = useState(["", "", "", "", ""]);
  const [nameEmpty, setNameEmpty] = useState("");
  const [remarksEmpty, setRemarksEmpty] = useState("");
  const [contentsEmpty, setContentsEmpty] = useState("");
  const [priceEmpty, setPriceEmpty] = useState("");
  const [imageUrls, setImageUrls] = useState(["", "", ""]);

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query._id),
    },
  });
  console.log(isOpen);

  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USED_ITEM);

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    if (event.target.value !== "") {
      setNameEmpty("");
    }
    if (event.target.value && price && remarks && contents) {
      setBt(true);
    } else {
      setBt(false);
    }
  };

  const onChangePrice = (event: ChangeEvent<HTMLInputElement>) => {
    setPrice(parseInt(event.target.value));
    if (event.target.value !== "") {
      setPriceEmpty("");
    }
    if (name && parseInt(event.target.value) && remarks && contents) {
      setBt(true);
    } else {
      setBt(false);
    }
  };
  const onChangeRemarks = (event: ChangeEvent<HTMLInputElement>) => {
    setRemarks(event.target.value);
    if (event.target.value !== "") {
      setRemarksEmpty("");
    }
    if (name && price && event.target.value && contents) {
      setBt(true);
    } else {
      setBt(false);
    }
  };
  const onChangeContents = (value: string) => {
    console.log(value);
    setContents(value === "<p><br/></p>" ? "" : value);
    if (value !== "<p><br/></p>") {
      setContentsEmpty("");
    }
    if (name && price && remarks && value) {
      setBt(true);
    } else {
      setBt(false);
    }
  };

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

  const onClickSignIn = async () => {
    if (!name) {
      setNameEmpty("상품명을 입력해주세요");
    }
    if (!price) {
      setPriceEmpty("가격을 입력해주세요");
    }
    if (!remarks) {
      setRemarksEmpty("상품정보를 입력해주세요");
    }
    if (!contents) {
      setContentsEmpty("상품내용을 상세히 입력해주세요");
    }
    if (name && price && remarks && contents) {
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
          update(cache, { data }) {
            cache.modify({
              fields: {
                fetchUsedItems: (prev) => {
                  return [data?.createUseditem, ...prev];
                },
              },
            });
          },
        });
        console.log(
          result.data?.createUseditem.name,
          result.data?.createUseditem.remarks,
          result.data?.createUseditem.contents,
          result.data?.createUseditem.price,
          result.data?.createUseditem.useditemAddress?.address
        );
        Modal.success({ content: "게시물이 성공적으로 등록되었습니다" });
        void router.push(`/market/${result.data?.createUseditem._id ?? ""}`);
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
      }
    }
  };

  const onClickUpdate = async () => {
    const currentFiles = JSON.stringify(imageUrls);
    const defaultFiles = JSON.stringify(data?.fetchUseditem.images);
    const isChangeFiles = currentFiles !== defaultFiles;
    const currentTags = JSON.stringify(tags);
    const defaultTags = JSON.stringify(data?.fetchUseditem.tags);
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
        void router.push(`/market/${router.query._id}`);
        return;
      }
    }
    const updateUseditemInput: IUpdateUseditemInput = {};

    if (name) updateUseditemInput.name = name;
    if (remarks) updateUseditemInput.remarks = remarks;
    if (contents) updateUseditemInput.contents = contents;
    if (address || addressDetail) {
      updateUseditemInput.useditemAddress = {};
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

      void router.push(`/market/${result.data?.updateUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <ProductWriteUI
      address={address}
      zipcode={zipcode}
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
      onChangeName={onChangeName}
      onChangeAddressDetail={onChangeAddressDetail}
      onChangeContents={onChangeContents}
      onChangeRemarks={onChangeRemarks}
      onChangePrice={onChangePrice}
      data={data}
      bt={bt}
      nameEmpty={nameEmpty}
      priceEmpty={priceEmpty}
      contentsEmpty={contentsEmpty}
      remarksEmpty={remarksEmpty}
      // register={register}
      // handleSubmit={handleSubmit}
      // formState={formState}
      ReactQuill={ReactQuill}
      modules={modules}
      formats={formats}
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
