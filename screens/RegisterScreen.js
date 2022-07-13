import React,{useState} from 'react';
import {View,Text,SafeAreaView,ScrollView,TouchableOpacity,TextInput} from 'react-native';
import MarqueeText from 'react-native-marquee';

import RegE from '../assets/nags.svg';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const RegisterScreen = ({navigation}) => {

 







    return(
        <ScrollView>
         
            <View style={{justifyContent:'center',alignItems:'center'}}>
                
 
 <View style={{}}  >
 <RegE height={300} width={300} />
 </View>
 <MarqueeText
          style={{ fontSize: 24,color:'red' }}
          speed={1}
          marqueeOnStart={true}
          loop={true}
          delay={100}
        >
         ** Register by filling your all required data or LOG IN if you are existing USER _/\_  .**
        </MarqueeText>
  <View style ={{flexDirection:'column',borderBottomColor:'#ccc',borderBottomWidth:1,paddingBottom:3,marginBottom:25}}>
     <TextInput placeholder='Name' style={{fontWeight:'bold',borderWidth:2 ,marginBottom:5}}/>
     <TextInput placeholder='Pick UserName as per your choice' style={{fontWeight:'bold',borderWidth:2,marginBottom:5}} />
     
     <TextInput 
     
    
     
     placeholder='Phone No' style={{fontWeight:'bold',borderWidth:2,marginBottom:5}}/>
     <TextInput placeholder='Email id' style={{fontWeight:'bold',borderWidth:2,marginBottom:5}}/>
    
     <TouchableOpacity
        onPress={() => navigation.navigate('Main')}
      
      
      // onPress={() => sendOtp()}
        style={{backgroundColor:'#00FFFF',padding:20,width:'90%',borderRadius:5,flexDirection:'row',
        justifyContent:'space-between',marginBottom:50}}
     >
         <Text  style={{fontWeight:'bold',fontSize:20,color:'white'}}>
             Register
         </Text>
     </TouchableOpacity>

  
     
         <Text style={{fontSize:15}}> Already registered?  </Text>
         <TouchableOpacity
         style={{backgroundColor:'#FF69B4',padding:10,width:'90%',borderRadius:5,flexDirection:'row',
         justifyContent:'space-between',marginBottom:50}}
            onPress={() => navigation.navigate('Login')}
         >
         <Text style={{fontWeight:'bold',fontSize:20,color:'black'}}> LOG IN </Text>
         </TouchableOpacity>
       </View>   
     </View>

                 
          </ScrollView>
        
    )
}
export default RegisterScreen;