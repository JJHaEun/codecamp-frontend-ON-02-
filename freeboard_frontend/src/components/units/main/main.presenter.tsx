import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./main.styles";

export default function MainPageUI() {
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <S.MainDiv>
      <div>
        <Slider {...settings}>
          <S.Images src="/undraw_Beach_day.png" />

          <S.Images src="/undraw_Dream_world.png" />

          <S.Images src="/undraw_Good_doggy.png" />

          <S.Images src="/undraw_Happy_feeling.png" />

          <S.Images src="/undraw_Relaxation.png" />

          <S.Images src="/undraw_Traveling.png" />
        </Slider>
      </div>
      <div>
        <Slider {...settings}>
          <S.Images src="/undraw_Dog_walking.png" />

          <S.Images src="/undraw_eat_food.png" />

          <S.Images src="/undraw_Gaming.png" />

          <S.Images src="/undraw_Hiking.png" />

          <S.Images src="/undraw_snap_the_moment.png" />

          <S.Images src="/undraw_Street_food.png" />

          <S.Images src="/undraw_sweet_home_time.png" />

          <S.Images src="/undraw_Walking_outside.png" />
        </Slider>
      </div>
    </S.MainDiv>
  );
}
