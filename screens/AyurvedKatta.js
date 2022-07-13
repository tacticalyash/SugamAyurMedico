import React from 'react';
import { Text,View ,ScrollView} from 'react-native';
import WebView from 'react-native-webview';
import CrowdFunding from './CrowdFunding';
import LocAu from '../assets/authLoc.svg'
const LocalAuth = () => {

return(
    


<WebView
        source={{ uri: 'https://www.nhp.gov.in/ayurveda_mty' }}
        style={{ marginTop: 20 }}
      />

)
}


export default LocalAuth;