import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./appointment.style";
import icon from "../../constants/icon";
import Button from "../button/button"

function Appointment(props) {
  return (
    <View style={styles.appointment}>
      <Text style={styles.name}>{props.service} - {props.doctor}
      </Text>
      <Text style={styles.specialty}>{props.specialty}</Text>
      <View style={styles.container}>
        <View style={styles.containerBooking}>
          <View style={styles.booking}>
            <Image style={styles.icon} source={icon.calendar} />
            <Text style={styles.bookingDate}>10/01/2024</Text>
          </View>
          <View style={styles.booking}>
            <Image style={styles.icon} source={icon.clock} />
            <Text style={styles.bookingHour}>09:00H</Text>
          </View>
        </View>
        <View style={styles.containerButton}>
          <Button text="Cancelar Atendimento" theme="danger"></Button>
        </View>
        
      </View>
    </View>
  );
}

export default Appointment;
