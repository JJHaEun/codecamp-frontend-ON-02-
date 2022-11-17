import LayOutBanner from "../../src/components/commons/layout/banner";
import LayOutFooter from "../../src/components/commons/layout/footer";
import LayOutHeader from "../../src/components/commons/layout/header";
import LayOutNavigation from "../../src/components/commons/layout/navigation";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Slider from "react-slick";
import LayOutBanner2 from "../../src/components/commons/layout/banner/banner2";
import LayOutBanner3 from "../../src/components/commons/layout/banner/banner3";
import LayOutBanner4 from "../../src/components/commons/layout/banner/banner4";

interface ILayOutProps {
  children: JSX.Element;
}
const HIDDEN_BODY = ["/11/08/one", "/11/08/two", "/11/08/three"];

const SideBar = styled.div`
  width: 450px;
  background: orange;
`;

const Wrapper = styled.div`
  height: 450px;
  display: flex;
`;

export default function LayOut(props: ILayOutProps) {
  const router = useRouter();
  const isHiddenBody = HIDDEN_BODY.includes(router.asPath);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <LayOutHeader />
      <Slider {...settings}>
        <LayOutBanner />
        <LayOutBanner2 />
        <LayOutBanner3 />
        <LayOutBanner4 />
      </Slider>

      <LayOutNavigation />
      <Wrapper>
        <SideBar>sidebar 영역</SideBar>
        {!isHiddenBody && <div> 바디입니다</div>}
        <div>{props.children}</div>
      </Wrapper>
      <LayOutFooter />
    </>
  );
}
