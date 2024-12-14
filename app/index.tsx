import {View, Text, FlatList} from 'react-native';
import bike from "../assets/bike.json";
import BikeList from '../components/BikeList';
// function BikeList({bikes}) {
//   return <Text style={{ fontSize: 30 }}>{bikes.name}</Text>;
// }

export default function HomeScreen() {
  return (
    <View>
      <FlatList
        data={bike}
        renderItem={({ item }) => (
          <BikeList bikes={item}/>
        )}
      />
    </View>
  );
}
