import React ,{Component} from 'react';
import {View,Text,SafeAreaView,ScrollView,TouchableOpacity,TextInput} from 'react-native';
import WebView from 'react-native-webview';
import MarqueeText from 'react-native-marquee';



//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';




const MapsScreen = ({navigation}) => {
    
    return(
        
         
            



                   
                        
 <WebView
        source={{ uri: 'https://www.google.com/maps' }}
        style={{ marginTop: 20 }}
      />



                        
                

 
 
     

                
            
        
    )
}
export default MapsScreen; 