import React, { useEffect } from "react";
import Card from "./components/Card";
import uuid from "uuid";
import { connect } from "react-redux";
import { initCards } from "./actions/initCards";
import { checkCards } from "./actions/checkCards";
import { chooseCards } from "./actions/chooseCards";
import { ICard, ICardToCheck } from "./types/cardInterface";
import { AppState } from "./store/store";
import { bindActionCreators, Dispatch } from "redux";

interface OwnProps {}

type Props = OwnProps & LinkStateProps & LinkDispatchProps;

const App: React.FC<Props> = ({
  cards,
  initCards,
  cardsToMatch,
  checkCards,
  chooseCards
}) => {
  useEffect(() => {
    initCards();
  }, []);

  useEffect(() => {
    if (
      cardsToMatch !== null &&
      cardsToMatch !== undefined &&
      cardsToMatch.length === 2
    ) {
      setTimeout(() => {
        checkCards();
      }, 500);
    }
  }, [cardsToMatch, checkCards]);

  const getElement: (index: number, number: number) => void = (
    index,
    number
  ) => {
    chooseCards({ index, number });
  };

  return (
    <div className="App">
      <h1 className="title">mahjong game</h1>
      <div className="board">
        {cards &&
          cards.map((element, index) => (
            <Card
              key={uuid.v4()}
              element={element}
              index={index}
              getElement={getElement}
            />
          ))}
      </div>
    </div>
  );
};

interface LinkStateProps {
  cards: ICard[] | null | undefined;
  cardsToMatch: ICardToCheck[] | null | undefined;
}
interface LinkDispatchProps {
  initCards: () => void;
  chooseCards: ({}: ICardToCheck) => void;
  checkCards: () => void;
}

const mapStateToProps = (state: AppState): LinkStateProps => {
  return {
    cards: state.mainR.cards,
    cardsToMatch: state.mainR.cardsToMatch
  };
};

const mapDispatchToProps = (dispatch: Dispatch): LinkDispatchProps => {
  return {
    initCards: bindActionCreators(initCards, dispatch),
    chooseCards: bindActionCreators(chooseCards, dispatch),
    checkCards: bindActionCreators(checkCards, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
