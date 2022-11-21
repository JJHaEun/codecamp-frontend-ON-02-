import { useRouter } from "next/router";
import LayOutBanner from "./banner/banner.container";
import LayOutFooter from "./footer/footer.container";
import LayOutHeader from "./header/header.container";
import LayOutNavigation from "./navigation/navigation.container";
interface ILayOutProps {
  children: JSX.Element;
}
const HIDDEN_BANNER = ["/"];
export default function LayOut(props: ILayOutProps) {
  const router = useRouter();
  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);
  return (
    <>
      <LayOutHeader />
      {!isHiddenBanner && <LayOutBanner />}
      <LayOutNavigation />
      <div>{props.children}</div>
      <LayOutFooter />
    </>
  );
}
