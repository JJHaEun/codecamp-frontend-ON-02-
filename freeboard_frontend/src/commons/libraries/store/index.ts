import { atom, selector } from "recoil";
import { getAccessToken } from "../getAccessToken";

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

export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});
