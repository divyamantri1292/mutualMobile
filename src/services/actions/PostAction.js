import {ActionTypes} from '../ActionTypes';
import {Alert} from 'react-native';
import {Service} from '../EndPoints';
import { fetchUsers } from './UserAction';


export function fetchPosts() {
  return async (dispatch) => {
      dispatch(fetchUsers())
    fetch(`${Service.BASE_URL}${Service.POST_URL}`)
      .then((response) => response.json())
      .then((json) => {
          console.log('json: ', JSON.stringify(json));
        if (json) {
          dispatch({type: ActionTypes.GET_POSTS, payload: json});
        }
      })
      .catch((error) => {
        console.log('error: ', error);
        Alert.alert('Server Error! Please try again later');
        return null;
      });
  };
}


export function fetchPostDetails(id, userName) {
  return async (dispatch) => {
    fetch(`${Service.BASE_URL}${Service.POST_URL}/${id}`)
      .then((response) => response.json())
      .then((json) => {
        const post = json
          console.log('json: post details ', JSON.stringify(json));
        if (json) {
          fetch(`${Service.BASE_URL}${Service.COMMENT_URL}`)
          .then((response) => response.json())
          .then((json) => {
            if (json) {
              const comments = json.filter(comment => comment.postId === post.id)
              console.log('comments: ', comments);
              const newPost = {...post, comments: comments, userName: userName}
              dispatch({type: ActionTypes.DETAIL_POST, payload: newPost});
            }
          })
          .catch((error) => {
            console.log('error: ', error);
            Alert.alert('Server Error! Please try again later');
            return null;
          });
          // dispatch({type: ActionTypes.DETAIL_POST, payload: json});
        }
      })
      .catch((error) => {
        console.log('error: ', error);
        Alert.alert('Server Error! Please try again later');
        return null;
      });
  };
}