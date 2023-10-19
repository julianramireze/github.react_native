import {Colors} from '../../constants/colors';
import {StyleSheet} from 'react-native';
import {TEXT} from '../../theme/text';
import {ThemeStyles} from '../../theme/styles';

export const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: Colors.blue,
  },
  icon: {
    color: Colors.white,
  },
  title: {
    ...TEXT.title,
    color: Colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  image: {
    width: 150,
    height: 150,
    margin: 10,
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 25,
  },
  tabView: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  tabTextColor: {
    color: Colors.gray_light,
  },
  activeTabTextColor: {
    color: Colors.white,
  },
  tabIndicator: {
    backgroundColor: Colors.white,
  },
  static_centered_bottom: {
    height: '100%',
  },
  button_text: {
    color: Colors.white,
  },
  button: {
    ...ThemeStyles.button,
    height: 30,
    marginBottom: 10,
  },
  button_container: {
    marginTop: 10,
    justifyContent: 'flex-end',
  },
  content_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
