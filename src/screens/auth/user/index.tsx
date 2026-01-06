import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import {useState, useEffect} from 'react'
import { persistor, type RootState } from '../../../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles';
import { logout } from '../../../features/authSlice';
import { apiSlice, useGetPostsQuery } from '../../../features/apiSlice';
import { useNavigation } from '@react-navigation/native';
import { post } from '../../../features/apiSlice';

export default function User() {
  const [showPosts, setShowPosts] = useState(false);
  const [dataArray, setDataArray] = useState<post[]>([])
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch<any>();


  const Navigation = useNavigation<any>();
  const {
    data,
    error,
    isLoading,
    refetch,
  } = useGetPostsQuery([1])


  const handleLogout = () => {
    dispatch(logout())
    dispatch(apiSlice.util.resetApiState())
  }

  const removePosts = () => {
    setShowPosts(false)
    dispatch(apiSlice.util.resetApiState())
  }

  const renderItem = ({ item }: any) => {
    return (
      <View style={styles.card}>
        <Text style={styles.id}>#{item.id}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    );
  };



  return (
    <View style={styles.container}>
       <View style={[styles.section, {height: '60%',  backgroundColor: '#f3f4f7', padding:10}]}>
        {showPosts && (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            style={{ height: '100%' }}
          >
          </FlatList>
        )}
      </View>
      <View style={[styles.section]}>

        <TouchableOpacity style={styles.button}
          onPress={handleLogout}>
          <Text style={styles.text}>log out</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
          onPress={() => { refetch(); setShowPosts(true) }}>
          <Text style={styles.text}>see posts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
          onPress={() => removePosts()}>
          <Text style={styles.text}>remove posts</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}