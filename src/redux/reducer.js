import { GET_CHARACTERS, CHARACTER_DETAILS, CLEAN_CHARACTERS } from "./action-types";

const initialState = {
  characters: [],
  characterDetails: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };
    case CHARACTER_DETAILS:
      return {
        ...state,
        characterDetails: action.payload,
      };
    case CLEAN_CHARACTERS:
      return {
        ...state,
        characterDetail: {},
      };
    default:
      return {...state};
  }
};

export default reducer;