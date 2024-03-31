import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  StatusBar,
  Modal,
  Alert
} from "react-native";
import { Picker } from '@react-native-picker/picker';
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";
import { useNavigation } from "@react-navigation/native";
import { COLORS, FONTS } from "../content";
import axios from 'axios';



function NewRequest() {
  const [Name, setName] = useState('');
  const [nicnumber, setNicnumber] = useState('');
  const [contactno, setContactno] = useState('');
  const [email, setEmail] = useState('');
  const [neededby, setNeededby] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [livingCity, setLivingCity] = useState('');


    const navigation = useNavigation()

      const onPressHandler = ()=>{
        navigation.navigate('Request')
      }
    

      const submitData = () => {
        // Prepare the data object to be sent
        const requestData = {
          name: Name,
          nicnumber: nicnumber,
          contactno: contactno,
          email: email,
          neededby: neededby,
          bloodGroup: bloodGroup,
          livingCity: livingCity,
          // Include other fields as needed
        };
    
        // Make a POST request using Axios
        axios.post('http://10.0.2.2:3000/api/newRequests', requestData)
          .then(response => {
            // Handle successful response
            console.log('Data posted successfully:', response.data);
            // Add any further actions upon successful submission
            setName('');
            setNicnumber('');
            setContactno('');
            setEmail('');
            setNeededby('');
            setBloodGroup('');
            setLivingCity('');
          })
          .catch(error => {
            // Handle error cases
            console.error('Error posting data:', error);
            // Add any error handling logic here
          });
      };

      const SimpleAlert = () => {
        Alert.alert(
          'Conformation Alert',
          'Are You Sure',
          [
            {
              text: 'Yes',
              onPress:() =>{
                console.log('Yes Pressed');
              }
            },
            {
              text:'No',
              onPress : () => {
                console.log('No Pressed');
              }
            }
          ]
        )
      }


  return (



    <SafeAreaView style={styles.container}>

       <View style={styles.Headerview}>
          <TouchableOpacity 
            onPress={onPressHandler}
          >
            <View style={styles.Menuview}>
              <Image
                style={styles.menu}
                source={require('../assets/Back.png')}
              />
            </View>
          </TouchableOpacity>
          <Text style={styles.text}>New Request</Text>
        </View>
        <View style={styles.form}>
        <Text style={styles.Text}>Name :</Text>
            <TextInput
            style={styles.input}
            value={Name}
            onChangeText={setName}
          />
        
        <Text style={styles.Text}>NIC No :</Text>
            <TextInput
            style={styles.input}
            value={nicnumber}
            onChangeText={setNicnumber}
          />

        <Text style={styles.Text}>Contact No :</Text>
            <TextInput
            style={styles.input}
            value={contactno}
            onChangeText={setContactno}
         />

        <Text style={styles.Text}>Email :</Text>
            <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
         />

        <Text style={styles.Text}>Needed By :</Text>
            <TextInput
            style={styles.input}
            value={neededby}
            onChangeText={setNeededby}
         />


        <Text style={styles.Text}>Blood Group :</Text>
          <View style={styles.pickercontainer}>
          <Picker
            style={styles.picker}
            selectedValue={bloodGroup}
            onValueChange={(itemValue, itemIndex) => setBloodGroup(itemValue)}
          >
            <Picker.Item label="Select Blood Group" value=""  disable/>
            <Picker.Item label="A+" value="A+" />
            <Picker.Item label="B+" value="B+" />
            <Picker.Item label="O+" value="O+" />
            <Picker.Item label="AB+" value="AB+" />
            <Picker.Item label="A-" value="A-" />
            <Picker.Item label="O-" value="O-" />
            <Picker.Item label="B-" value="B-" />
            <Picker.Item label="AB-" value="AB-" />
            {/* Add more blood group options as needed */}
          </Picker>
          </View>
          <Text style={styles.Text}>City :</Text>
          <View style={styles.pickercontainer}>
          <Picker 
              style={styles.picker}
              selectedValue={livingCity}
              onValueChange={(itemValue, itemIndex) => setLivingCity(itemValue)}>
                <Picker.Item label="Select City" value=""  disable/>
              <Picker.Item label="Homagama" value="	Homagama" />
              <Picker.Item label="Maharagama" value="Maharagama" />
              <Picker.Item label="Dehiwala" value="Dehiwala" />
              <Picker.Item label="Moratuwa" value="Moratuwa" />
              <Picker.Item label="Padukka" value="Padukka" />
              {/* Add more city options as needed */}
            </Picker>
          </View>
  
            <TouchableOpacity
            onPress={submitData}
          style={{
            backgroundColor: COLORS.primary,
            height: 44,
            borderRadius: 6,
            alignItems: "center",
            justifyContent: "center",
            right:6,
            margin:15,
          }}
        >
          <Text
            style={{
              ...FONTS.body3,
              color: COLORS.white,
            }}
          >
            SUBMIT
          </Text>
        </TouchableOpacity>

        </View>    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffff',
        alignItems:'center',
    },
    Headerview:{
        flexDirection:'row',
        height: 60,
        width:'100%',
        backgroundColor: '#B70404',
    },
    menu:{
        width: 30,
        height: 30, 
        margin: 15,
    },
    text: {
      fontSize:20,
      color:'#ffff',
      marginTop:18,
    },
    form:{
      height:700,
      width:'90%',
      backgroundColor:'#fff',
      elevation:10,
      marginTop:20,
      borderRadius:15,
      padding:10,
      paddingLeft:25,
    },
    Text:{
      fontSize:18,
      margin:3,
      marginVertical:10,
  
    },
    input: {
      width: 300,
      height:35,
      borderColor: '#000',
      borderWidth: 2,
      borderRadius: 10,
      paddingHorizontal: 20,
    },
    pickercontainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#000',
       borderWidth: 2,
      borderRadius: 10,
      marginBottom: 5,
      paddingHorizontal: 10,
      height: 35,
      width:300,
    },
    picker: {
      display:'flex',
      width: 300,
      height:35,
      borderColor: 'gray',
      color:'gray',
      borderWidth: 2,
      borderRadius: 10,
      marginBottom: 1,
      elevation:3
    },
})


export default NewRequest;