import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ThemeStyles} from '../../theme/styles';

type ButtonProps = {
  children?: React.ReactNode;
  enabled?: boolean;
  style?: any;
  onPress?: () => void;
};

const Button = ({children, style, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[ThemeStyles.button, style]}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;
