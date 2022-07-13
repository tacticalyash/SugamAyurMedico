import React,{useState} from 'react';
import {View,Text,SafeAreaView,ScrollView,TouchableOpacity,TextInput} from 'react-native';
import MarqueeText from 'react-native-marquee';
import LogH from '../assets/loginww.svg';
import Medh from '../assets/medHis.svg';
import MED2 from '../assets/MED2.svg';
import VAM from '../assets/LAMO.svg';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const MedHistory = ({navigation}) => {
    const [selectedLanguage, setSelectedLanguage] = useState();
    
    return(
        
         
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}} >

                <Text 
                     onPress={()=>navigation.navigate('Status')}
                    style={{fontSize:26,fontWeight:'bold',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                        
                                   
                </Text>
                

                <View style={{}}  >
 
 

 
                <VAM height={700} width={700} />
 </View>

 
 
     </View>

                
            
        
    )
}
export default MedHistory;