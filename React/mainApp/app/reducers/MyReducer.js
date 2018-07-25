const initialState = {
  first: null,
  second: null,
};

export default function MyReducer(state = initialState, action) {
  switch (action.type) {
    case 'MY_FIRST_ACTION':
      return {
        ...state,
        first: action.payload,
      };
    case 'FETCH_DATA':
      return {
        ...state,
        second: action.payload,
      };
    default: return state;
  }
}
