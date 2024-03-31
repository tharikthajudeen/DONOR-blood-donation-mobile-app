import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const WelcomePage = () => {
  const navigation = useNavigation();

  const handleGetStartedPress = () => {
    navigation.navigate('TutorialPage'); 
  };

  return (
    <SafeAreaView>
      <Image source={require('../assets/logo1.png')} style={styles.imageStyle} />
      <View style={styles.content}>
        <Text style={styles.title}>Donate Blood, Save Lives</Text>
        <Text style={styles.subtitle}>Every drop counts.</Text>
        <Text style={styles.body}>
          Thank you for considering donating blood. Your donation will help save the lives of others.
        </Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.button} onPress={handleGetStartedPress}>
          <Text style={styles.buttonText}>Let's get started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 300,
    height: 300,
    marginTop:40,
    marginLeft:35,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  content: {
    width: '80%',
    marginBottom:50, 
    marginLeft:35,
    alignItems: 'center',
  
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1B55EE',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',


  },
  body: {
    fontSize: 16,
    color: '#000',
    margin: 10,
    textAlign: 'center',
    marginTop:20,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WelcomePage;
