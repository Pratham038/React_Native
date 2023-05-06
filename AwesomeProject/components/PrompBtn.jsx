import React from 'react';
import {Button, Alert} from 'react-native';
const PrompBtn = () => {
  return (
    <>
      {/* works on ios */}
      <Button
        title="Customized"
        color="green"
        onPress={() => {
          Alert.prompt('My Title', 'My message', text => console.log(text));
        }}
      />
    </>
  );
};

export default PrompBtn;
