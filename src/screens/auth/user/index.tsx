import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { useState, useEffect } from 'react'
import { persistor, type RootState } from '../../../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles';
import { logout } from '../../../features/authSlice';
import { apiSlice, useGetPostsQuery } from '../../../features/apiSlice';
import { useNavigation } from '@react-navigation/native';
import { post } from '../../../features/apiSlice';

export default function User() {
  const [showPosts, setShowPosts] = useState(false);
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch<any>();
  const [skip, setSkip] = useState(0);
  const [dataArray, setDataArray] = useState<post[]>([])

  const Navigation = useNavigation<any>();
  const {
    data,
    error,
    isLoading,
    refetch,
  } = useGetPostsQuery(skip, {
    refetchOnMountOrArgChange: true
  });

  useEffect(() => {
    if (data && data.length > 0) {
      setDataArray(prev => [...prev, ...data]);
    }
  }, [data])

  const handleLogout = () => {
    dispatch(logout())
    dispatch(apiSlice.util.resetApiState())
  }

  const removePosts = () => {
    setShowPosts(false)
  }

  const handleEndReached = () => {
    setSkip(skip => skip + 10);
  }

  const handleShowPosts = () => {
    setShowPosts(true)
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
      <View style={[styles.section, { height: '60%', backgroundColor: '#f3f4f7', padding: 10 }]}>
        {showPosts && (
          <FlatList
            data={dataArray}
            renderItem={renderItem}
            keyExtractor={(item) => `${item.id.toString()}`}
            style={{ height: '100%' }}
            onEndReached={handleEndReached}
            onEndReachedThreshold={0.3}
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
          onPress={handleShowPosts}>
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