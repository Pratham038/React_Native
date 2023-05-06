import React from 'react';
import {Button, Alert} from 'react-native';
const InputBtn = () => {
  return (
    <>
      <Button
        title="Customized"
        color="orange"
        onPress={() => {
          Alert.alert('My Title', 'My message', [
            {text: 'Yes', onPress: () => console.log('YES')},
            {text: 'No', onPress: () => console.log('No')},
          ]);
        }}
      />
    </>
  );
};

export default InputBtn;
