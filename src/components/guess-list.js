import React from 'react';
import {connect} from 'react-redux';
import './guess-list.css';

export function GuessList(props) {
  const guesses = props.guesses.map((guess, index) => (
    <li key={index}>
      {guess}
    </li>
  ));

  return (
    <ul id="guessList" className="guessBox clearfix">
      {guesses}
    </ul>
  );
}

//connect for guesses prop but no actions needed

export const MapStateToProps = state => ({
  guesses: state.guesses
});

export default connect(MapStateToProps)(GuessList);
