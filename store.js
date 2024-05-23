const initial = {
  value: 1,
};

const createStore = (initial) => {
  let state = initial;

  const update = (action) => {
    if (typeof action !== "function") {
      throw new Error("Action must be a function");
    }
  };

  return {
    update:
  }
};
