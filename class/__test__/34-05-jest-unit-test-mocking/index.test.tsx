import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import GraphqlMutationPage, {
  CREATE_BOARD,
} from "../../pages/34-05-jest-unit-test-mocking";
import { MockedProvider } from "@apollo/client/testing";
import "@testing-library/jest-dom";
import { useRouter } from "next/router";

// 가짜 useRouter만들고, 가짜 push 넣어놓기
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));
const push = jest.fn();
(useRouter as jest.Mock).mockImplementation(() => ({
  push,
}));

// 가짜 mutation만들기(요청과 받아오는 응답 모두)
const mocks = [
  {
    request: {
      query: CREATE_BOARD,
      variables: {
        createBoardInput: {
          // 실제 나가는 것
          writer: "철수",
          title: "안녕하세요",
          contents: "철수입니다",
          password: "1234",
        },
      },
    },
    result: {
      // 실제 받아온 결과가 result에 담아지고 result.
      data: {
        //data.
        createBoard: {
          //createBoard.
          _id: "벡엔드에서-받은-게시글ID", // _id하면 이 id를 받아올 수 있음
          writer: "철수",
          title: "안녕하세요",
          contents: "철수입니다",
        },
      },
    },
  },
];

it("API를 모킹하여 테스트 하자!!", async () => {
  render(
    <MockedProvider mocks={mocks}>
      <GraphqlMutationPage />
      {/* 여기 원본에 들어가 실행되나 가짜로 만든것을 이용해 실행됨 */}
    </MockedProvider>
  );
  fireEvent.change(screen.getByRole("input-writer"), {
    target: { value: "철수" }, // 입력해 내보내는것
  });
  fireEvent.change(screen.getByRole("input-title"), {
    target: { value: "안녕하세요" },
  });
  fireEvent.change(screen.getByRole("input-contents"), {
    target: { value: "철수입니다" },
  });

  // TDD => 테스트를 먼저 만들자
  //   fireEvent.change(screen.getByRole("input-password"), {
  //     target: { value: "1234" },
  //   });

  fireEvent.click(screen.getByRole("submit-button"));

  await waitFor(() => {
    // 원본의push부분이 일어나는 부분
    expect(push).toHaveBeenCalledWith("/boards/벡엔드에서-받은-게시글ID");
    //push하는데 원하는곳("/boards/벡엔드에서-받은-게시글ID") 으로 이동됐는지
  });
});
