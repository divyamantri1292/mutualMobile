import React from 'react';
import {View, StyleSheet, Text, FlatList, Pressable, TouchableOpacity} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {fetchPosts} from '../../services/actions/PostAction'


const PostScreen = ({navigation}) => {
    const dispatch = useDispatch()
    const {posts, users} = useSelector(state => ({posts: state.postReducer.posts, users: state.userReducer.users}))
    const [list, setList] = React.useState([])

    React.useEffect(() => {
        dispatch(fetchPosts())
        let list = [];
        if(posts.length > 0 && users.length > 0) {
            list = posts.map(post => {
                const user = users.filter(user => user.id === post.userId)
                return ({
                    userName: user[0].name,
                    ...post,
                })
            })
            setList(list)
        }
    }, [posts.length, users.length])

    const postTap = React.useCallback((id, userName) => {
        console.log('userName: ', userName);
        console.log('id: ', id);
        navigation.navigate('PostDetail', {postId: id, userName: userName})
    }, [])

    const userTap = React.useCallback((id) => {
        console.log('id: ', id);
        navigation.navigate('UserDetail', {userId: id})
    }, [])

    const renderRow = React.useCallback(({item}) => {
        return(
            <TouchableOpacity style={styles.card} onPress={() => postTap(item.id, item.userName)}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity onPress={() => userTap(item.userId)}>
                  <Text style={styles.user}>{`created By: ${item.userName}`}</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        )
    }, [])

    return (
        <View style={styles.root}>
           <FlatList 
            data={list}
            keyExtractor={(item,index) => index.toString()}
            renderItem={renderRow}
          />
        </View>
    )
}

const styles =  StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        height: 100,
        width: '90%',
        shadowColor: '#d2d2d2',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 2,
        backgroundColor: 'white',
        marginTop: 10,
        borderRadius: 5,
        alignSelf: 'center',
    },
    title: {
        marginTop: 5,
        fontWeight: 'bold',
        marginLeft: 10,
        fontSize: 17,
        paddingHorizontal: 10,
    },
    user: {
        marginTop: 5,
        marginLeft: 10,
        paddingHorizontal: 10,
    }
})

export default PostScreen