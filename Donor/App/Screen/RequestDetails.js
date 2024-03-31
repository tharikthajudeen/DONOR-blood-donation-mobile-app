import { SafeAreaView, StyleSheet, Text, View ,StatusBar,TouchableOpacity,Image,onPressHandler, Alert} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

function RequesDetails() {
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
          <Text style={styles.text}>Blood Requests Details</Text>
        </View>
        <View style={styles.Detail}>
          <View style={styles.DetailTexts}>
            <Text style={styles.DetailsText} >Patient Name : </Text>
            <Text style={styles.DetailsText} >Blood Type : </Text>
            <Text style={styles.DetailsText} >Needed By : </Text>
            <Text style={styles.DetailsText} >Location : </Text>
            <Text style={styles.DetailsText} >Contact NO : </Text>
          </View >
        </View>
        <TouchableOpacity style={styles.button}
          onPress={SimpleAlert}
          >
            <Text style={styles.textButton}>ACCEPT</Text>
        </TouchableOpacity>
        
    </SafeAreaView>
  )
}
export default RequesDetails;

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
  height:200,
  width:'95%',
  backgroundColor:'#fff',
  margin:10,
  borderRadius:15,
  elevation:10,
  
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
  
},
textButton:{
  color:'#ffff',
  fontSize:20,
}

})