import React from 'react';
import {Image} from 'react-native';
const Imagee = () => {
  const pok = {
    // width: '100%',
    // height: 300,
    // margin:'10%',
    height: 200,
    width: 300,
    backgroundColor: 'black',
  };
  return (
    <>
      {/* <Image source={require('../assets/bb.jpg')} /> */}
      <Image
        fadeDuration={1000}
        blurRadius={0}
        resizeMode="cover"
        style={pok}
        source={{
          uri: 'https://picsum.photos/seed/picsum/200/300',
        }}
      />
    </>
  );
};

export default Imagee;
