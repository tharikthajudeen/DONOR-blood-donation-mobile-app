import {Platform, SafeAreaView, StatusBar,TouchableOpacity, StyleSheet, Text, View,Image,ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function HomeScreen({ navigation }) {
  const [requesters, setRequesters] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://10.0.2.2:3000/api/requester');
      setRequesters(response.data.requesters);
    } catch (error) {
      handleRequestError(error);
    }
  };

  const handleRequestError = (error) => {
    if (error.response) {
      console.error('Server Error:', error.response.data);
      console.error('Status Code:', error.response.status);
    } else if (error.request) {
      console.error('Request Error:', error.request);
    } else {
      console.error('Error:', error.message);
    }
  };

  const onPressHandler = () => {
    navigation.navigate('Menu');
  };

  const onPressHandlerDetails = () => {
    navigation.navigate('RequestDetails');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Headerview}>
        <TouchableOpacity onPress={onPressHandler}>
          <View style={styles.Menuview}>
            <Image
              style={styles.menu}
              source={require('../assets/menu.png')}
            />
          </View>
        </TouchableOpacity>
        <Text style={styles.text}>Blood Requests</Text>
      </View>

      <View style={styles.body1}>
        <Image
          style={styles.Photo1}
          source={require('../assets/blooddonation.jpg')}
        />
        <Text style={styles.text1}>Donate Blood,</Text>
        <Text style={styles.text2}>Save Lives</Text>
      </View>

      <Text style={styles.text3}>Current Requests</Text>

      <ScrollView style={styles.scrollView}>
        {requesters.map((requester, index) => (
          <View key={index} style={styles.Detail}>
             <View style={styles.DetailTexts}>
            <Text style={styles.DetailsText}>Name: {requester.name}</Text>
            <Text style={styles.DetailsText}>Blood Group: {requester.bloodGroup}</Text>
            <Text style={styles.DetailsText}>Living City: {requester.livingCity}</Text>
            <Text style={styles.DetailsText}>Needed By: {requester.neededby}</Text>
          </View>
          <TouchableOpacity
              style={styles.button}
              onPress={onPressHandlerDetails}
            >
              <Text style={styles.textButton}>DETAILS</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#ffff',
        alignItems:'center',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
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
        margin: 20,
    },
    text: {
        fontSize:28,
        color:'#ffff',
        marginTop:12,
    },

    Menuview:{
        width: 70,
        height: 20, 
    },

    body1:{
        height:120,
        width:'86%',
        backgroundColor:'#fff',
        margin:15,
        borderRadius:15,
        elevation:15,
        flexWrap:'wrap',
    },

    Photo1:{
        height:109,
        width:140,
        borderRadius:15,
        marginTop:10,
    },

    text1:{
        fontSize:25,
        color:'#B70404',
        textAlign:'center',
        marginTop:25,  
    },

    text2:{
        fontSize:20,
        color:'#B70404',
        textAlign:'center',
    },
    text3:{
        fontSize:25,
        color:'#B70404',
    }, 
    scrollView: {
        width:'100%',
        marginHorizontal: 20

    },

    Detail:{
        height:180,
        width:'95%',
        backgroundColor:'#fff',
        margin:10,
        borderRadius:15,
        elevation:4,
    },
    DetailTexts:{
        padding:10,
        height: 145,
    },
    DetailsText:{
        fontSize:15,
        padding:5,
    },
    DetailsButton:{
        
    },
    button:{
        backgroundColor:'#B70404',
        width:'100%',
        alignItems: 'center',
        height:35,
        justifyContent:'center',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        
    },
    textButton:{
        color:'#ffff',
        fontSize:20,
    }
})


export default HomeScreen;