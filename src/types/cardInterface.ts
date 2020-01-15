export interface ICard {
  number: number;
  visible: boolean;
  complete: boolean;
  disabled: boolean;
}

export interface ICardToCheck {
  index: number;
  number: number;
}
