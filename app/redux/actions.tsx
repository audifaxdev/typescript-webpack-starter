export const INCREMENT_COUNTER = 'INCREMENT';
export const DECREMENT_COUNTER = 'DECREMENT';

export function increment() {
  return {
    type: INCREMENT_COUNTER,
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER,
  };
}