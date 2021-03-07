import React, {Fragment} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPostDetails} from '../../services/actions/PostAction';

const UserDetail = ({navigation, route}) => {
  console.log('navigation: ', navigation);
  console.log('route: ', route);

  const postId = route.params.postId;
  const userName = route.params.userName;
  const dispatch = useDispatch();
  const {post} = useSelector((state) => ({post: state.postReducer.post}));
  console.log('post: ', post);

  React.useEffect(() => {
    dispatch(fetchPostDetails(postId, userName));
  }, []);
  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.label}>{'created By'.toUpperCase()}</Text>
      <Text style={styles.value}>{post.userName}</Text>
      <Text style={styles.label}>{'comments'.toUpperCase()}</Text>

      {post.comments.map((comment) => (
        <Fragment>
          <Text style={styles.label}>subject</Text>
          <Text style={styles.value}>{comment.name}</Text>
          <Text style={styles.label}>email</Text>
          <Text style={styles.value}>{comment.email}</Text>
          <Text style={styles.label}>comment</Text>
          <Text style={styles.value}>{comment.body}</Text>
        </Fragment>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '95%',
    marginTop: 15,
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  title: {
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
  },
  label: {
    color: '#d2d2d2',
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
  },
  value: {
    color: '#4a4a4a',
    marginLeft: 10,
    marginTop: 5,
  },
});

export default UserDetail;
