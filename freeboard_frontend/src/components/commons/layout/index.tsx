import LayOutBanner from "./banner/banner.container";
import LayOutFooter from "./footer/footer.container";
import LayOutHeader from "./header/header.container";
import LayOutNavigation from "./navigation/navigation.container";

interface ILayOutProps {
  children: JSX.Element;
}

export default function LayOut(props: ILayOutProps) {
  return (
    <>
      <LayOutHeader />
      <LayOutBanner />
      <LayOutNavigation />
      <div>{props.children}</div>
      <LayOutFooter />
    </>
  );
}
