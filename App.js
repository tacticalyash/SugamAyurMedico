/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Sav from './assets/sugam.svg';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import CrowdFunding from './screens/CrowdFunding';
import Tabla from './screens/TabNavigatorScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import TabNavigatorScreen from './screens/TabNavigatorScreen';
const Stack = createNativeStackNavigator();


const App = () =>{
  return (
    <PaperProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          component={Reg}
          name="Reg" 
          options={{headerShown:false}} />
        <Stack.Screen
          component={LoginScreen}
          name="Login"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={RegisterScreen}
          name="Signup"
          options={{headerShown: false}}
        />

        <Stack.Screen
          component={TabNavigatorScreen}
          name="Main"
          options={{headerShown:false}} />                 
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}

const Reg = ({navigation} ) =>  {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: '#fff',
    }}>
      
      <View style={{marginTop:20}}>
        <Text style = {{fontSize:60,fontWeight:'bold',color:'#20315f',justifyContent:'center'}}>
          SugamAyur
          
        </Text>
        
      </View>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Sav height={500} width={200} />
      </View>
      <TouchableOpacity
      onPress={() => navigation.navigate('Signup')}
      
      style={{backgroundColor:'#AD40AF',padding:20,width:'90%',borderRadius:5,flexDirection:'row',
      justifyContent:'space-between',marginBottom:50}}>
        <Text style={{fontWeight:'bold',fontSize:20,color:'#fff',justifyContent:'flex-end'}}>
          Let's healthify
        </Text>
      
      </TouchableOpacity>
    </SafeAreaView>
  );
};
/*const Home= () => {
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <TouchableOpacity>
        <Text style ={{fontWeight:'bold',fontSize:30,color:'#FFFAFA'}}>
          Register
        </Text>
      </TouchableOpacity>
    </View>
  )
}*/

export default App;
