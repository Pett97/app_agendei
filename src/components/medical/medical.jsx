import React from "react";
import { Text, View } from "react-native";
import styles from "./medical.style";
import Button from "../../components/button/button";
function Medical(props) {
  return (
    <>
      <View style={styles.container}>
        <View>
          <View style={styles.detail}>
            <Text style={styles.description}>{props.description}</Text>
            <Text style={styles.price}>R$ {props.price}</Text>
          </View>
        </View>
        <View>
          <Button text="Agendar"></Button>
        </View>
      </View>
    </>
  );
}

export default Medical;
