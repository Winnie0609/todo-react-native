import React from 'react'
import { View, Text, StyleSheet } from "react-native"
import AddTodo from './containers/AddTodo'

function TodoApp() {
  return (
    <View style={ styles.container }>
      <AddTodo/>
    </View>
  ) 
}

export default TodoApp

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  }
})