import {StyleSheet} from 'react-native';
import {TEXT} from '../../theme/text';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 15,
  },
  title: {
    ...TEXT.subtitle,
  },
  value: {
    ...TEXT.body,
  },
});
