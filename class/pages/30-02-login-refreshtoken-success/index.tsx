import { gql, useApolloClient } from "@apollo/client";
// import { IQuery } from "../../src/commons/types/generated/types";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;
export default function LoginSuccessPage() {
  // const { data } =
  //   useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN); // 페이지에 접속하면 자동으로 data받아지고, 리랜더링됨.

  // const [myquery,{data}] = useLazyQuery(FETCH_USER_LOGGED_IN) // 버튼 클릭해 직접 실행하면 data에 받아지고, 리랜더링됨

  // const client = useApolloClient()// axios와 동일. 받아오는것 기다리고 변수에 저장해 사용됨.

  const client = useApolloClient();

  const onClickButton = async () => {
    const result = await client.query({
      query: FETCH_USER_LOGGED_IN,
    });
    console.log(result);
  };

  return (
    <button onClick={onClickButton}>클릭하세요!!</button>
    // <>{data?.fetchUserLoggedIn.name}님 환영합니다</>
  );
}
