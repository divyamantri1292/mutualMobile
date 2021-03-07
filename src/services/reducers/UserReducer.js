import {ActionTypes} from '../ActionTypes';

const initialState = {
  users: [],
  user: {
      name: '',
      username: '',
      email: '',
      website: '',
      company: {
        name: '',
        catchPhrase: '',
        bs: '',
      }
  },
};

export default function stripReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case ActionTypes.DETAIL_USER: 
    return {
        ...state,
        user: {...action.payload},
    }  
    default:
      return state;
  }
};