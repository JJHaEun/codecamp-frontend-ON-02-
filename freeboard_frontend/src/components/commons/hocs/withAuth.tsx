import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const withAuth = (Componenet: any) => (props: any) => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      Modal.info({ content: "로그인 후 이용 가능합니다" });
      void router.push("/login");
    }
  }, []);
  return <Componenet {...props} />;
};

export const withAuthYes = (Componenet: any) => (props: any) => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      Modal.info({ content: "이미 가입된 회원입니다" });
      void router.push("/");
    }
  }, []);
  return <Componenet {...props} />;
};
