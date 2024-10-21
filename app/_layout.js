import { Tabs } from "expo-router";
import React from "react";
import icon from "../src/constants/icon";
import { Image, Text, View } from "react-native";
import { COLORS, FONT_SIZE } from "../src/constants/theme";


function _layout() {
  return (
    <Tabs>
      <Tabs.Screen
      //MEDICOS
         name="doctors/home"
         options={{
           headerTitle:()=>(
              <View>
                <Image source={icon.logo} style={{width:125,height:25}} />
              </View>
           ),
           headerTitleAlign:"center",
           title:"",
           tabBarIcon:()=><Image source={icon.female}/>,
         }}
      />
      
      <Tabs.Screen
      //CONSULTAS
         name="appointments/appointment"
         options={{
           headerTitle:()=>(
            <View>
              <Text style={{color:COLORS.blue,fontSize:FONT_SIZE.xl}}>Minhas Reservas</Text>
            </View>
           ),
           headerTitleAlign:"center",
           title:"",
           tabBarIcon:()=><Image source={icon.calendar}/>,
         }} 
      />
      <Tabs.Screen
      //MEU PERFIL
        name="profiles/profile" //nome do aquivo
        options={{
          headerTitle: ()=>(
            <View>
              <Text style={{color:COLORS.blue,fontSize:FONT_SIZE.xl}}>Meu Perfil</Text>
            </View>
          ),
          headerTitleAlign:"center",
          title:"",
          tabBarIcon: () => <Image source={icon.profile} />,
        }}
      />
      <Tabs.Screen
        name="services/service"
        options={{
          headerTitle:()=>(
            <View>
              <Text style={{color:COLORS.blue,fontSize:FONT_SIZE.xl}}>Serviços</Text>
            </View>
          ),
          headerTitleAlign:"center",
          title:"",
          tabBarIcon: () => <Image source={icon.clock} />,
        }}
      />
    </Tabs>
  );
}


export default _layout;
