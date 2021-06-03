import { FETCH_INDEX, FETCH_SEARCH, FETCH_EMPTY } from "../Actions/Types";

const initialState = {
  filters: {},
  dataSource: [],
  loading: true
};

export const searchReducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_INDEX:
      return {
        ...state,
        dataSource: payload,
        loading: false
      };
    case FETCH_SEARCH:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...payload
        },
        loading: true
      };
    case FETCH_EMPTY:
      return {
        ...state,
        dataSource: [],
        loading: true
      };
    default:
      return state;
  }
};
