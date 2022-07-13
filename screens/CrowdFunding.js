import  React,{useState} from 'react';
import { DataTable } from 'react-native-paper';
import {View,Text,ScrollView,SafeAreaView,TextInput} from 'react-native';

const optionsPerPage = [2, 3, 4];

const CrowdFunding = () => {
  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (

    

    
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Organization</DataTable.Title>
        <DataTable.Title numeric>Crowd  Funding organization info</DataTable.Title>
 
      </DataTable.Header>

      

      <DataTable.Row>
        <DataTable.Cell>ketto</DataTable.Cell>
        <DataTable.Cell >https://www.ketto.org/</DataTable.Cell>
        
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Fundable</DataTable.Cell>
        <DataTable.Cell >https://www.fundable.com</DataTable.Cell>
       
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>ImpactGuru</DataTable.Cell>
        <DataTable.Cell >https://www.impactguru.com</DataTable.Cell>
        
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Milaap</DataTable.Cell>
        <DataTable.Cell >https://milaap.org/</DataTable.Cell>
       
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Crowdera</DataTable.Cell>
        <DataTable.Cell >https://www.gocrowdera.com/</DataTable.Cell>
       
      </DataTable.Row> 

      <DataTable.Row>
        <DataTable.Cell>Selmon bhoi</DataTable.Cell>
        <DataTable.Cell >https://www.selmonbhoi.com</DataTable.Cell>
        
      </DataTable.Row>

      
    </DataTable>
  );
}

export default CrowdFunding;