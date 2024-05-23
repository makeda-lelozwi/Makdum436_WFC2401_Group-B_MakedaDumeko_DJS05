const initialCounterState = {
  count: 0,
}; //The initial state of the application

//DEFINING ACTION TYPES
const increment = () => {
  return {
    type: "INCREMENT",
  };
};

const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

const reset = () => {
  return {
    type: "RESET",
  };
};

//DEFINING ACTION CREATORS
const incrementAction = () => {
  return increment();
};

const decrementAction = () => {
  return decrement();
};

const resetAction = () => {
  return reset();
};

//DEFINING THE REDUCER
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "RESET":
      return { ...state, count: 0 };
    default:
      return state;
  }
};

//CREATING THE STORE
function createStore(reducer) {
  let state;
  // let listeners = [];
  const getState = () => state;
  const dispatch = (action) => {
    state = reducer(state, action);
    // listeners.forEach((listener) => listener());
  };

  //const subscribe = (listener) => {
  //   listeners.push(listener);
  //   return () => {
  //     listeners = listeners.filter((l) => l !== listener);
  //   };
  // };
  dispatch({});
  return { getState, dispatch };
}

const store = createStore(counterReducer);

//EVENT-LISTENERS
function increment() {
  store.dispatch(incrementAction);
}

function decrement() {
  store.dispatch(decrementAction);
}

function reset() {
  store.dispatch(resetAction);
}

document.getElementById("increment").addEventListener("click", increment);
document.getElementById("decrement").addEventListener("click", decrement);
document.getElementById("reset").addEventListener("click", reset);
