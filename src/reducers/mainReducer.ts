import { generatePrimes, shuffleArray, createCards } from "../functions";
import { AppActions } from "../types/actions";
import { IReducer } from "../types/reducerInteface";

const initState: IReducer = {
  primesArray: generatePrimes(50),
  cards: [],
  cardsToMatch: []
};

const mainReducer = (state = initState, action: AppActions): IReducer => {
  const { type, payload } = action;
  let cloneCards = [...state.cards];
  let cloneCardsToMatch = [...state.cardsToMatch];
  switch (type) {
    case "INIT_CARDS":
      const initCards = createCards(shuffleArray(state.primesArray));
      return {
        ...state,
        cards: initCards
      };
    case "CHOOSE_CARDS":
      const { index, number } = payload;
      if (cloneCardsToMatch.length === 2) {
        cloneCards.forEach(card => {
          card.disabled = true;
        });
      } else {
        let needCard = cloneCards[index];
        needCard = { ...needCard, visible: true };
        cloneCards[index] = { ...needCard };
        cloneCardsToMatch = [...cloneCardsToMatch, { index, number }];
        if (cloneCardsToMatch.length === 2) {
          cloneCards.forEach(card => {
            card.disabled = true;
          });
        }
      }
      return {
        ...state,
        cards: cloneCards,
        cardsToMatch: cloneCardsToMatch
      };
    case "CHECK_CARDS":
      if (
        cloneCardsToMatch[0].number === cloneCardsToMatch[1].number &&
        cloneCardsToMatch[0].index !== cloneCardsToMatch[1].index
      ) {
        cloneCards[cloneCardsToMatch[0].index].complete = true;
        cloneCards[cloneCardsToMatch[1].index].complete = true;
      } else {
        cloneCards[cloneCardsToMatch[0].index].visible = false;
        cloneCards[cloneCardsToMatch[1].index].visible = false;
      }
      cloneCards.forEach(card => {
        card.disabled = false;
      });
      return {
        ...state,
        cards: cloneCards,
        cardsToMatch: []
      };
    default:
      return state;
  }
};

export default mainReducer;
