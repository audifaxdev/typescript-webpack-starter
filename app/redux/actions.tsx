import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';

export const INCREMENT_COUNTER = 'INCREMENT';
export const DECREMENT_COUNTER = 'DECREMENT';

export const increment = () : Redux.Action => {
  return {
    type: INCREMENT_COUNTER,
  };
};

export const decrement = () : Redux.Action => {
  return {
    type: DECREMENT_COUNTER,
  };
};