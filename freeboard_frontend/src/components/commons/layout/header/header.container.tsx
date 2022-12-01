import { useRouter } from "next/router";
import LayOutHeaderUI from "./header.presenter";

export default function LayOutHeader() {
  const router = useRouter();

  const onClickHeaderLogin = () => {
    void router.push(`/login`);
  };

  const onClickBoards = () => {
    void router.push(`/`);
  };
  const onClickCreateUsers = () => {
    void router.push(`/createUser`);
  };
  return (
    <LayOutHeaderUI
      onClickHeaderLogin={onClickHeaderLogin}
      onClickBoards={onClickBoards}
      onClickCreateUsers={onClickCreateUsers}
    />
  );
}
