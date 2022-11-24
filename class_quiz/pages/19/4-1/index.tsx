import { ChangeEvent, useEffect, useRef, useState } from "react";

export default function Quiz4Page1() {
  const [password, setPassword] = useState("");
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const onChangePass = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  useEffect(() => {
    passwordInputRef.current?.focus();
  }, []);

  return (
    <input
      type="password"
      ref={passwordInputRef}
      placeholder="비밀번호를 입력하세요"
      onChange={onChangePass}
    />
  );
}
