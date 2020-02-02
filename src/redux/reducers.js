export default function(state, action) {
  if (state === undefined) {
    return false;
  };

  switch (action.type) {
    case "TOGGLE_THEME":
      return !action.payload;
    default:
      return state;
  };
};
