import { useRouter } from "next/router";
import { MouseEvent } from "react";
import LayOutNavigationUI from "./navigation.presenter";

export default function LayOutNavigation() {
  const router = useRouter();
  const onClickMenu = (event: MouseEvent<HTMLDivElement>) => {
    void router.push(event.currentTarget.id);
  };
  return <LayOutNavigationUI onClickMenu={onClickMenu} />;
}
