import {ActionTypes} from '../ActionTypes';
import {Alert} from 'react-native';
import {Service} from '../EndPoints';


export function fetchUsers() {
  return async (dispatch) => {
    fetch(`${Service.BASE_URL}${Service.USER_URL}`)
      .then((response) => response.json())
      .then((json) => {
          console.log('json: users ', JSON.stringify(json));
        if (json) {
          dispatch({type: ActionTypes.GET_USERS, payload: json});
        }
      })
      .catch((error) => {
        console.log('error: ', error);
        Alert.alert('Server Error! Please try again later');
        return null;
      });
  };
}

export function fetchUserDetails(id) {
    return async (dispatch) => {
      fetch(`${Service.BASE_URL}${Service.USER_URL}/${id}`)
        .then((response) => response.json())
        .then((json) => {
            console.log('json: users details ', JSON.stringify(json));
          if (json) {
            dispatch({type: ActionTypes.DETAIL_USER, payload: json});
          }
        })
        .catch((error) => {
          console.log('error: ', error);
          Alert.alert('Server Error! Please try again later');
          return null;
        });
    };
  }
  