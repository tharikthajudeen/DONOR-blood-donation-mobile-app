import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'; // Import Axios


const LoginScreen = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State for error message

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://10.0.2.2:3000/api/login', {
        username,
        password,
      });

      if (response.status === 200) {
        // Assuming the server returns a token
        const token = response.data.token;

        navigation.navigate('HomeScreen');
      } else {
        setError('Please check your username and password.');
      }
    } catch (error) {
      setError('Please check your username and password.');
    }
  };

  const handleResetPassword = () => {
    // Implement password reset logic here
  };

  const handleSignUp = () => {
    navigation.navigate('RegisterScreen');
  };


  const styles = StyleSheet.create({
    contain:{
      flex:1,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    contentView: {
      height: 350,
      width: '90%',
      elevation: 15,
      padding: 20,
      backgroundColor: '#fff',
      borderRadius: 25,
      borderWidth: 3,
      borderColor: '#B70404',
    },
    logo: {
      width: 200,
      height: 200,
    },
    tag: {
      fontSize: 20,
      marginBottom: 5,
    },
    input: {
      width: 300,
      height: 40,
      borderColor: 'gray',
      borderWidth: 2,
      borderRadius: 10,
      marginBottom: 15,
      paddingHorizontal: 10,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    loginButton: {
      marginTop: 25,
      backgroundColor: '#B70404',
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 80,
    },
    resetPasswordLink: {
      marginTop: 10,
    },
    resetPasswordText: {
      color: '#B70404',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 10,
    },
    signUpLink: {
      marginTop: 30,
      color: '#000',
      fontSize: 15,
      alignItems: 'center',
    },
    newUserText: {
      marginTop: 30,
      color: '#000',
      fontSize: 15,
    },
    signUpText: {
      fontSize: 15,
      fontWeight: 'bold',
      color: '#34ebe5',
    },
    loginText: {
      fontSize: 28,
      marginBottom: 20,
      color: 'gray',
      fontWeight: 'bold',
    },
    errorText: {
      color: 'red', // Set the text color to red for error messages
      marginTop: 10,
      textAlign: 'center',
    },
  });

  return (
    <SafeAreaView style={styles.contain}>
      <View style={styles.container}>
        <Image
          source={require('../assets/logo1.png')}
          style={styles.logo}
        />
        <Text style={styles.loginText}>LOGIN</Text>
        <View style={styles.contentView}>
          <Text style={styles.tag}>User Name : </Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Remo_00"
            value={username}
            onChangeText={setUsername}
          />
          <Text style={styles.tag}>Password : </Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
           
           {error ? <Text style={styles.errorText}>{error}</Text> : null}

          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.resetPasswordLink}
            onPress={handleResetPassword}
          >
            <Text style={styles.resetPasswordText}>Forget Password</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.signUpLink}
          onPress={handleSignUp}
        >
          <Text style={styles.newUserText}>You Don't have account?</Text>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
