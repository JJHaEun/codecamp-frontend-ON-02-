import { useRouter } from "next/router";
import { ComponentType, useEffect } from "react";
// 컴포넌트 타입은 리엑트에서 제공됨. props는 객체타입이니 extends {}

// prettier-ignore
export const withAuth = (Componenet: ComponentType) => <P extends {}>(props: P) => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 후 이용 가능합니다");
      void router.push("/23-08-login-check-hoc");
    }
  }, []);
  return <Componenet {...props} />;
};
