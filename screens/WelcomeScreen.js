/*import React from 'react';
import {View,Text,SafeAreaView,ScrollView,TouchableOpacity,TextInput} from 'react-native';
import MarqueeText from 'react-native-marquee';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const WelcomeScreen = () => {
    return(
        
         
            

            <View style={{justifyContent:'center',flex:1,paddingHorizontal:140}}>
                <MarqueeText
          style={{ fontSize: 24 }}
          speed={1}
          marqueeOnStart={true}
          loop={true}
          delay={1000}
        >
          Welcome to the our APP
        </MarqueeText>
               <Text style={{fontSize:30,fontWeight:'bold'}}>
                   Register
               </Text>
               <Text style={{fontSize:30,fontWeight:'bold'}}>
                   Login 
               </Text>
               <View>
               

                   
               </View>
            </View>
  

                
            
        
    )
}
export default WelcomeScreen
*/

import React from 'react';
import {View,Text,SafeAreaView,ScrollView,TouchableOpacity,TextInput} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MarqueeText from 'react-native-marquee';
import BloodBank from './BloodBank'
import AyurvedKatta from './AyurvedKatta'
import DrawerScreen1 from './DrawerScreen1';
import DrawerScreen2 from './DrawerScreen2';
import ExScreen from './ExerciseScreen';
import MyCr from './MyCarePlans'
import HealthINS from './HealthInsurance'
import PrivP from './PrivacyPolicy'
import Tt from './TermsNconditions'
import LogH from '../assets/loginww.svg';
import FeedbackScreen from './FeedbackScreen';
import Loc from './LocalAuth'
import Help from './HelpScreen'
import CrowdFunding from './CrowdFunding';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Drawer = createDrawerNavigator();

const WelcomeScreen = ({navigation}) => {
    return(
        
        <>
        
            <Drawer.Navigator>
                <Drawer.Screen name="Welcome" component={DrawerScreen1} />
                <Drawer.Screen name="Find your hospital" component={DrawerScreen2} />
                <Drawer.Screen name="Fitness Corner" component={ExScreen} />
                <Drawer.Screen name="Make Diet Plan" component={MyCr} />
                <Drawer.Screen name="Get Health Insurance" component={HealthINS} />
                <Drawer.Screen name="Terms & conditons" component={PrivP} />
                <Drawer.Screen name="Privacy Policy" component={PrivP} />
                <Drawer.Screen name="Ayurved Katta" component={AyurvedKatta} />
                <Drawer.Screen name="Blood bank" component={BloodBank} />
                <Drawer.Screen name="FeedBack" component={FeedbackScreen} />
                <Drawer.Screen name="Help" component={Help} />
                <Drawer.Screen name="Order and guidelines" component={Loc} />
                <Drawer.Screen name="CrowdFunding" component={CrowdFunding} />

            </Drawer.Navigator>
        </>
    )
}
export default WelcomeScreen;