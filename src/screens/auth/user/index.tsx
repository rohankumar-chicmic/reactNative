import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { persistor, type RootState } from '../../../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles';
import { logout } from '../../../features/authSlice';
import { apiSlice, useGetPostsQuery } from '../../../features/apiSlice';
import { useNavigation } from '@react-navigation/native';

export default function User() {
  const [showPosts, setShowPosts] = React.useState(false);
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch<any>();

  const Navigation = useNavigation<any>();
  const {
    data,
    error,
    isLoading,
    refetch,
  } = useGetPostsQuery()  


  const handleLogout = () => {
    dispatch(logout())
    dispatch(apiSlice.util.resetApiState())
  }

  const removePosts = () => {
    setShowPosts(false)
    dispatch(apiSlice.util.resetApiState())
  }
  

  return (
    <View style={styles.section}>

      <TouchableOpacity style={styles.button}
        onPress={handleLogout}>
        <Text style={styles.text}>log out</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
        onPress={()=> {refetch(); setShowPosts(true)}}>
        <Text style={styles.text}>see posts</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
        onPress={() => removePosts() }>
        <Text style={styles.text}>remove posts</Text>
      </TouchableOpacity>
      {showPosts && data?.map(post => <View key={post.title}><Text>{post.title}</Text></View>)
      }

    </View>
  )
}