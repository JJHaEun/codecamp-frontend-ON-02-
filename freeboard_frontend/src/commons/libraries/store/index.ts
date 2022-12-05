import { atom } from "recoil";

export const isEditState = atom({
  key: "isEditState",
  default: false,
});
export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});
export const isOpenState = atom({
  key: "isOpenState",
  default: false,
});
export const visitedPageState = atom({
  key: "visitedPageState",
  default: "",
});

export const isOpenDeleteState = atom({
  key: "isOpenDeleteState",
  default: false,
});
