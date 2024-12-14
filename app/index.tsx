import {View, Text, FlatList} from 'react-native';
import bike from "../assets/bike.json";
import BikeList from '../components/BikeList';
import { Button, ButtonText } from '@/components/ui/button';
// function BikeList({bikes}) {
//   return <Text style={{ fontSize: 30 }}>{bikes.name}</Text>;
// }

export default function HomeScreen() {
  return (
      // <FlatList
      //   data={bike}
      //   renderItem={({ item }) => (
      //     <BikeList bikes={item}/>
      //   )}
      // />


      
        <Button variant='outline'>
          <ButtonText>Click me</ButtonText>
        </Button> 

  );
}
