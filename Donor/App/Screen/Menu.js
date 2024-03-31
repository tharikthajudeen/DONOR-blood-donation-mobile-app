import { Platform,StyleSheet, Text,StatusBar, View,TouchableOpacity ,Image,ImageBackground} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { imagesDataURL } from "../content/data"
import { COLORS, FONTS, SIZES, images } from "../content";


function Menu() {
  const navigation = useNavigation()

  const onPressHandler = ()=>{
    navigation.navigate('Profile')
}
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.mainview}>
            <View style={styles.pro}>
              <Image
                source={{
                  uri: 'https://i.ibb.co/W29btXp/profile.jpg'
                }}
                resizeMethod='contain'
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 999,
                  borderColor: COLORS.primary,
                  borderWidth: 2,
                }}
              />
            </View>
            <Text style={styles.proname}>User Name</Text>
        </View>
        <View style={styles.fullview}>
          <View style={styles.content}>
            <TouchableOpacity 
              onPress={onPressHandler }
            >
              <View style={styles.Menuview}>
                <Image
                  style={styles.menu}
                  source={require('../assets/account.png')}
              />
            </View>
            <Text style={styles.text}>Profile</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            <TouchableOpacity 
              onPress={()=> navigation.navigate('HomeScreen') }
            >
              <View style={styles.Menuview}>
                <Image
                  style={styles.menu}
                  source={require('../assets/home.png')}
              />
            </View>
            <Text style={styles.text}>Home</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            <TouchableOpacity 
              onPress={() => navigation.navigate('Donation') }
            >
              <View style={styles.Menuview}>
                <Image
                  style={styles.menu}
                  source={require('../assets/Donation.png')}
              />
              </View>
              <Text style={styles.text}>Donation</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            <TouchableOpacity 
              onPress={() => navigation.navigate("Request") }
            >
              <View style={styles.Menuview}>
                <Image
                  style={styles.menu}
                  source={require('../assets/Request.png')}
              />
              </View>
              <Text style={styles.text}>Request</Text>
            </TouchableOpacity>
          </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  container:{
    width:'70%',
    
},
fullview:{
  height:'100%',
  backgroundColor:'#F0CACA',
},

  mainview:{
    width:'100%',
    height:150,
    backgroundColor:'#B70404',
    elevation:30,
    borderTopRightRadius:15,

  },
  pro:{
    borderRadius:50,
    backgroundColor:'#000',
    height:90,
    width:90,
    top:10,
    left:150,
    margin:5,
    alignItems: "center"
    
   
    },
    proname:{
      color:'#fff',
      fontSize:20,
      top:8,
      left:5,
    },
    content:{
      height:50,
      width:'95%',
      margin:8,
      borderRadius:20,
      borderTopColor:'#000',
      borderTopWidth:2,
      borderBottomColor:'#000',
      borderBottomWidth:2,
      borderLeftColor:'#B70404',
      borderLeftWidth:2,
      borderRightColor:'#B70404',
      borderRightWidth:2,
      backgroundColor:'#fff',
      elevation:30,
      marginVertical:10
    },
    text:{
      fontSize:20,
      left:60,
    },
    menu:{
      width: 30,
      height: 30,
      top:8,
      left:15,
    },
    Menuview:{
      height:10,
      width:60, 
  },

})

export default Menu;