import React from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Button } from 'react-native'
import { toggleTodo, deleteTodo } from '../actions/action'
import { connect } from 'react-redux'

function TodoList({ todos, dispatch }) {
  function completeHandleChange(item) {
    dispatch(toggleTodo(item))
  }

  function deleteHandlerChange(item) {
    console.log('delete' + item.text)
    dispatch(deleteTodo(item))
  }

  function editHandlerChange(item) {
    console.log('edit' + item.text)
  }

  return(
    <View>
      {todos.map((item) => (
        <View style={{ flexDirection: "row", fontSize: 300 }}>
          
          <Text onPress={() => completeHandleChange(item)}>*** </Text>
          
          <Text 
            style={{ textDecorationLine: item.completed? 'line-through': 'none' }}
            key={item.id}>
              { item.id } { item.text } 
          </Text>

          <Text> {item.completed? 'done' : 'uncompleted'} </Text>

          <Text onPress={() => editHandlerChange(item)}>edit </Text>
          <Text onPress={() => deleteHandlerChange(item)}>delete </Text>
        </View>
      ))}
    </View>
  )
}

export default connect()(TodoList)