import { useRouter } from "next/router";

export default function KaKaoPageMapToMove() {
  const router = useRouter();
  const onClickMove = () => {
    void router.push(`map1`);
  };

  return <button onClick={onClickMove}>이동하기</button>;
}
