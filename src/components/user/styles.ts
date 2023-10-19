import {StyleSheet} from 'react-native';
import {TEXT} from '../../theme/text';
import {Colors} from '../../constants/colors';
import {ThemeStyles} from '../../theme/styles';

export const styles = StyleSheet.create({
  image: {
    width: 65,
    height: 65,
    margin: 8,
    borderRadius: 100,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.gray_light,
    height: '100%',
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    padding: 5,
    borderRadius: 10,
  },
  name: {
    ...TEXT.subtitle,
  },
  description: {
    ...TEXT.body,
    marginTop: 10,
  },
  container_info_photo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    padding: 0,
  },
  container_info: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: '100%',
    padding: 10,
  },
  button: {
    marginTop: 5,
    marginBottom: 5,
    height: 40,
    width: 40,
    borderRadius: 10,
  },
  button_text: {
    ...ThemeStyles.button,
    color: Colors.white,
  },
  icon: {
    ...ThemeStyles.icon,
  },
  buttons_container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
