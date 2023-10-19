import React, {useEffect} from 'react';
import {TextInput, TextInputProps, View} from 'react-native';
import {styles} from './styles';
import Button from '../button';

type InputProps = TextInputProps & {
  onChangeText: (text: string) => void;
  onDone: () => void;
  prefixIcon?: any;
  suffixIcon?: any;
  onPressPrefixIcon?: () => void;
  onPressSuffixIcon?: () => void;
  style?: any;
};

export const Input = ({
  onChangeText,
  onDone,
  prefixIcon,
  suffixIcon,
  onPressPrefixIcon,
  onPressSuffixIcon,
  style,
  ...props
}: InputProps) => {
  const [value, setValue] = React.useState('');

  useEffect(() => {
    onChangeText(value);
  }, [value]);

  return (
    <View style={styles.container}>
      <View style={styles.prefixIcon}>
        {onPressPrefixIcon !== undefined ? (
          <Button onPress={onPressPrefixIcon} style={styles.button}>
            {prefixIcon}
          </Button>
        ) : (
          <>{prefixIcon}</>
        )}
      </View>
      <TextInput
        value={value}
        onChangeText={setValue}
        onSubmitEditing={onDone}
        style={[
          styles.input,
          prefixIcon && styles.input_with_prefix_icon,
          suffixIcon && styles.input_with_suffix_icon,
          style,
        ]}
        selectionColor={styles.input.color}
        {...props}
      />
      <View style={styles.suffixIcon}>
        {onPressSuffixIcon !== undefined ? (
          <Button onPress={onPressSuffixIcon} style={styles.button}>
            {suffixIcon}
          </Button>
        ) : (
          <>{suffixIcon}</>
        )}
      </View>
    </View>
  );
};
