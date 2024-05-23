const initialCounterState = {
  count: 0,
}; //The initial state of the application

//DEFINING ACTION TYPES
const incrementType = () => ({
  type: "INCREMENT",
});

const decrementType = () => ({
  type: "DECREMENT",
});

const resetType = () => ({
  type: "RESET",
});

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
  let listeners = [];
  const getState = () => state;
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };
  dispatch({});
  return { getState, dispatch, subscribe };
}

const store = createStore(counterReducer);

//EVENT-LISTENERS
const increment = () => {
  store.dispatch(incrementType());
};

const decrement = () => {
  store.dispatch(decrementType());
};

const reset = () => {
  store.dispatch(resetType());
};

store.subscribe(() => {
  console.log("State changed:", store.getState());
});

console.log("Initial state:", store.getState());

increment();

increment();

increment();

reset();
