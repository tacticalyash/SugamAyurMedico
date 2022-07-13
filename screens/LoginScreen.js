import React from 'react';
import {View,Text,SafeAreaView,ScrollView,TouchableOpacity,TextInput} from 'react-native';
import MarqueeText from 'react-native-marquee';

import LogH from '../assets/loginww.svg';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const LoginScreen = ({ navigation }) => {
    return(
        
         
            <View style={{justifyContent:'center',alignItems:'center'}}>
 
 <View style={{}}  >
 <LogH height={300} width={300} />
 </View>
  <Text style={{fontSize:50,fontWeight:'bold'}} > 

   Let's Login </Text>
  <View style={{paddingHorizontal:30}}>
          <TextInput placeholder='@  Email ID' />
          <TextInput placeholder='#  password' />
          </View>
          <View>
          <TouchableOpacity
          onPress={() => navigation.navigate('Main')}
          style={{backgroundColor:'#00FFFF',padding:20,width:'90%',borderRadius:5,flexDirection:'row',
          justifyContent:'space-between',marginBottom:50}}>
              <Text style={{fontWeight:'bold',fontSize:20,color:'black'}}>LOG IN</Text>
          </TouchableOpacity>
          </View>
     </View>

                
            
        
    )
}
export default LoginScreen;