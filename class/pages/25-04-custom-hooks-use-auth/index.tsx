import { useAuth } from "../../src/components/commons/hooks/useAuth";

export default function CustumHooksUseAuthPage() {
  // 맨위에 함수 실행부분을 넣으면 위부터 실행되기에 아랫부분실행되기전 검증가능!!
  useAuth();
  return <div>프로필 페이지입니다</div>;
}

// 원래 방식 export default withAuth(CustumHooksUseAuthPage)
// 페이지 실행전 withAuth가 실행되게함. hoc실행법
