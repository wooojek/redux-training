import Firebase from 'firebase';

const Data = new Firebase('https://redux-training-4e795.firebaseio.com/');

export function fetchData() {
  return dispatch => {
    Data.on('value', snapshot => {
      dispatch({
        type: 'FETCH_DATA',
        payload: snapshot.val()
      });
    });
  };
}

export function createData(post) {
  return dispatch => Data.push(post);
}

export function deleteData(key) {
  return dispatch => Data.child(key).remove();
}