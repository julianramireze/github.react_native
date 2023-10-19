import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 100,
    color: Colors.black,
    paddingStart: 20,
    paddingEnd: 20,
  },
  prefixIcon: {
    position: 'absolute',
    left: 20,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  suffixIcon: {
    position: 'absolute',
    right: 20,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'transparent',
  },
  input_with_prefix_icon: {
    paddingStart: 50,
  },
  input_with_suffix_icon: {
    paddingEnd: 50,
  },
});
