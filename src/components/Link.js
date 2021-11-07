import React from 'react'
import { View, StyleSheet, Button } from "react-native"

const Link = ({ active, children, onClick }) => (
  <View style={styles.button}>
    <Button
      title={children}
      onPress={onClick}
      disabled={active}
      color="#841584" 
    />
  </View>
)

export default Link

const styles = StyleSheet.create({
  button: {
    height: 50, 
    alignItems: 'center',
    justifyContent: 'center',
    elevation:3,
    marginRight: 20,
  },
})