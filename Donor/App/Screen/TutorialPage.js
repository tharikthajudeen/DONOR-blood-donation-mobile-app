import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook from React Navigation

const TutorialPage = () => {
    const navigation = useNavigation(); // Get the navigation object
  
    return (
    
      <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Donor</Text>
        <Image
          source={require('../assets/logo1.png')}
          style={styles.image}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('LoginScreen'); 
          }}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button01}
          onPress={() => {
            navigation.navigate('RegisterScreen');
          }}
        >
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  };
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0E0C0C',
    textAlign: 'center',
    marginTop: 90,
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'cover',
    marginTop:100,
    marginBottom: 40,
  },
  button: {
    borderColor: '#B70404',
    borderWidth: 2,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 25,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  button01: {
    borderColor: '#B70404',
    borderWidth: 2,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 25,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#000',
    textAlign: 'center',
    fontWeight: '700',
  },
});

export default TutorialPage;
