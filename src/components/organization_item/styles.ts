import {StyleSheet} from 'react-native';
import {TEXT} from '../../theme/text';
import {Colors} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray_light,
    marginTop: 25,
    padding: 15,
    borderRadius: 10,
    flexDirection: 'column',
  },
  principal_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  secondary_container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
  title_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  description_container: {
    marginTop: 15,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 15,
    borderRadius: 100,
  },
  title: {
    ...TEXT.title,
  },
  description: {
    ...TEXT.body,
  },
});
