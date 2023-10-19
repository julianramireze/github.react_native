import React, {useEffect, useState} from 'react';
import {SafeAreaView, ActivityIndicator, StatusBar, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getUsers} from '../../redux/user';
import {ThemeStyles} from '../../theme/styles';
import {Colors} from '../../constants/colors';
import {styles} from './styles';
import Routes from '../../constants/routes';

const SplashScreen = ({navigation}: any) => {
  const dispatch: any = useDispatch();
  const [countDown, setCountDown] = useState(1);
  const {successGetUsers} = useSelector((state: any) => state.user);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDown - 1);
    }, 1000);

    if (countDown === 0) {
      dispatch(getUsers({}));
    }

    return () => clearInterval(interval);
  }, [dispatch, countDown]);

  useEffect(() => {
    if (successGetUsers) {
      navigation.navigate(Routes.home);
    }
  }, [successGetUsers]);

  return (
    <>
      <StatusBar backgroundColor={Colors.black} />
      <SafeAreaView style={[ThemeStyles.screen, styles.screen]}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.image}
        />
        <ActivityIndicator
          size="large"
          color={Colors.blue}
          style={styles.static_centered_bottom}
        />
      </SafeAreaView>
    </>
  );
};

export default SplashScreen;
