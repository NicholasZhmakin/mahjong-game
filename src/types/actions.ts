import { ICardToCheck } from "./cardInterface";
export const INIT_CARDS = "INIT_CARDS";
export const CHECK_CARDS = "CHECK_CARDS";
export const CHOOSE_CARDS = "CHOOSE_CARDS";

export interface ChooseCardsAction {
  type: typeof CHOOSE_CARDS;
  payload: ICardToCheck;
}

export interface InitCardsAction {
  type: typeof INIT_CARDS;
  payload?: any;
}

export interface CheckCardsAction {
  type: typeof CHECK_CARDS;
  payload?: any;
}

export type CardsActionTypes =
  | ChooseCardsAction
  | InitCardsAction
  | CheckCardsAction;

export type AppActions = CardsActionTypes;
