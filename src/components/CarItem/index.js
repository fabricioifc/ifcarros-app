import React from "react";
import { View, Text } from "react-native";
import { Car } from "../../store/ducks/cars/types";
import { styles } from "./styles";
import { Divider } from 'react-native-elements';

interface OwnProps {
  car: Car;
}

export default function CarItem({ car }: OwnProps) {
  const { marca, modelo, ano, descricao, km } = car;

  return (
    <View style={styles.container}>
      <View style={styles.container_text}>
        <Text style={styles.title}>
          {`${marca} ${modelo}`}
        </Text>
        <Text style={styles.detail}>
          {`Ano: ${ano}, km: ${km}`}
        </Text>
        
        <Divider style={{ backgroundColor: 'blue' }} />
        
        <Text style={styles.description}>
          {descricao}
        </Text>
      </View>
    </View>
  );
}
