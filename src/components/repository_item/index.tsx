import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../button';

type RepositoryItemProps = {
  image: string;
  name: string;
  description: string;
  stars: number;
  forks: number;
  issues: number;
  onPress: () => void;
};

const RepositoryItem = ({
  name,
  description,
  stars,
  forks,
  issues,
  onPress,
}: RepositoryItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>{name}</Text>
      </View>
      {description && (
        <View style={styles.description_container}>
          <Text style={styles.description}>{description}</Text>
        </View>
      )}
      <View style={styles.values_container}>
        <View style={styles.value_container}>
          <Icon name="star" style={styles.icon} size={15} />
          <Text style={styles.value}>{stars}</Text>
        </View>
        <View style={styles.value_container}>
          <Icon name="code-fork" style={styles.icon} size={15} />
          <Text style={styles.value}>{forks}</Text>
        </View>
        <View style={styles.value_container}>
          <Icon name="exclamation-circle" style={styles.icon} size={15} />
          <Text style={styles.value}>{issues}</Text>
        </View>
      </View>
      <Button onPress={onPress} style={styles.button}>
        <Text style={styles.button_text}>Ver repositorio</Text>
      </Button>
    </View>
  );
};

export default RepositoryItem;
