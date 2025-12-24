import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { persistor, type RootState } from '../../../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles';
import { logout, fetchPosts, removePosts } from '../../../features/authSlice';
import { useNavigation } from '@react-navigation/native';

export default function User({ route }: any) {
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch<any>();
  const Navigation = useNavigation<any>();
  const posts=useSelector((state: RootState) => state.auth.posts)

  const handleLogout = async () => {
    dispatch(logout());
    // await persistor.purge()
    // Navigation.popToTop();
    // Navigation.navigate('login');
  }

  const showPosts = () => {
    dispatch(fetchPosts());  
  }

  return (
    <View style={styles.section}>
      {/* <Text style={[styles.text, { color: 'black' }]}>
        email: {route.params.user.email}
      </Text>
      <Text style={[styles.text, { color: 'black' }]}>
        password {route.params.user.password}
      </Text>
      <Text style={[styles.text, { color: 'black' }]}>
        token: {token + '____'}
      </Text> */}
      <TouchableOpacity style={styles.button}
        onPress={ handleLogout}>
        <Text style={styles.text}>log out</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
        onPress={showPosts}>
        <Text style={styles.text}>see posts</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
        onPress={()=> dispatch(removePosts())}>
        <Text style={styles.text}>remove posts</Text>
      </TouchableOpacity>
        {posts && posts.map(post => <View><Text>{post.title}</Text></View>)
          }
    </View>
  )
}