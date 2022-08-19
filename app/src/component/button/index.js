// import React, React Native
import React from 'react';
import {TouchableOpacity} from 'react-native';

function Button({children, onPress, style = {style}}) {
  return (
    <TouchableOpacity onPress={onPress} style={style} activeOpacity={0.5}>
      {children}
    </TouchableOpacity>
  );
}

export default Button;
