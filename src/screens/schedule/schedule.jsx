import React, { useState } from "react";
import { Text, View } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { ptBR } from "../../constants/calendar";
import { COLORS } from "../../constants/theme";
import { Picker } from "@react-native-picker/picker";
import Button from "../../components/button/button";
import styles from "./shedule.style";
LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

function Schedule() {
  const [selected, setSelect] = useState(new Date().toISOString().slice(0,10));
  const [selectHour,setSelectHour] = useState("");
  return (
    <View style={styles.container}>
      <View>
        <Text>adasd</Text>
        <Calendar
          onDayPress={(day) => {
            setSelect(day.dateString);
            console.log(`Data Selecionada ${day.dateString}`);
          }}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedColor: COLORS.blue,
            },
          }}
          minDate={new Date().toDateString()}
        ></Calendar>
      </View>
      <View>
        <Text style={styles.textHour}>Horário</Text>
        <Picker selectedValue={selectHour} onValueChange={(itemValue,itemIndex)=>{
            setSelectHour(itemValue)
        }}>
          <Picker.Item label="09:00" value="09:00"/>
          <Picker.Item label="10:00" value="10:00"/>
          <Picker.Item label="11:00" value="11:00"/>
        </Picker>
      </View>
      <View>
        <Button  text="Confirmar Reserva"/>
      </View>
    </View>
  );
}

export default Schedule;
