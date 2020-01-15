import { AppActions } from "../types/actions";
import { ICardToCheck } from "../types/cardInterface";

export const chooseCards = ({ index, number }: ICardToCheck): AppActions => {
  return {
    type: "CHOOSE_CARDS",
    payload: {
      index,
      number
    }
  };
};
