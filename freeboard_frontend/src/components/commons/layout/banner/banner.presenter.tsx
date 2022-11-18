import * as S from "./banner.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function LayOutBannerUI() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <S.Banner>
      <Slider {...settings}>
        <div>
          <S.Img src="/undraw_Beach_day.png" />
        </div>
        <div>
          <S.Img src="/undraw_Dream_world.png" />
        </div>
        <div>
          <S.Img src="/undraw_Good_doggy.png" />
        </div>
        <div>
          <S.Img src="/undraw_Happy_feeling.png" />
        </div>
        <div>
          <S.Img src="/undraw_Relaxation.png" />
        </div>
        <div>
          <S.Img src="/undraw_Traveling.png" />
        </div>
      </Slider>
    </S.Banner>
  );
}
