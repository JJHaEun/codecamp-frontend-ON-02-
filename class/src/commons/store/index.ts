import { atom } from "recoil";

export const isEditState = atom({
  key: "isEditState", // 구분하는 핵심이름
  default: false,
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const visitedPageState = atom({
  key: "visitedPageState",
  default: "",
});
