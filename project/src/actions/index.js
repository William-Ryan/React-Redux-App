import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_DATA = "UPDATE_DATA";
export const SET_ERROR = "SET_ERROR";
export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA });
  axios
    .get("https://anapioficeandfire.com/api/characters")
    .then(res => {
      console.log(res);
      dispatch({ type: UPDATE_DATA, payload: res.data });
    })
    .catch(err => {
      console.error("error fetching data from api, err: ", err);
      dispatch({ type: SET_ERROR, payload: "Error fetching data from api" });
    });
};
