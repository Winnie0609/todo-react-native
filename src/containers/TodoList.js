import React from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
// import { useDispatch } from 'react-redux'


function TodoList({ todos, toggleTodo, deleteTodo, dispatch }) {
  function completeHandleChange(item) {
    dispatch(toggleTodo(item))
  }

  function deleteHandlerChange(item) {
    console.log('delete' + item.text)
    dispatch(deleteTodo(item))
  }

  return(
    <View>
      {todos.map((item, index) => (
        <View style={{ flexDirection: "row", fontSize: 300 }}>
          <Text onPress={() => completeHandleChange(item)}>*** </Text>
          <Text 
            style={{ textDecorationLine: item.completed? 'line-through': 'none' }}
            key={index}>
              { item.id } { item.text } 
          </Text>
          <Text> {item.completed? 'done' : 'uncompleted'} </Text>
          <Text onPress={() => deleteHandlerChange(item)}>delete </Text>
        </View>
      ))}
    </View>
  )
}

export default connect()(TodoList)