import * as S from "./banner.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function LayOutBannerUI() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <S.Banner>
      <Slider
        dots={settings.dots}
        infinite={settings.infinite}
        speed={settings.speed}
        slidesToShow={settings.slidesToShow}
        slidesToScroll={settings.slidesToScroll}
      >
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
