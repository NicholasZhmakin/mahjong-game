import { ICard, ICardToCheck } from "./cardInterface";

export interface IReducer {
  primesArray: number[] | any;
  cards: ICard[] | any;
  cardsToMatch: ICardToCheck[] | any;
}
