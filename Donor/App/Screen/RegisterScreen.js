import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

function RegisterScreen({ navigation }) {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    nicnumber: '',
    email: '',
    password: ''  
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRegistration = async () => {
    try {
      setLoading(true);

      const response = await axios.post('http://10.0.2.2:3000/api/register', formData);

      if (response.status === 201) {
        setFormData({
          name: '',
          username: '',
          nicnumber: '',
          email: '',
          password: '' 
        });
        setLoading(false);
        navigation.navigate('LoginScreen');
      } else {
        setLoading(false);
        setError('Registration failed. Please try again.'); // Set error message on failed registration
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError('Registration failed. Please try again.'); // Set error message on error caught
    }
  };

  return (
    <View style={styles.contain}>
      <View style={styles.Outer}>
      <View style={styles.container}>
        <Text style={styles.loginText}>REGISTER</Text>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <ScrollView style={styles.scrol}>

          {['name', 'username', 'nicnumber', 'email'].map((field) => (
            <View key={field}>
              <Text style={styles.Text}>{field.charAt(0).toUpperCase() + field.slice(1)}: </Text>
              <TextInput
                style={styles.input}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={formData[field]}
                onChangeText={(text) => setFormData({ ...formData, [field]: text })}
              />
            </View>
          ))}
         
          <Text style={styles.Text}>Password: </Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={formData.password}
            onChangeText={(text) => setFormData({ ...formData, password: text })}
            secureTextEntry
          />
        </ScrollView>
        </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleRegistration} disabled={loading}>
        <Text style={styles.buttonText}>{loading ? 'Registering...' : 'Register'}</Text>
      </TouchableOpacity>
     
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  contain: {
    flex: 1,
  },
  container: {
    height: 650,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    bottom: 40,
  },
  Text: {
    fontSize: 18,
    margin: 3,
  },
  scrol: {
    marginHorizontal: 30,
    marginVertical: 20,
  },
  loginText: {
    fontSize: 28,
    marginBottom: 10,
    marginTop: 15,
    color: 'gray',
    fontWeight: 'bold',
  },
  input: {
    width: 300,
    height: 35,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  loginButton: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 80,
    marginTop: 10,
    bottom: 10,
  },
  buttonText: {
    color: '#B70404',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  resetPasswordLink: {
    marginTop: 10,
  },
  resetPasswordText: {
    color: '#B70404',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
  },
  Outer: {
    flex: 1,
    backgroundColor: '#B70404',
    alignItems: 'center',
  },
  pickercontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    marginBottom: 5,
    paddingHorizontal: 10,
    height: 35,
    width: 300,
  },
  picker: {
    width: 300,
    height: 35,
    borderColor: 'gray',
    color: 'gray',
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 1,
    elevation: 3,
  },
});



export default RegisterScreen;
