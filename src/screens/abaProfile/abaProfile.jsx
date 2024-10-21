import React from 'react'
import { Text, View } from 'react-native'
import styles from './abaProfile.style'
function AbaProfile() {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.title}>Nome:</Text>
        <Text style={styles.text}>Peterson Padua</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Email:</Text>
        <Text style={styles.text}>teste@teste.com.br:</Text>
      </View>
    </View>
  )
}

export default AbaProfile