import axios from 'axios';

export const FETCH_NEO_DATA_START = 'FETCH_NEO_DATA_START';
export const FETCH_NEO_DATA_SUCCESS = 'FETCH_NEO_DATA_SUCCESS';
export const FETCH_NEO_DATA_FAILURE = 'FETCH_NEO_DATA_FAILURE';

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_NEO_DATA_START });
    axios
      .get('https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=3GccbeZ6GFvtTwPZxlztQS9U9TssPbVe7vz2aqNV')
      .then(res => {
        console.log(res.data);
        dispatch({ type: FETCH_NEO_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_NEO_DATA_FAILURE, payload: err.data });
      });
  }
};
