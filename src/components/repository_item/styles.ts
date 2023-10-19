import {Colors} from '../../constants/colors';
import {StyleSheet} from 'react-native';
import {TEXT} from '../../theme/text';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray_light,
    marginTop: 25,
    padding: 15,
    borderRadius: 10,
  },
  title_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  title: {
    ...TEXT.title,
  },
  description_container: {
    marginTop: 15,
  },
  description: {
    ...TEXT.body,
  },
  values_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  value_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: Colors.gray,
    marginRight: 5,
  },
  value: {
    ...TEXT.body,
  },
  button: {
    marginTop: 15,
  },
  button_text: {
    ...TEXT.body,
    color: Colors.white,
  },
});
