import { configureStore } from '@reduxjs/toolkit';

interface State {
  count: number;
  user: {
    name: string;
  };
}

type Action = {
  type: string;
  payload?: any;
};

const initialState: State = {
  count: 0,
  user: {
    name: 'Chase'
  }
};

function count(state = initialState, action: Action) {
  if (action.type === 'incrementCount') {
    return {
      ...state,
      count: state.count + 1
    };
  }

  if (action.type === 'decrementCount') {
    return {
      ...state,
      count: state.count - 1
    };
  }

  return state;
}

function user(state = initialState, action: Action) {
  if (action.type === 'setUser') {
    return {
      ...state,
      user: {
        name: action.payload || state.user.name
      }
    };
  }

  return state;
}

const store = configureStore({
  reducer: {
    count,
    user
  }
});

export default store;
