import { useState } from "react";
import { Err } from "../../styles/session01-2";
export default function Quiz0204() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");

  const [emailError, setEmailError] = useState("");
  const [errPw, setErrPw] = useState("");

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }

  function onChangePassWord(event) {
    setPw(event.target.value);
  }
  function onChangePassWord2(event) {
    setPw2(event.target.value);
  }

  function onClickIn() {
    console.log(pw);
    console.log(pw2);
    console.log(email);
    if (email.includes("@") === false) {
      setEmailError("잘못된 이메일 형식입니다.");
    } else {
      setEmailError("");
    }
    if (pw !== pw2) {
      setErrPw("비밀번호를 확인해 주세요.");
    } else {
      setErrPw("");
      alert("가입을 축하합니다");
    }
  }
  return (
    <>
      이메일:
      <input type="text" onChange={onChangeEmail} />
      <Err>{emailError}</Err>
      비밀번호:
      <input type="password" onChange={onChangePassWord} />
      <Err>{errPw}</Err>
      비밀번호 확인:
      <input type="password" onChange={onChangePassWord2} />
      <Err>{errPw}</Err>
      <button onClick={onClickIn}>가입하기</button>
    </>
  );
}

// 1. 회원가입 화면을 다음의 조건에 맞게 만들어 주세요.
// (이메일과 비밀번호 입력창, 비밀번호확인 입력창, 가입하기 버튼 총 4개를 각각 만들어 주세요.)
//  각각의 입력값을 state 변수(state 이름은 스스로 결정해 주세요)에 저장해 주세요.
// 4-1) state를 사용해 주세요.
// 4-2) 가입하기 버튼을 누르면 조건문을 활용하여 에러를 검증해 주세요.
//           ⇒ 조건1) 이메일에 @가 없으면 에러입니다.
//           ⇒ 조건2) 비밀번호와 비밀번호확인이 다르면 에러입니다.
//           ⇒ 조건3) 에러가 없는 입력에 해당하는 state는 에러를 제거(빈값으로 변경) 합니다.
// 4-3) 발생한 에러를 빨간색으로 입력창 하단에 표기해 주세요.
