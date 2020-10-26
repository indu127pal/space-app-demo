import { 
  SUCCESS_FILTER,
  ADD_FETCHED_DATA
} from '../action';


const initialState = {
  loading: true,
  spaceData: {},
  success: false
};

export default function fetchedReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FETCHED_DATA:
      return {...state, spaceData: action.payload, loading: false};
    case SUCCESS_FILTER:
        return {...state, success: action.payload};
    default:
      return state;
  }
}