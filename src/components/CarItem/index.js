import React from "react";
import { View, Text } from "react-native";
import { Car } from "../../store/ducks/cars/types";
// import { Container } from './styles';

interface OwnProps {
  car: Car;
}

export default function CarItem({ car }: OwnProps) {
  const { marca, modelo, ano, descricao, km } = car;

  return (
    <View>
      <Text>{marca}</Text>
      <Text>{modelo}</Text>
      <Text>{ano}</Text>
      <Text>{km}</Text>
    </View>
  );
}
