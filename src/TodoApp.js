import React from 'react'
import { View, Text, StyleSheet } from "react-native"
import AddTodo from './containers/AddTodo'
import FilterBar from './components/FilterBar'
import FilteredTodoList from './containers/FilteredTodoList'

function TodoApp() {
  return (
    <View style={ styles.container }>
      <FilterBar />
      <AddTodo/>
      <FilteredTodoList/>
    </View>
  ) 
}

export default TodoApp

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  }
})