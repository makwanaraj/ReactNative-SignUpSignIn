import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {windowHeight, windowWidth} from '../utilities/Dimensions';

const FormButton = ({buttonTitle, ...rest}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonTitle}></Text>
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
    backgroundColor: '#2e64e5',
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },

  buttonTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#fff',
  },
});
