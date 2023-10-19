import React from 'react';
import {Text, View, Image} from 'react-native';
import {styles} from './styles';

type OrganizationItemProps = {
  image: string;
  name: string;
  description: string;
};

const OrganizationItem = ({
  image,
  name,
  description,
}: OrganizationItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.principal_container}>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
        <View style={styles.title_container}>
          <Text style={styles.title}>
            {name.replace(/\b\w/g, (letter: any) => letter.toUpperCase())}
          </Text>
        </View>
      </View>
      <View style={styles.secondary_container}>
        {description && (
          <View style={styles.description_container}>
            <Text style={styles.description}>{description}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default OrganizationItem;
