import { SafeAreaView, StyleSheet, Text, View ,StatusBar,TouchableOpacity,Image,onPressHandler, Alert, ScrollView} from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'

function ViewDonorDetails() {

    const navigation = useNavigation()

      const onPressHandler = ()=>{
        navigation.navigate('HomeScreen')
      }

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
            onPress={()=> navigation.navigate('Request')}
          >
            <View style={styles.Menuview}>
              <Image
                style={styles.menu}
                source={require('../assets/Back.png')}
              />
            </View>
          </TouchableOpacity>
          <Text style={styles.text}>Donor Details</Text>
        </View>
        <View style={styles.Detail}>
          <View style={styles.DetailTexts}>
            <Text style={styles.DetailsText} >Donor Name : </Text>
            <Text style={styles.DetailsText} >Blood Type : </Text>
            <Text style={styles.DetailsText} >Date : </Text>
            <Text style={styles.DetailsText} >Location : </Text>
            <Text style={styles.DetailsText} >Contact NO : </Text>
            <Text style={styles.DetailsText} > Age : </Text>
          </View >
          <View style={styles.buttonView}>
          <TouchableOpacity style={styles.button1}
              onPress={SimpleAlert}
            >
              <Text style={styles.textButton}>COMPLETE</Text>
            </TouchableOpacity>
          <TouchableOpacity style={styles.button2}
              onPress={SimpleAlert}
            >
              <Text style={styles.textButton}>CANCEL</Text>
            </TouchableOpacity>
            </View>
          </View>
    </SafeAreaView>
  )
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
        margin: 15,
    },
    Detail:{
        backgroundColor:'#fff',
        width:350,
        height:280,
        marginTop:15,
        elevation:5,
        borderRadius:15,
        margin:10,
        borderWidth:2,
        borderColor:'#B70404'
      },
      text: {
        fontSize:20,
        color:'#ffff',
        marginTop:18,
      },
      DetailTexts:{
        padding:10,
        height: 145,
        marginBottom:25,
      
      },
      DetailsText:{
        fontSize:15,
        padding:5,
      },
      textButton:{
        color:'#ffff',
        fontSize:20,
      },
      button1:{
        backgroundColor:'#B70404',
        width:140,
        justifyContent:'center',
        alignItems: 'center',
        height:35,
        borderRadius:20,
        margin:10,
        left:10,
        top:20
        
      },
      button2:{
        backgroundColor:'#287338',
        width:140,
        justifyContent:'center',
        alignItems: 'center',
        height:35,
        borderRadius:20,
        margin:10,
        left:20,
        top:20
        
      },
      buttonView:{
        flexDirection:'row',
        top:15,
      },
})



export default ViewDonorDetails;