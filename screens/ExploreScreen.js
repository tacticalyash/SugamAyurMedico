import React from 'react';
import {View,Text,SafeAreaView,ScrollView,TouchableOpacity,TextInput} from 'react-native';
import MarqueeText from 'react-native-marquee';
import FD from './FeedbackScreen'
import LogH from '../assets/loginww.svg';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const ExploreScreen = () => {
    return(
    
        <SafeAreaView>
            <TouchableOpacity
            
            style={{backgroundColor:'#E8BEAC',padding:20,width:'90%',borderRadius:5,flexDirection:'row',
      justifyContent:'center',alignItems:'center' ,marginBottom:5}}
            >
        <Text style={{fontWeight:'bold',fontSize:20,color:'#fff',justifyContent:'flex-end'}}>
          Crowd funding
      </Text>
            </TouchableOpacity>

            <TouchableOpacity
            
            style={{backgroundColor:'#4B0082',padding:20,width:'90%',borderRadius:5,flexDirection:'row',
      justifyContent:'center',marginBottom:5}}
            >
<Text style={{fontWeight:'bold',fontSize:20,color:'#fff',justifyContent:'flex-end'}}>
    Local Authorities

</Text>

            </TouchableOpacity>

            <TouchableOpacity
            
            
            style={{backgroundColor:'#191970',padding:20,width:'90%',borderRadius:5,flexDirection:'row',
      justifyContent:'center',marginBottom:5}}
            >
                <Text style={{fontWeight:'bold',fontSize:20,color:'#fff',justifyContent:'flex-end'}}>
                    Blood bank
                </Text>

            </TouchableOpacity>

            <TouchableOpacity
            
            style={{backgroundColor:'#228B22',padding:20,width:'90%',borderRadius:5,flexDirection:'row',
      justifyContent:'center',marginBottom:5}}
            >
                <Text style={{fontWeight:'bold',fontSize:20,color:'#fff',justifyContent:'flex-end'}}>
                    Ayurvedic katta
                </Text>

            </TouchableOpacity>

            <TouchableOpacity
            
            
            style={{backgroundColor:'#ffa700',padding:20,width:'90%',borderRadius:5,flexDirection:'row',
      justifyContent:'center',marginBottom:5}}
            >
         <Text style={{fontWeight:'bold',fontSize:20,color:'#fff',justifyContent:'flex-end'}}>
             Feedback && Grievance
         </Text>
            </TouchableOpacity>
            <TouchableOpacity
            
            
            style={{backgroundColor:'#FF7F50',padding:20,width:'90%',borderRadius:2,flexDirection:'row',
      justifyContent:'center',marginBottom:5}}
            >
         <Text  style={{fontWeight:'bold',fontSize:20,color:'#fff',justifyContent:'flex-end'}}>
             Help && Emergency
         </Text>
            </TouchableOpacity>
            <TouchableOpacity
            
            style={{backgroundColor:'#DC143C',padding:20,width:'90%',borderRadius:5,flexDirection:'row',
      justifyContent:'center',marginBottom:5}}
            >
         <Text style={{fontWeight:'bold',fontSize:20,color:'#fff',justifyContent:'flex-end'}}>
             About SugamAyur
         </Text>
            </TouchableOpacity>

            <TouchableOpacity
            
            style={{backgroundColor:'#953553',padding:20,width:'90%',borderRadius:5,flexDirection:'row',
      justifyContent:'center',marginBottom:5}}
            >
         <Text style={{fontWeight:'bold',fontSize:20,color:'#fff',justifyContent:'flex-end'}}>
             Rate this App
         </Text>
            </TouchableOpacity>
        </SafeAreaView>
         
             
                
    )
         

                
            
        
    
}
export default ExploreScreen;