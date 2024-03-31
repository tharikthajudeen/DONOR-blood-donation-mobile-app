import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

 function Splash(props) {
  return (
    <View style={styles.body}>
      <Image
        style={styles.logo}
        source={require('../assets/Logo.png')}
      />
    </View>
  )
};

const styles = StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: '#ffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#000',
      fontSize: 20,
      fontStyle: 'italic',
      margin: 10,
    },
    logo: {
      width:500,
      height:400,
      margin: 10,  
      
    }
  });
  
export default Splash;