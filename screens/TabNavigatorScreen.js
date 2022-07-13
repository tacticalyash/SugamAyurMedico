import React from 'react';
import {View,Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Icon } from 'react-native-vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
import MedHistory from './MedHistory';
import MapsScreen from './MapsScreen';
import RegisterScreen from './RegisterScreen';
import CrowdFunding from './CrowdFunding';
import ExploreS from './ExploreScreen';

import { createBottomTabNavigator }   from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
//homwName= 'Home'
//detailsName = 'details'
//settingName='settings

const welcomePg= 'Home';
const MedHis='Status';
const MapS = 'Maps';
const Profile = 'Profile';
const Tab = createBottomTabNavigator()
export default function TabNavigatorScreen(){
    return(
        <>
        <Tab.Navigator
        initialRouteName={welcomePg}

        screenOptions={({route}) => ({
            tabBarIcon: ({focused,color,size }) =>{
                let iconName;
                let rn =route.name;

                if(rn === welcomePg){
                    iconName = focused ? 'home' : 'home-outline';
                }
                else if(rn === MedHis){
                    iconName= focused ? 'list' : 'list-outline';

                }
                else if(rn === MapS){
                    iconName = focused ? 'settings' : 'settings-outline';
                }
                else if(rn === Profile){
                    iconName = focused ? 'settings' : 'settings-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />
            },
        })}>
        
        
            <Tab.Screen name={welcomePg} options={{headerShown: false}} component={WelcomeScreen}/>
            <Tab.Screen name={MedHis} component={MedHistory}/>
            <Tab.Screen name={MapS} options={{headerShown: false}} component={MapsScreen}/>

            <Tab.Screen name={Profile} component={ExploreS} />

        </Tab.Navigator>
        </>
    )
}

