import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import styles from "./services.style";
import { doctors_services } from "../../constants/data";
import icon from "../../constants/icon";
import Medical from "../../components/medical/medical";

function Services() {
  return (
    <>
    <View style={styles.banner}>
        <Image source={icon.female}></Image>
         <View style={styles.doctorProps}>
          <Text style={styles.doctorName}>Dr Teste Teste</Text>
          <Text style={styles.doctorSpeciality}>Especialidade</Text>
         </View>
      </View>
    <View style={styles.container}>
      <FlatList
        data={doctors_services} keyExtractor={(item) => item.id_service} showsVerticalScrollIndicator={false} renderItem={({ item }) => {
          return <Medical description={item.description} price={item.price} />;
        }}
      ></FlatList>
    </View>
    </>
  );
}

export default Services;
