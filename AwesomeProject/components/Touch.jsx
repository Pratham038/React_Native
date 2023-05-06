import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Button,
} from 'react-native';
const Touch = () => {
  let x = 3;
  const onPerss = () => {
    x = x + 1;

    console.log(x);
  };

  return (
    <>
      <TouchableOpacity onPress={onPerss} style={styles.button}>
        <Text style={styles.text}>Click me</Text>
      </TouchableOpacity>
      <TouchableWithoutFeedback onPress={onPerss} style={styles.button}>
        <Text style={styles.text}>Click me</Text>
      </TouchableWithoutFeedback>
      <Button
        title="click ME"
        color="orange"
        onPress={() => {
          alert('TAPPED');
        }}
      />
    </>
  );
};
const styles = StyleSheet.create({
  button: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default Touch;
