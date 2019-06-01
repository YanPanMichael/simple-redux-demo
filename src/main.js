import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const Counter = ({ value, onIncrement, onDecrement }) => (
  <div>
    <p>{value}</p>
    <button type="button" onClick={onIncrement}>+</button>
    <button type="button" onClick={onDecrement}>-</button>
  </div>
);

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREASE':
      return action.value;
    case 'DREASE':
      return action.value;
    default:
      return state
  }
}

// const store = createStore(reducer, applyMiddleware(thunk));
const middList = [thunk];
const store = compose(applyMiddleware(...middList))(createStore)(reducer);

const increaseActions = () => {
  const currVal = store.getState();
  return {
    type: "INCREASE",
    value: currVal + 1
  };
};

const decreaseActions = () => {
  const currVal = store.getState();
  return {
    type: "DREASE",
    value: currVal - 1
  };
};

const render = () => {
  ReactDOM.render(
    <Counter value={store.getState()} onIncrement={() => {store.dispatch(increaseActions())}} onDecrement={() => {store.dispatch(decreaseActions())}} />,
    document.getElementById("root")
  )
}
render();
store.subscribe(render);
