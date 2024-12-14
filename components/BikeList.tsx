import { Text } from "react-native";

export default function BikeList({bikes}) {
  return <Text style={{ fontSize: 30 }}>{bikes.name}</Text>;
}