import { useMutation, useQuery } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";
import { useRouter } from "next/router";
import BoardWriteUI from "./BoardWrite.presenter";
import {
  CREATE_BOARD,
  FETCH_BOARD,
  UPDATE_BOARD,
  UPLOAD_FILE,
} from "./BoardWrite.queries";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IMutationUploadFileArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import { IBoardWriteProps, IUpdateBoardInput } from "./BoardWrite.types";
import { Modal } from "antd";
import { Address } from "react-daum-postcode";
import { checkValidationFile } from "../../../../commons/libraries/vaildationFile";

export default function BoardWrite(props: IBoardWriteProps) {
  const [bt, setBt] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [pw, setPw] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const [writerEmpty, setWriterEmpty] = useState("");
  const [pwEmpty, setPwEmpty] = useState("");
  const [titleEmpty, setTitleEmpty] = useState("");
  const [contentsEmpty, setContentsEmpty] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const router = useRouter();
  // 빈페이지로보내기
  // if(typeof router.query._id !== "string"){
  //   router.push("/")
  //   return<></>   //boardId부분을 sting 처리 할수도 있고, 아니면 string이 아닐때 빈패이지로 잠시 보내는 방법도 있음
  // }
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: String(router.query._id), // sting처리
      },
    }
  );

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);

    if (event.target.value !== "") {
      setWriterEmpty("");
    }
    if (event.target.value && pw && title && contents) {
      setBt(true);
    } else {
      setBt(false);
    }
  };
  const onChangePw = (event: ChangeEvent<HTMLInputElement>) => {
    setPw(event.target.value);

    if (event.target.value !== "") {
      setPwEmpty("");
    }
    if (writer && event.target.value && title && contents) {
      setBt(true);
    } else {
      setBt(false);
    }
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);

    if (event.target.value !== "") {
      setTitleEmpty("");
    }
    if (writer && pw && event.target.value && contents) {
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
    if (writer && pw && title && event.target.value) {
      setBt(true);
    } else {
      setBt(false);
    }
  };
  const onChangeYoutubeUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value);
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
  const onClickSignIn = async () => {
    try {
      if (!writer) {
        setWriterEmpty("작성자를 입력해 주세요");
      }
      if (!pw) {
        setPwEmpty("비밀번호를 입력해 주세요");
      }
      if (!title) {
        setTitleEmpty("제목을 입력해 주세요");
      }
      if (!contents) {
        setContentsEmpty("내용을 입력해 주세요");
      }
      if (writer && pw && title && contents) {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              password: pw,
              writer,
              title,
              contents,
              youtubeUrl,
              boardAddress: {
                zipcode,
                address,
                addressDetail,
              },
            },
          },
        });

        Modal.success({ content: "게시물이 성공적으로 등록되었습니다" });
        void router.push(`/boards/${result.data?.createBoard._id ?? ""}`);
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    const isVaild = checkValidationFile(file);
    if (!isVaild) return;
    try {
      const result = await uploadFile({ variables: { file } });
      console.log(result);
      console.log(result.data?.uploadFile.url); // 얘가 이미지 주소
      setImageUrl(result.data?.uploadFile.url ?? "");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message }); // 만약 error가 Error의 자식이면 (거기포함되면) 에러모달창 띄워주기
    }
  };
  const onClickImg = () => {
    fileRef.current?.click();
  };
  const onClickUpdate = async () => {
    if (
      !title &&
      !contents &&
      !youtubeUrl &&
      !zipcode &&
      !address &&
      !addressDetail
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
    try {
      const result = await updateBoard({
        variables: {
          boardId: String(router.query._id),
          password: pw,
          updateBoardInput,
        },
      });

      Modal.success({ content: "게시물이 수정되었습니다" });
      void router.push(`/boards/${result.data?.updateBoard._id}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <>
      <BoardWriteUI
        onClickSignIn={onClickSignIn}
        onClickUpdate={onClickUpdate}
        onChangeWriter={onChangeWriter}
        onChangePw={onChangePw}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        writerEmpty={writerEmpty}
        pwEmpty={pwEmpty}
        titleEmpty={titleEmpty}
        contentsEmpty={contentsEmpty}
        bt={bt}
        isEdit={props.isEdit}
        data={data}
        onChangeYoutubeUrl={onChangeYoutubeUrl}
        onChangeAddressDetail={onChangeAddressDetail}
        onClickAddress={onClickAddress}
        onCompleteAddress={onCompleteAddress}
        isOpen={isOpen}
        zipcode={zipcode}
        address={address}
        addressDetail={addressDetail}
        youtubeUrl={youtubeUrl}
        onChangeFile={onChangeFile}
        onClickImg={onClickImg}
        fileRef={fileRef}
        imageUrl={imageUrl}
      />
    </>
  );
}
