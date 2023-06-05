import { atom } from "recoil";

export const clickCountByDateAtom = atom({
  key: "clickCountByDate",
  default: JSON.parse(localStorage.getItem("clickCountByDate")) || {},
});
