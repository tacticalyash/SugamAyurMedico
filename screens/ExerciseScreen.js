import React from 'react';
import {View,Text,SafeAreaView,ScrollView,TouchableOpacity,TextInput} from 'react-native';
import MarqueeText from 'react-native-marquee';
import WebView from 'react-native-webview';
import LogH from '../assets/loginww.svg';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const ExerciseScreen = () => {
    return(
        
        <WebView
        source={{ uri: 'https://www.muscleandfitness.com/workouts/full-body-exercises/' }}
        style={{ marginTop: 20 }}
      />

                
            
        
    )
}
export default ExerciseScreen;