//import liraries
// import {JitsiMeeting} from '@jitsi/react-native-sdk';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const App = () => {
  return (
    <View style={styles.container}>
      {/* <JitsiMeeting
        flags={{
          'call-integration.enabled': true,
          'fullscreen.enabled': false,
          'invite.enabled': true,
        }}
      /> */}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default App;
