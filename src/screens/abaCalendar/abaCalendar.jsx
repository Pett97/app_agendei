import React from "react";
import { FlatList, Text, View } from "react-native";
import styles from "./abaCalendar.style";
import { appointments } from "../../constants/data";
import Appointment from "../../components/appointment/appointment";

function AbaCalendar() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Agende seus serviços medicos</Text>
      <FlatList data={appointments} keyExtractor={(appointment) => appointment.id_appointment} showsVerticalScrollIndicator={false}
        renderItem={({item})=>{
          return (
            <Appointment service={item.service} doctor={item.doctor} specialty={item.specialty} />
          )
        }}
      ></FlatList>
    </View>
  );
}

export default AbaCalendar;
