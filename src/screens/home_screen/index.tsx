import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Linking,
  Keyboard,
} from 'react-native';
import {ThemeStyles} from '../../theme/styles';
import {styles} from './style';
import {Input} from '../../components/input';
import {useDispatch, useSelector} from 'react-redux';
import {getUsers, setUsers} from '../../redux/user';
import User, {PressUserType} from '../../components/user';
import Routes from '../../constants/routes';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../constants/colors';

const HomeScreen = ({navigation}: any) => {
  const dispatch: any = useDispatch();
  const {users, loadingGetUsers} = useSelector((state: any) => state.user);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const onDone = (search: string, page: number, clear: boolean) => {
    if (clear) {
      dispatch(setUsers([]));
    }
    setSearch(search);
    setPage(page);
    dispatch(getUsers({name: search.length > 0 ? search : 'Q', page}));
  };

  return (
    <>
      <StatusBar backgroundColor={Colors.black} />
      <SafeAreaView style={[ThemeStyles.screen]}>
        <Text style={styles.title}>Home Screen</Text>
        <Input
          value={search}
          placeholder="Buscar"
          onChangeText={(text: string) => setSearch(text)}
          onDone={() => {
            onDone(search, 1, true);
          }}
          style={styles.search}
          prefixIcon={
            <Icon
              name="search"
              size={17}
              color={Colors.gray}
              style={[
                styles.icon,
                {
                  marginLeft: 10,
                },
              ]}
              disabled={true}
            />
          }
          suffixIcon={
            search && search.length > 0 ? (
              <Icon
                name="times"
                size={17}
                color={Colors.red}
                style={[
                  styles.icon,
                  {
                    marginRight: 10,
                  },
                ]}
                disabled={true}
              />
            ) : null
          }
          onPressSuffixIcon={() => {
            onDone('', 1, true);
            Keyboard.dismiss();
          }}
        />
        <View style={styles.container_list}>
          <FlatList
            showsVerticalScrollIndicator={false}
            refreshing={loadingGetUsers}
            data={users}
            renderItem={({item}: any) =>
              User({
                user: item,
                onPress: (pressUserType, value) => {
                  if (pressUserType === PressUserType.link) {
                    Linking.openURL(value);
                  } else {
                    navigation.navigate(Routes.user, {
                      user: item,
                    });
                  }
                },
              })
            }
            keyExtractor={(item: any) => item?.id + Math.random()}
            onEndReached={() => onDone(search, page + 1, false)}
            onEndReachedThreshold={0.5}
          />
        </View>

        <View style={styles.down_container}>
          {loadingGetUsers ? (
            <ActivityIndicator size="small" color={Colors.blue} />
          ) : (
            <Text style={styles.page}>Page {page}</Text>
          )}
        </View>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
