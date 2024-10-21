import { Image, TextInput, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./login.style";
import Button from "../../components/button/button";

//assets
import icon from "../../constants/icon";
export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image source={icon.logo} style={styles.logo} />
      </View>
      <View>
        <View style={styles.containerInput}>
          <TextInput placeholder="E-mail" style={styles.input} />
        </View>
        <View style={styles.containerInput}>
          <TextInput placeholder="Senha" style={styles.input} secureTextEntry={true} />
        </View>
        <Button text="Acessar" />
      </View>
      <View style={styles.footer}>
        <Text>Não Tenho uma conta</Text>
        <TouchableOpacity >
          <Text style={styles.footerLink}> Criar uma Agora</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
