import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { persistor, type RootState } from '../../../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles';
import { logout} from '../../../features/authSlice';
import { fetchRequest, removePosts  } from '../../../features/apiSlice';
import { useNavigation } from '@react-navigation/native';

export default function User({ route }: any) {
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch<any>();
  const Navigation = useNavigation<any>();
  const posts=useSelector((state: RootState) => state.api.posts)

  const handleLogout = async () => {
    dispatch(logout());
  }

  const showPosts = () => {
    dispatch(fetchRequest());  
  }

  return (
    <View style={styles.section}>
      
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
        {posts && posts.map(post => <View key={post.title}><Text>{post.title}</Text></View>)
          }
    </View>
  )
}