const initialState = {
  count: 0,
};

function createStore(initialState) {
  let state = initialState;

  return {
    getState: function () {
      return state;
    },

    updateState: function (newState) {
      state = { ...state, ...newState };
    },
  };
}

const store = createStore(initialState);

function render() {
  const state = store.getState();
  console.log(state.count);
  console.log(state);
}

function increment() {
  const state = store.getState();
  console.log(state);
  console.log("Increment");
  store.updateState({ count: state.count + 1 });
  render();
}

function decrement() {
  const state = store.getState();
  console.log(state);
  console.log("Decrement");
  store.updateState({ count: state.count - 1 });
  render();
}

function reset() {
  const state = store.getState();
  console.log(state);
  store.updateState({ count: state.count - state.count });
  render();
}

render();

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("increment").addEventListener("click", increment);
  document.getElementById("decrement").addEventListener("click", decrement);
  document.getElementById("reset").addEventListener("click", reset);
});
