import axios from "axios";
import { useState } from "react";
import styled from "@emotion/styled";
export default function CallbackFriends() {
  const [state, setState] = useState([]);

  const TitleMargin = styled.div`
    margin-top: 20px;
  `;
  const onClickCallback = () => {
    const aa = new XMLHttpRequest();
    aa.open("get", `http://numbersapi.com/random?min=1&max=200`); // get방식의 메서드, 앤드포인트
    aa.send(); // aa요청
    aa.addEventListener("load", function (res) {
      console.log(res); // res의 target의 response라는 부분에 랜덤으로 받은 숫자가 들어온것이 확인됨. 숫자부분만 필요하기에 split(" ") 띄어쓰기 부분으로 스필릿.배열로 들어가니 0번빼가 숫자.
      const num = res.target.response.split(" ")[0]; // 랜덤하게 나오는 숫자
      const bb = new XMLHttpRequest();
      bb.open("get", `https://koreanjson.com/posts/${num}`);
      bb.send();
      bb.addEventListener("load", (res) => {
        console.log(res); // res의 target의 response라는 부분에 랜덤숫자에 해당하는 게시물 받아옴. 문자열이기에 객체로 바꾸기
        const userId = JSON.parse(res.target.response).UserId; // JSON.parse하여 객체로 만든 뒤 거기서 UserId를 뽑아오기
        const cc = new XMLHttpRequest();
        cc.open("get", `https://koreanjson.com/posts?userId=${userId}`);
        cc.send();
        cc.addEventListener("load", (res) => {
          const finalCallback = JSON.parse(res.target.response); // 2단계에서 불러온 게시물의 유저의 전체게시물불러오기.res의 target의 response라는 부분에 배열에 객체들이 들어온형태
          setState(finalCallback);
        });
      });
    });
  };
  const onClickPromise = () => {
    axios
      .get(`http://numbersapi.com/random?min=1&max=200`)
      .then((res) => {
        console.log(res);
        const num = res.request.response.split(" ")[0];
        return axios.get(`https://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        const userId = JSON.parse(res.request.response).UserId;
        return axios.get(`https://koreanjson.com/posts?userId=${userId}`);
      })
      .then((res) => {
        const finalPromise = JSON.parse(res.request.response);
        setState(finalPromise);
      });
  };

  const onClickAsyncAwait = async () => {
    const result = await axios.get(
      `http://numbersapi.com/random?min=1&max=200`
    );
    // console.log(result);
    const num = result.request.response.split(" ")[0];
    const result2 = await axios.get(`https://koreanjson.com/posts/${num}`);
    console.log(result2);
    const userId = JSON.parse(result2.request.response).UserId;
    const result3 = await axios.get(
      `https://koreanjson.com/posts?userId=${userId}`
    );
    const final = JSON.parse(result3.request.response);
    setState(final);
  };
  console.log(state);

  return (
    <>
      <button onClick={onClickCallback}>Callback</button>
      <button onClick={onClickPromise}>Promise</button>
      <button onClick={onClickAsyncAwait}>Async/Await</button>
      {state?.map((el: any) => {
        return (
          <div key={el.id}>
            <TitleMargin>제목 :{el.title}</TitleMargin>
            <div>내용:{el.content}</div>
            <div>유저아이디:{el.UserId}</div>
          </div>
        );
      })}
    </>
  );
}
