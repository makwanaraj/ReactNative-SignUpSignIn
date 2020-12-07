import React from 'react';
import { View } from 'react-native';

function Screen({ children }) {
  return (
    <View style = {styles.screen}>
      {children}
    </View>
  );
}

export default Screen;

const styles = StyleSheet.create({
  screen:{
    paddingTop: Platform == 'android' ? 20 : 0
  }
})