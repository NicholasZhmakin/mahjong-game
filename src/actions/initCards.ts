import { AppActions } from "../types/actions";

export const initCards = (): AppActions => {
  return {
    type: "INIT_CARDS"
  };
};
