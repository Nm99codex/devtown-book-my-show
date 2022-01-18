import axios from "axios"

//redux types

import { GET_MOVIE, GET_SPECIFIC_MOVIE } from "./movies.type"


export const getmovies = () => async (dispatch) => {
    try {
      const moviesList = await axios({
        method: "GET",
        url: "https://bms-devtown.herokuapp.com/movies",
      });
  
      return dispatch({ type: GET_MOVIE, payload: moviesList.data });
    } catch (error) {
      return dispatch({ type: "ERROR", payload: error });
    }
  };

  export const getSpecificmovie = (_id) => async (dispatch) => {
    try {
      const moviesList = await axios({
        method: "GET",
        url: `https://bms-devtown.herokuapp.com/movies/movie/${_id}`,
      });
  
      return dispatch({
        type: GET_SPECIFIC_MOVIE,
        payload: moviesList.data,
      });
    } catch (error) {
      return dispatch({ type: "ERROR", payload: error });
    }
  };