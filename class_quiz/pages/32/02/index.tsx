import LazyLoad from "react-lazyload";

export default function LazyLoadPreLoad() {
  return (
    <>
      <LazyLoad height={200} offset={100}>
        <img
          src="https://cdn.pixabay.com/photo/2018/05/17/06/22/dog-3407906__480.jpg"
          width={500}
          height={500}
        />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad height={200} offset={100}>
        <img
          src="https://cdn.pixabay.com/photo/2016/11/22/20/10/dog-1850465__480.jpg"
          width={500}
          height={500}
        />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad height={200} offset={100}>
        <img
          src="https://cdn.pixabay.com/photo/2019/11/07/08/40/dog-4608266__480.jpg"
          width={500}
          height={500}
        />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <img
          src="https://cdn.pixabay.com/photo/2018/05/17/06/22/dog-3407906__480.jpg"
          width={500}
          height={500}
        />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <img
          src="https://cdn.pixabay.com/photo/2019/11/07/08/40/dog-4608266__480.jpg"
          width={500}
          height={500}
        />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <img
          src="https://cdn.pixabay.com/photo/2016/11/22/20/10/dog-1850465__480.jpg"
          width={500}
          height={500}
        />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <img src="/DD.jpeg" width={500} height={500} />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <img src="/LaLa.jpeg" width={500} height={500} />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <img src="/TT.jpeg" width={500} height={500} />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <img
          src="https://cdn.pixabay.com/photo/2019/11/07/08/40/dog-4608266__480.jpg"
          width={500}
          height={500}
        />
      </LazyLoad>
    </>
  );
}
