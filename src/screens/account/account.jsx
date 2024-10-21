import { Image, TextInput, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./account.style";
import Button from "../../components/button/button";

//assets
import icon from "../../constants/icon";
export default function Account() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image source={icon.logo} style={styles.logo} />
      </View>
      <View>
        <View style={styles.containerInput}>
          <TextInput placeholder="Nome" style={styles.input} />
        </View>
        <View style={styles.containerInput}>
          <TextInput placeholder="E-mail" style={styles.input} />
        </View>
        <View style={styles.containerInput}>
          <TextInput
            placeholder="Senha"
            style={styles.input}
            secureTextEntry={true}
          />
        </View>
        <Button text="Acessar" />
      </View>
      <View style={styles.footer}>
        <Text>Já Tenho Conta</Text>
        <TouchableOpacity>
          <Text style={styles.footerLink}> Fazer Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
