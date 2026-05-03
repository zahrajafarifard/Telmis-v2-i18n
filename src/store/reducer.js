const initialState = {
  lang: "en",
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_LANGUAGE":
      return {
        ...state,
        lang: action.lang,
      };

    default:
      return state;
  }
};

export default Reducer;
