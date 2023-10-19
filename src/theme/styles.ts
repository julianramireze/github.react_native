import {StyleSheet} from 'react-native';
import {Colors} from '../constants/colors';

export const ThemeStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  button: {
    height: 25,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blue,
    flexDirection: 'row',
    paddingStart: 10,
    paddingEnd: 10,
    paddingTop: 2,
    paddingBottom: 2,
    zIndex: 1,
  },
  icon: {
    color: Colors.white,
  },
});
