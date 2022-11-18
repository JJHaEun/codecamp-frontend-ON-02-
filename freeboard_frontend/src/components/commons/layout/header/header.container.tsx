import { useRouter } from "next/router";
import LayOutHeaderUI from "./header.presenter";

export default function LayOutHeader() {
  const router = useRouter();

  const onClickHeaderLogin = () => {
    void router.push(`/login`);
  };

  const onClickBoards = () => {
    void router.push(`/boards`);
  };

  return (
    <LayOutHeaderUI
      onClickHeaderLogin={onClickHeaderLogin}
      onClickBoards={onClickBoards}
    />
  );
}
