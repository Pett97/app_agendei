import React from "react";
import { FlatList, Text, View } from "react-native";
import styles from "./abahome.style";
import { doctors } from "../../constants/data";
import Doctor from "../../components/doctor/doctor";
import icon from "../../constants/icon";

function AbaHome() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Agende seus serviços medicos</Text>
      <FlatList data={doctors} keyExtractor={(doc) => doc.id_doctor} showsVerticalScrollIndicator={false}
        renderItem={({item})=>{
          return (
            <Doctor name={item.name} 
                    icon={item.icon =="M" ? icon.male : icon.female}
                    specialty={item.specialty}
            />
          )
        }}
      ></FlatList>
    </View>
  );
}

export default AbaHome;
