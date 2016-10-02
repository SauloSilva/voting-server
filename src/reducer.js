import {setEntries, next, vote, INITIAL_STATE} from './core';

function setState(state, newState) {
  return state.merge(newState);
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SET_STATE::CLIENT':
    return setState(state, action.state);

  case 'SET_ENTRIES::SERVER':
    return setEntries(state, action.entries);
  case 'NEXT::SERVER':
    return next(state);
  case 'VOTE::SERVER':
    return state.update('vote', voteState => vote(voteState, action.entry));
  }

  return state;
}
