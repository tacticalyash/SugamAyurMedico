import React from 'react';
import { Text,View ,ScrollView} from 'react-native';
import CrowdFunding from './CrowdFunding';
import LocAu from '../assets/authLoc.svg'
const LocalAuth = () => {

return(
    <View>
<ScrollView>
<View style={{}}  >
 

<WebView
        source={{ uri: 'https://medulance.com/' }}
        style={{ marginTop: 20 }}
      />
 
 <LocAu height={700} width={700} />
</View>
</ScrollView>
</View>
)
}


export default LocalAuth;