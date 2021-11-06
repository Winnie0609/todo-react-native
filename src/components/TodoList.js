import React from 'react'
import { View, Text } from 'react-native'
import { toggleTodo, deleteTodo } from '../actions/action'
import { connect } from 'react-redux'

function TodoList({ todos, dispatch }) {
  function completeHandleChange(item) {
    dispatch(toggleTodo(item))
  }

  function deleteHandlerChange(item) {
    dispatch(deleteTodo(item))
  }

  return(
    <View>
      {todos.map((item) => (
        <View style={{ flexDirection: "row", fontSize: 300 }}>
          
          <Text onPress={() => completeHandleChange(item)}>*** </Text>
          
          <Text 
            style={{ textDecorationLine: item.completed? 'line-through': 'none' }}
            key={item.id}
          >
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