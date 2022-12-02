import { useMutation, useQuery } from "@apollo/client"
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { Address } from "react-daum-postcode";
import { IMutation, IMutationCreateUseditemArgs, IMutationUpdateUseditemArgs, IQuery, IQueryFetchUseditemArgs } from "../../../../commons/types/generated/types"
import { CREATE_USED_ITEM, FETCH_USED_ITEM, UPDATE_USED_ITEM } from "./ProductWrite.queries"

export default function ProductWite () {
    const router = useRouter();
    const [bt, setBt] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("");
    const [remarks, setRemarks] = useState("");
    const [contents, setContents] = useState("");
    const [price, setPrice] = useState(0);
    const [zipcode, setZipcode] = useState("");
    const [address, setAddress] = useState("");
    const [addressDetail, setAddressDetail] = useState("");
  
    const [nameEmpty, setNameEmpty] = useState("");
    const [priceEmpty, setPriceEmpty] = useState("");
    const [remarksEmpty, setRemarksEmpty] = useState("");
    const [contentsEmpty, setContentsEmpty] = useState("");
    const [imageUrls, setImageUrls] = useState(["", "", ""]);
  

    const {data} = useQuery<Pick<IQuery,"fetchUseditem">,IQueryFetchUseditemArgs>(FETCH_USED_ITEM,{
        variables:{
            useditemId: String(router.query._id)
        }
    })


    const [createUseditem] = useMutation<Pick<IMutation,"createUseditem">,IMutationCreateUseditemArgs>(CREATE_USED_ITEM)
const [updateUseditem] = useMutation<Pick<IMutation,"updateUseditem">,IMutationUpdateUseditemArgs>(UPDATE_USED_ITEM)
    
const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
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
    setPrice(event.target.value);

    if (event.target.value !== "") {
      setPriceEmpty("");
    }
    if (name && event.target.value && remarks && contents) {
      setBt(true);
    } else {
      setBt(false);
    }
  };
  const onChangeRemarks= (event: ChangeEvent<HTMLInputElement>) => {
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
  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);

    if (event.target.value !== "") {
      setContentsEmpty("");
    }
    if (name && price && remarks && event.target.value) {
      setBt(true);
    } else {
      setBt(false);
    }
  };

  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  };

  const onClickAddress = () => {
    setIsOpen((prev) => !prev);
  };

  const onCompleteAddress = (address: Address) => {
    setAddress(address.address);
    setZipcode(address.zonecode);
    setIsOpen((prev) => !prev);
  };
  const onChangeImgUrls = (imgUrl: string, index: number) => {
    const newImgUrls = [...imageUrls];
    newImgUrls[index] = imgUrl;
    setImageUrls(newImgUrls);
  };
  useEffect(() => {
    if (data?.fetchUseditem.images?.length) {
      setImageUrls([...data.fetchUseditem.images]); // state 변경
    }
  }, [data]);
  const onClickSignIn = async () => {
    if (!name) {
      setNameEmpty("상품명을 입력해 주세요");
    }
    if (!price) {
      setPriceEmpty("가격을 입력해 주세요");
    }
    if (!remarks) {
      setRemarksEmpty("제목을 입력해 주세요");
    }
    if (!contents) {
      setContentsEmpty("내용을 입력해 주세요");
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
              images: [...imageUrls],
              useditemAddress: {
                zipcode,
                address,
                addressDetail,
              },
            },
          },
        });

        Modal.success({ content: "게시물이 성공적으로 등록되었습니다" });
        void router.push(`/boards/${result.data?.createUseditem._id ?? ""}`);
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
      }
    }
  };

  const onClickUpdate = async () => {
    const currentFiles = JSON.stringify(imageUrls);
    const defaultFiles = JSON.stringify(data?.fetchUseditem.images);
    const isChangeFiles = currentFiles !== defaultFiles;
    if (
      !name&&
      !remarks &&
      !contents &&
      !zipcode &&
      !address &&
      !addressDetail &&
      !isChangeFiles
    ) {
      if (confirm("수정하시겠습니까?")) {
        Modal.info({ content: "변경사항이 없습니다" });
        return;
      } else {
        if (typeof router.query._id !== "string") return;
        void router.push(`/boards/${router.query._id}`);
        return;
      }
    }
    const updateBoardInput: IUpdateBoardInput = {};

    if (writer) updateBoardInput.writer = writer;
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;
    if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl;
    if (zipcode || address || addressDetail) {
      updateBoardInput.boardAddress = {};
      if (zipcode) updateBoardInput.boardAddress.zipcode = zipcode;
      if (address) updateBoardInput.boardAddress.address = address;
      if (addressDetail)
        updateBoardInput.boardAddress.addressDetail = addressDetail;
    }
    if (isChangeFiles) updateBoardInput.images = imageUrls;

    try {
      if (typeof router.query._id !== "string") return;
      const result = await updateBoard({
        variables: {
          boardId: router.query._id,
          password: pw,
          updateBoardInput,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: router.query._id },
          },
        ],
      });

      Modal.success({ content: "게시물이 수정되었습니다" });
      if (typeof result.data?.updateBoard._id !== "string") return;

      void router.push(`/boards/${result.data?.updateBoard._id}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

        
        
          return (
         
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
    )
}