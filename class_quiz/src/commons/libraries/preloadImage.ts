export const PRELOADED_IMAGES: HTMLImageElement[] = [];

// 프리로드가 필요한 페이지에서 사용(프리로드 이미지가 필요한..)
export const preloadImage = (images: string[]) => {
  images.forEach((el) => {
    // 만약 여러주소를 프리로드한다면 그 주소를 el로 받아
    const img = new Image(); // img라는 태그를 만듬
    img.src = el; // 여기에 담고
    img.onload = () => {
      // 로드완료시
      // 로드가 다 되었을때(즉, 다운로드 다 받았을때) // 사라지지않게 어딘가에 저장해주도록 변수에 담음 단, 그냥 변수에 담으면 스테이트 리랜더될때 사라지니 전역변수로컴포넌트 밖에 만들어주기!
      PRELOADED_IMAGES.push(img); // 프리로드 하는애들은 해당 변수에 push하여 담기
    };
    // img.onload = () =>  PRELOADED_IMAGES.push(img);
  });
};
