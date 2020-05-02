import {
    FETCH_NEO_DATA_START,
    FETCH_NEO_DATA_SUCCESS,
    FETCH_NEO_DATA_FAILURE,
  } from '../actions/actions';
  
  const initialState = {
    NEOs: [],
    orbital_data: [],
    diameter: [],
    isDanger: false,
    isLoading: false,
    error: ''
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_NEO_DATA_START:
        return {
          ...state,
          isLoading: true,
          error: ''
        };
      case FETCH_NEO_DATA_SUCCESS:
        return {
          ...state,
          isLoading: false,
          NEOs: action.payload,
          isDanger: JSON.stringify(action.payload.is_potentially_hazardous_asteroid),
          orbital_data: action.payload.orbital_data,
          diameter: action.payload.estimated_diameter.miles,
          error: ''
        };
        case FETCH_NEO_DATA_FAILURE:
          return {
            ...state,
            error: ''
          };
      default:
        return state;
    }
  };