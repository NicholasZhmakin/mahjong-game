import React from "react";
import { ICard } from "../types/cardInterface";

interface ICardComponent {
  element: ICard;
  index: number;
  getElement: (index: number, number: number) => void;
}

const Card: React.FC<ICardComponent> = ({ element, index, getElement }) => {
  const { number, visible, complete, disabled } = element;
  return (
    <div
      className={
        "card" +
        (visible ? " opened" : "") +
        (complete ? " matched" : "") +
        (disabled ? " disabled" : "")
      }
      onClick={() => getElement(index, number)}
    >
      <p>{number}</p>
    </div>
  );
};

export default Card;
