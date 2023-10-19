import {StyleSheet} from 'react-native';
import {TEXT} from '../../theme/text';
import {Colors} from '../../constants/colors';

export const styles = StyleSheet.create({
  title: {
    ...TEXT.title,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    color: Colors.blue,
  },
  search: {
    margin: 20,
  },
  down_container: {
    marginTop: 15,
    marginBottom: 15,
  },
  page: {
    ...TEXT.body,
    textAlign: 'center',
    color: Colors.gray,
  },
  container_list: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    marginTop: 15,
  },
});
