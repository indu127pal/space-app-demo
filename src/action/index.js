import axios from 'axios';

export const ADD_FETCHED_DATA = 'ADD FETCHED DATA';
export const SUCCESS_FILTER = 'SUCESS FILTER';

export const fetchData = (url, params) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(url, {
        params: params
      });
      if (response.status === 200) {
        dispatch({
          type: ADD_FETCHED_DATA,
          payload: response.data,
        });
      }
    } catch (error) {
      dispatch({
        type: SUCCESS_FILTER,
        payload: false,
      });
      throw error;
    } finally {
    }
  }
};

export const filterSuccess = success => ({
  type: SUCCESS_FILTER,
  payload: true
});
