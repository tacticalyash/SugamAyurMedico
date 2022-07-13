import React,{useState} from 'react';
import {View,Text,SafeAreaView,ScrollView,TouchableOpacity,TextInput} from 'react-native';
import MarqueeText from 'react-native-marquee';
import LogH from '../assets/loginww.svg';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import WebView from 'react-native-webview';
const MedHistory = ({}) => {
    
    
    return(
        
         
        <WebView
        source={{ uri: 'https://www.mydietmealplan.com/' }}
        style={{ marginTop: 20 }}
      />

                
            
        
    )
}
export default MedHistory;