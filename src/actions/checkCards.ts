import { AppActions } from "../types/actions";

export const checkCards = (): AppActions => {
  return {
    type: "CHECK_CARDS"
  };
};
