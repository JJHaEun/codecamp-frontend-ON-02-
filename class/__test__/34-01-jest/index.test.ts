import { add } from "../../pages/34-01-jest";

it("더하기 잘 되는지 테스트 해보기", () => {
  const result = add(3, 5);
  expect(result).toBe(8);
});
// describe("나만의 테스트 그룹만들기", () => {
//   it("내가 하고싶은 테스트 1", () => {});
//   it("내가 하고싶은 테스트 2", () => {});
//   it("내가 하고싶은 테스트 3", () => {});
// });
