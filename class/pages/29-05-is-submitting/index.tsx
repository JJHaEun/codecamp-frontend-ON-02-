import axios from "axios";
import { useState } from "react";

export default function IsSubmitingPage() {
  //  버튼이 눌리고 로딩시간동안 버튼을 또 못누르게 막기.즉. 버튼한번클릭하면 또 클릭 못하게
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [myData, setMyData] = useState<any>();

  const onClickSubmit = async () => {
    setIsSubmitting(true); // 버튼클릭시 disabled가 true가되고
    const result = await axios.get("https://koreanjson.com/posts/1");
    console.log(result);
    setMyData(result); // state에  받아온 결과 저장

    setIsSubmitting(false); // 결과 다 받고 false로 되돌림
  };
  // disabled={isSubmitting}으로 제출중에는 disabled시킴. 즉, 클릭안됨
  return (
    <>
      <button onClick={onClickSubmit} disabled={isSubmitting}>
        등록하기 등의 API 요청 버튼
      </button>
    </>
  );
}
