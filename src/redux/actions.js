import {GET_CHARACTERS, CHARACTER_DETAILS, CLEAN_CHARACTERS}from "./action-types";
import axios from "axios";

export const getCharacters = () => {
  return async (dispatch) => {
    const res = await axios.get("https://rickandmortyapi.com/api/character");
    return dispatch({
      type: GET_CHARACTERS,
      payload: res.data.results,
    });
  };
};

export const getCharacterDetails = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      dispatch({ type: CHARACTER_DETAILS, payload: response.data });
    } catch (error) {
      console.error(error);
    }
  };
};

export const cleanCharacters = () => {
  return { type: CLEAN_CHARACTERS };
};