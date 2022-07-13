import React from 'react';
import { Text, View } from 'react-native';
import { DataTable, Menu, TextInput, TouchableRipple,SafeAreaView } from 'react-native-paper';
import MarqueeText from 'react-native-marquee';
export default function DrawerScreen2 () {
    const [visible1, setVisible1] = React.useState(false);
    const [visible2, setVisible2] = React.useState(false);
    const [visible3, setVisible3] = React.useState(false);


    const [menu1, setMenu1] = React.useState(undefined);
    const [menu2, setMenu2] = React.useState(undefined);
    const [menu3, setMenu3] = React.useState(undefined);

    const menu1_opts = ['Hospital','Clinic', 'Medical','Physiotherapy'];
    const menu2_opts = ['Mumbai', 'Nashik','Pune','Thane','Kalyan','Bandra','Santacruz','Juhu','Dadar','Byculla','Worli','Colaba','Wadala','Goregaon','Malad','Andheri'];
    const menu3_opts = ['Neuro_specialist','Skin_specialist','Flu(variants)', 'Maleria','Dengue','Cancer(variants)','AIDS(HIV)','Covid(variants)','plague','Diabetes','Depression','Liver disease(variants)','Kidney disease(variants)','Brain disease/neurological problems'];

    React.useEffect(() => {
        if (menu1 && menu2 && menu3) {
            console.log('all inputs filled')
            // exec code here
        }
    }, [menu1, menu2, menu3])


    return (
        <View>
            <Menu
                visible={visible1}
                onDismiss={() => setVisible1(false)}
                anchor={<TouchableRipple onPress={() => setVisible1(true)}><TextInput label="Medico" value={menu1} editable={false} right={<TextInput.Icon name={visible1 ? "menu-up" : "menu-down"} />} /></TouchableRipple>}
            >
                {
                    menu1_opts.map(v => <Menu.Item key={v} title={v} onPress={() => {
                        setMenu1(v)
                        setVisible1(false)
                    }} />)
                }
            </Menu>
            <Menu
                visible={visible2}
                onDismiss={() => setVisible2(false)}
                anchor={<TouchableRipple onPress={() => setVisible2(true)}><TextInput label="City" value={menu2} editable={false} right={<TextInput.Icon name={visible2 ? "menu-up" : "menu-down"} />} /></TouchableRipple>}
            >
                {
                    menu2_opts.map(v => <Menu.Item key={v} title={v} onPress={() => {
                        setMenu2(v)
                        setVisible2(false)
                    }} />)
                }
            </Menu>
            <Menu
                visible={visible3}
                onDismiss={() => setVisible3(false)}
                anchor={<TouchableRipple onPress={() => setVisible3(true)}><TextInput label="Disease" value={menu3} editable={false} right={<TextInput.Icon name={visible3 ? "menu-up" : "menu-down"} />} /></TouchableRipple>}
            >
                {
                    menu3_opts.map(v => <Menu.Item key={v} title={v} onPress={() => {
                        setMenu3(v)
                        setVisible3(false)
                    }} />)
                }
            </Menu>
            <Text>
                {
                    (menu1 === 'Hospital' && menu2 === 'Mumbai' && menu3 === 'Maleria') ?
                    (
                        <DataTable>
      <DataTable.Header>
        <DataTable.Title>Hospital/Clinic Name</DataTable.Title>
        <DataTable.Title >Doctors</DataTable.Title>
        <DataTable.Title numeric >Beds </DataTable.Title>
       
      </DataTable.Header>

      

      <DataTable.Row>
        <DataTable.Cell>Smyle Hospital</DataTable.Cell>
        <DataTable.Cell >Dr. V J Tannu- Dermatologist</DataTable.Cell>
        <DataTable.Cell >12</DataTable.Cell>
        
      </DataTable.Row>

      <DataTable.Row>
      <DataTable.Cell>Antiaging  hospital</DataTable.Cell>
        <DataTable.Cell >Dr Mohan Darbastwar </DataTable.Cell>
        <DataTable.Cell >13</DataTable.Cell>
       
      </DataTable.Row>

      <DataTable.Row>
      
        <DataTable.Cell >Poona Superspeciality Hospital</DataTable.Cell>
        <DataTable.Cell>Dr. Priya Pawar</DataTable.Cell>
        <DataTable.Cell >11</DataTable.Cell>
        
      </DataTable.Row>

      <DataTable.Row>
      
        <DataTable.Cell >K&J Hospital</DataTable.Cell>
        <DataTable.Cell>Dr.sonia khan</DataTable.Cell>
        <DataTable.Cell >10</DataTable.Cell>
       
      </DataTable.Row>

      <DataTable.Row>
      <DataTable.Cell>Dr. Suresh Raina</DataTable.Cell>
        <DataTable.Cell >sommaiya Hospital</DataTable.Cell>
        <DataTable.Cell >14</DataTable.Cell>
       
      </DataTable.Row> 

      <DataTable.Row>
      <DataTable.Cell>dr Manushi Chillar</DataTable.Cell>
        <DataTable.Cell >Mansvi Hospital</DataTable.Cell>
        <DataTable.Cell >13</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
      <DataTable.Cell>Dr Amol palekar</DataTable.Cell>
        <DataTable.Cell >sahyadari Hospital</DataTable.Cell>
        <DataTable.Cell >12</DataTable.Cell>
      </DataTable.Row>

      
    </DataTable>
                    ) : (menu1 === 'Clinic' && menu2 === 'Pune' && menu3 === 'Diabetes') ? (
                        <DataTable>
      <DataTable.Header>
        <DataTable.Title>Clinic Name</DataTable.Title>
        <DataTable.Title >Doctors</DataTable.Title>
        <DataTable.Title numeric >Beds </DataTable.Title>
 
      </DataTable.Header>

      

      <DataTable.Row>
        <DataTable.Cell>Wayke Clinic</DataTable.Cell>
        <DataTable.Cell >Dr saira banu </DataTable.Cell>
        <DataTable.Cell >12</DataTable.Cell>
        
      </DataTable.Row>

      <DataTable.Row>
      <DataTable.Cell>Antiag clinic</DataTable.Cell>
        <DataTable.Cell >Dr Himmesh </DataTable.Cell>
        <DataTable.Cell >13</DataTable.Cell>
       
      </DataTable.Row>

      <DataTable.Row>
      <DataTable.Cell >Una clinic  </DataTable.Cell>
      <DataTable.Cell>Dr. Priya Pawar</DataTable.Cell>
        
        <DataTable.Cell >11</DataTable.Cell>
        
      </DataTable.Row>

      <DataTable.Row>
      <DataTable.Cell >K&J Clinic</DataTable.Cell>
      <DataTable.Cell>Dr.sonia khan</DataTable.Cell>
        
        <DataTable.Cell >10</DataTable.Cell>
       
      </DataTable.Row>

      <DataTable.Row>
      <DataTable.Cell >soman Clinic</DataTable.Cell>
      <DataTable.Cell>Dr. Suresh Raina</DataTable.Cell>
       
        <DataTable.Cell >14</DataTable.Cell>
       
      </DataTable.Row> 

      <DataTable.Row>
      <DataTable.Cell >Mansvi_ Clinic</DataTable.Cell>
      <DataTable.Cell> dr Manushi Chillar</DataTable.Cell>
        
        <DataTable.Cell >13</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
      <DataTable.Cell >sahoo Clinic</DataTable.Cell>
      <DataTable.Cell>Dr Amol palekar</DataTable.Cell>
        
        <DataTable.Cell >12</DataTable.Cell>
      </DataTable.Row>

      
    </DataTable>
                    ) : visible3 ? (
                        <Text>Menu 3 visible</Text>
                    ) : (
                        <View>
                       <Text style={{fontWeight:'bold',color:'green'}}>
                      
                           1) Kindly Choose your preferable Hospital && medical appliances
                      
                      
                       </Text>
                       <Text style={{fontWeight:'bold',color:'brown'}}>
                      
                           2) First of all,you have to select City which you are staying currenlty
                      
                      
                       </Text>
                       <Text style={{fontWeight:'bold',color:'red'}}>
                      
                           3) As per Your selction it will gives all data 
                      
                       </Text>
                       <Text style={{fontWeight:'bold',color:'maroon'}}>
                      
                           4) Kindly,Please Do Not Messed Up the options from the table,it will overide the results! 
                      
                       </Text>
                       <Text style={{fontWeight:'bold',color:'red'}}>
                      
                           5) If you dont find your city Or unsatisfy with results then contact us! 
                           we will try to fix or add new data in it.                      
                       </Text>
                       <Text style={{fontWeight:'bold',color:'red'}}>
                      
                     us! 
                      we will try to fix or add new data in it.                      
                  </Text>
                       

              </View>              
      

      
                    )
                }
            </Text>
        </View>        
    )
}

