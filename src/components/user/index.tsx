import React from 'react';
import {Text, Image, View} from 'react-native';
import {styles} from './styles';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../button';
import {ThemeStyles} from '../../theme/styles';
import {Colors} from '../../constants/colors';

type UserProps = {
  user: any;
  onPress: (pressUserType: PressUserType, value: any) => void;
};

export enum PressUserType {
  user,
  link,
}

const User = ({user, onPress}: UserProps) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress(PressUserType.user, user);
      }}
      style={styles.container}>
      <View style={styles.container_info_photo}>
        <Image
          style={styles.image}
          source={{
            uri: user.avatar_url,
          }}
        />
        <View style={styles.container_info}>
          <Text style={styles.name}>
            {user.login.replace(/\b\w/g, (letter: any) => letter.toUpperCase())}
          </Text>
          <Text style={styles.description}>
            Id:{' '}
            <Text
              style={[
                styles.description,
                {
                  color: Colors.blue,
                },
              ]}>
              {user.id}
            </Text>
          </Text>
          <Text style={styles.description}>
            Tipo:{' '}
            <Text
              style={[
                styles.description,
                {
                  color: Colors.blue,
                },
              ]}>
              {user.type}
            </Text>
          </Text>
        </View>
      </View>
      <View style={styles.buttons_container}>
        <Button
          style={styles.button}
          onPress={() => {
            onPress(PressUserType.link, user?.html_url);
          }}>
          <Icon name="user" style={ThemeStyles.icon} size={18} />
        </Button>
        <Button
          style={[styles.button, {backgroundColor: Colors.green}]}
          onPress={() => {
            onPress(PressUserType.link, user?.html_url + '?tab=followers');
          }}>
          <Icon name="share" style={ThemeStyles.icon} size={18} />
        </Button>
      </View>
    </TouchableOpacity>
  );
};

export default User;
