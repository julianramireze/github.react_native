import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

const InformationItem = ({title, value}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default InformationItem;
