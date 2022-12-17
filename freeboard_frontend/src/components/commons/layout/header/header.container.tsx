import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { LOG_OUT_USER } from "../../../units/mypages/Mypage.queries";
import LayOutHeaderUI from "./header.presenter";

export default function LayOutHeader() {
  const router = useRouter();
  const [logoutUser] = useMutation(LOG_OUT_USER);
  const onClickHeaderLogin = () => {
    void router.push(`/login`);
  };

  const onClickBoards = () => {
    void router.push(`/`);
  };
  const onClickCreateUsers = () => {
    void router.push(`/createUser`);
  };
  const onClickBasket = () => {
    void router.push(`/unUserBasket`);
  };
  const onClickLogOut = async () => {
    await logoutUser();
    localStorage.removeItem("accessToken");
    router.reload();
    Modal.success({ content: "성공적으로 로그아웃 되었습니다" });
  };
  const onClickMyPick = () => {
    void router.push(`/mypage/IPicked`);
  };
  return (
    <LayOutHeaderUI
      onClickHeaderLogin={onClickHeaderLogin}
      onClickBoards={onClickBoards}
      onClickCreateUsers={onClickCreateUsers}
      onClickBasket={onClickBasket}
      onClickLogOut={onClickLogOut}
      onClickMyPick={onClickMyPick}
    />
  );
}
