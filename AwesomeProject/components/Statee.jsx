import React, {useState} from 'react';
import {Text, StyleSheet, Button, View} from 'react-native';
function Statee() {
  const [name, setName] = useState('PRATHAM');

  const getSur = () => {
    if (name == 'PRATHAM') {
      setName('HARAM');
    } else {
      setName('PRATHAM');
    }
  };

  return (
    <>
      <Text style={styles.text}>{name}</Text>
      <Button title="Change" onPress={getSur} />
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});
export default Statee;
