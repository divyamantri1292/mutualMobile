import React from 'react'
import {View, StyleSheet, Text} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserDetails } from '../../services/actions/UserAction';


const UserDetail = ({navigation, route}) => {
    console.log('navigation: ', navigation);
    console.log('route: ', route);
    
    const userId = route.params.userId
    console.log('userId: ', userId);
    const dispatch = useDispatch()
    const {user} = useSelector(state => ({ user: state.userReducer.user }))

    React.useEffect(() => {
        dispatch(fetchUserDetails(userId))
    },[])
    return (
        <View style={styles.root}>
            <Text style={styles.title}>{user.name}</Text>
            <Text style={styles.label}>{('username').toUpperCase()}</Text>
            <Text style={styles.value}>{user.username}</Text>
            <Text style={styles.label}>{('email').toUpperCase()}</Text>
            <Text style={styles.value}>{user.email}</Text>
            <Text style={styles.label}>{('website').toUpperCase()}</Text>
            <Text style={styles.value}>{user.website}</Text>
            <Text style={styles.label}>{('company details').toUpperCase()}</Text>
            <Text style={styles.value}>{user.company?.name}</Text>
            <Text style={styles.value}>{user.company?.catchPhrase}</Text>
            <Text style={styles.value}>{user.company?.bs}</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    root: {
        height: '40%',
        width: '95%',
        marginTop: 15,
        backgroundColor: 'white',
        alignSelf: 'center'
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
    }

})


export default UserDetail;