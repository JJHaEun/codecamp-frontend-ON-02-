import { useState } from "react";

export default function SignUpStatePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  function onChangeEm(event) {
    //event 가들어오는 함수==>이벤트 핸들러 함수
    //console.log(event)//우리가 한 행위(변경시킨)
    // console.log(event.target)//작동된 태그
    // console.log(event.target.value)//작동된 태그에 입력된 값입력시마다 하나씩 실행됨
    setEmail(event.target.value);
  }
  function onChangePw(event) {
    setPassword(event.target.value);
  }
  function onclickSignUp() {
    //진짜 포장이 잘 되었는지 확인
    // console.log(email)
    // console.log(password)
    //이메일 검증하기
    if (email.includes("@") === false) {
      //   alert("잘못된 이메일 형식입니다.");
      //   document.getElementById("error").innerText = "잘못된 이메일 형식입니다.";
      setEmailError("잘못된 이메일 형식입니다.");
    } else {
      //메세지 알림 이전 backend 컴퓨터에 있는 API(함수) 요청하기
      alert("회원가입을 축하합니다.");
    }
  }
  return (
    <>
      이메일:
      {/* event 가들어오는 함수==>이벤트 핸들러 함수 */}
      <input type="text" onChange={onChangeEm} />
      <div>{emailError}</div>
      비밀번호:
      <input type="password" onChange={onChangePw} />
      <button onClick={onclickSignUp}>회원가입</button>
    </>
  );
}
