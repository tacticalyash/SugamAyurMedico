import React,{useState} from 'react';
import {View,Text,SafeAreaView,ScrollView,TouchableOpacity,TextInput} from 'react-native';
import MarqueeText from 'react-native-marquee';
import LogH from '../assets/loginww.svg';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import WebView from 'react-native-webview';
const MedHistory = ({}) => {
    
    
    return(
        
         
        <WebView
        source={{ uri: 'https://www.nivabupa.com/health-insurance-plans/get-quote.html?gclid=Cj0KCQjwspKUBhCvARIsAB2IYuuA4tnCVVXOHjeGBSPfkzD-UV0Hp_do-Ddvbhf3tdhL-bRAZIERxu0aAopzEALw_wcB&cid=S_Gen_B_Top_Cities&utm_source=google&utm_medium=cpc&utm_campaign=Niva_Bupa_Generic_Phrase_Top_Cities&utm_term=health%20insurance%20policies&utm_content=Health_Policy&ef_id=Cj0KCQjwspKUBhCvARIsAB2IYuuA4tnCVVXOHjeGBSPfkzD-UV0Hp_do-Ddvbhf3tdhL-bRAZIERxu0aAopzEALw_wcB:G:s&s_kwcid=AL!7961!3!554023614362!p!!g!!health%20insurance%20policies' }}
        style={{ marginTop: 20 }}
      />

                
            
        
    )
}
export default MedHistory;