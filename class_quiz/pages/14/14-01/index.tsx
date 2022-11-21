import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ComponentLifeCycle() {
  const [isChange, setIsChange] = useState(false);
  const router = useRouter();

  useEffect(() => {
    alert("Rendered!");
  }, []);
  console.log(isChange);
  const onClickChange = () => {
    setIsChange((prev) => !prev);
    console.log(isChange);
  };

  const onClickMove = () => {
    void router.push("/");
  };
  useEffect(() => {
    alert("Changed!!");
  }, [onClickChange]);

  useEffect(() => {
    return () => {
      alert("Bye!!");
    };
  }, []);
  return (
    <>
      <button onClick={onClickChange}>변경</button>
      <button onClick={onClickMove}>이동</button>
    </>
  );
}
