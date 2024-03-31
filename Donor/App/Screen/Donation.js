import { SafeAreaView, StyleSheet, Text, View ,StatusBar,TouchableOpacity,Image,onPressHandler, Alert, ScrollView} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

function Donation() {

    const navigation = useNavigation()

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

      const onPressHandler = ()=>{
        navigation.navigate('HomeScreen')
      }

  return (



    <SafeAreaView style={styles.container}>
       <View style={styles.Headerview}>
          <TouchableOpacity 
            onPress={onPressHandler }
          >
            <View style={styles.Menuview}>
              <Image
                style={styles.menu}
                source={require('../assets/Back.png')}
              />
            </View>
          </TouchableOpacity>
          <Text style={styles.text}>Current Donation</Text>
        </View>
        <ScrollView
          style={{
            width:"95%",
            marginVertical:10,

          }}
        >
        <TouchableOpacity 
          onPress={()=> navigation.navigate('PastDonation')}
        >
          <View style={{
            height:75,
            width:350,
            backgroundColor:'#B70404',
            margin:10,
            alignItems:'center',
            justifyContent:'center',
            borderRadius:40,


          }}>
            <View style={styles.Navi} >
            <Image
                style={styles.menu}
                source={require('../assets/paste.png')}
              />
              <Text
                style={{
                  color:'#fff',
                  fontSize:20,
           

                }}
              >Past Donation</Text>
            </View>
            </View>
          </TouchableOpacity>
        <View style={styles.Detail}>
          
          <View style={styles.DetailTexts}>
            <Text style={styles.DetailsText} >Patient Name : </Text>
            <Text style={styles.DetailsText} >Blood Type : </Text>
            <Text style={styles.DetailsText} >Needed By : </Text>
            <Text style={styles.DetailsText} >Location : </Text>
            <Text style={styles.DetailsText} >Contact NO : </Text>
          </View >
          <TouchableOpacity style={styles.button}
          onPress={SimpleAlert}
          >
            <Text style={styles.textButton}>CANCEL</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.Detail}>
          
          <View style={styles.DetailTexts}>
            <Text style={styles.DetailsText} >Patient Name : </Text>
            <Text style={styles.DetailsText} >Blood Type : </Text>
            <Text style={styles.DetailsText} >Needed By : </Text>
            <Text style={styles.DetailsText} >Location : </Text>
            <Text style={styles.DetailsText} >Contact NO : </Text>
          </View >
          <TouchableOpacity style={styles.button}
          onPress={SimpleAlert}
          >
            <Text style={styles.textButton}>CANCEL</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.Detail}>
          
          <View style={styles.DetailTexts}>
            <Text style={styles.DetailsText} >Patient Name : </Text>
            <Text style={styles.DetailsText} >Blood Type : </Text>
            <Text style={styles.DetailsText} >Needed By : </Text>
            <Text style={styles.DetailsText} >Location : </Text>
            <Text style={styles.DetailsText} >Contact NO : </Text>
          </View >
          <TouchableOpacity style={styles.button}
          onPress={SimpleAlert}
          >
            <Text style={styles.textButton}>CANCEL</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.Detail}>
          
          <View style={styles.DetailTexts}>
            <Text style={styles.DetailsText} >Patient Name : </Text>
            <Text style={styles.DetailsText} >Blood Type : </Text>
            <Text style={styles.DetailsText} >Needed By : </Text>
            <Text style={styles.DetailsText} >Location : </Text>
            <Text style={styles.DetailsText} >Contact NO : </Text>
          </View >
          <TouchableOpacity style={styles.button}
          onPress={SimpleAlert}
          >
            <Text style={styles.textButton}>CANCEL</Text>
        </TouchableOpacity>
        </View>
        
        </ScrollView>
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
    text: {
      fontSize:20,
      color:'#ffff',
      marginTop:18,
    },
    Detail:{
      height:220,
      width:'95%',
      backgroundColor:'#fff',
      borderRadius:15,
      elevation:10,
      margin:10,
    },

    Navi:{
      height:60,
      width:340,
      backgroundColor:'#B70404',
      borderRadius:30,
      justifyContent:'center',
      alignItems:'center',
      flexWrap:'wrap',
      borderWidth:4,
      borderColor:'#fff',
      paddingLeft:50,
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
      width:200,
      justifyContent:'center',
      alignItems: 'center',
      height:35,
      borderRadius:20,
      margin:10,
      left:70,
      top:20
      
    },
    textButton:{
      color:'#ffff',
      fontSize:20,
    }
})


export default Donation;