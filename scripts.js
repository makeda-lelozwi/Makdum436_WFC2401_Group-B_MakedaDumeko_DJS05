const Store = {
  state: {
    count: 0,
  },
  getState: function () {
    console.log(this.state);
    return this.state;
  },

  updateState: function (newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  },

  render: function () {
    console.log(this.state.count);
    console.log(this.state);
  },
};

function increment() {
  const state = Store.getState();

  console.log("Increment");
  Store.updateState({ count: state.count + 1 });
}

function decrement() {
  const state = Store.getState();

  console.log("Decrement");
  Store.updateState({ count: state.count - 1 });
}

function reset() {
  const state = Store.getState();
  console.log(state);
  Store.updateState({ count: state.count - state.count });
}

window.addEventListener("DOMContentLoaded", () => {
  Store.render();
  document.getElementById("increment").addEventListener("click", increment);
  document.getElementById("decrement").addEventListener("click", decrement);
  document.getElementById("reset").addEventListener("click", reset);
});
