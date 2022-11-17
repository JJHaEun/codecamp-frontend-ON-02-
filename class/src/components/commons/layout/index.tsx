import { useRouter } from "next/router";
import LayOutBanner from "./banner";
import LayOutFooter from "./footer";
import LayOutHeader from "./header";
import LayOutNavigation from "./navigation";

const HIDDEN_HADDERS = ["/12-02-library-star"];

interface ILayOutProps {
  children: JSX.Element;
}

export default function LayOut(props: ILayOutProps) {
  const router = useRouter();
  const isHiddenHeader = HIDDEN_HADDERS.includes(router.asPath); // 이 asPath를 포함하면 true니까 헤더 숨기기.
  //   isHiddenHeader가 false 일때만 LayOutHeader 보여줘
  return (
    <>
      {!isHiddenHeader && <LayOutHeader />}
      <LayOutBanner />
      <LayOutNavigation />
      <div style={{ height: "1000px", display: "flex" }}>
        <div style={{ width: "30%", background: "orange" }}>사이드바</div>
        <div style={{ width: "70%" }}>{props.children}</div>
      </div>
      <LayOutFooter />
    </>
  );
}
