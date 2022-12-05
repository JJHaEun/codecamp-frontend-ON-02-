import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";

export function useAuthPass() {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      Modal.info({ content: "이미 가입된 회원입니다" });
      void router.push("/");
    }
  }, []);
}
