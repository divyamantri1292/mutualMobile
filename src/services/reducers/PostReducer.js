import {ActionTypes} from '../ActionTypes';

const initialState = {
  posts: [],
  post: {
    title: '',
    userName: '',
    comments: [
      {
        email: '',
        body: '',
        name: '',
      }
    ]
  }
};

export default function stripReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
      case ActionTypes.DETAIL_POST:
      return {
        ...state,
        post: action.payload,
      };
    default:
      return state;
  }
}