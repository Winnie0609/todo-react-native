import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { toggleTodo, deleteTodo } from '../actions/action'
import { Ionicons } from '@expo/vector-icons'
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
        <View key={item.id} style={styles.container}>
          <View style={styles.todo}>
            <Ionicons 
              name={item.completed? 'checkbox-outline' : 'square-outline'} 
              size={30}
              color="#000000"
              onPress={() => completeHandleChange(item)}
              style={{ flex: 1 }}
            />

            <Text 
              style={{ textDecorationLine: item.completed? 'line-through': 'none', flex: 3 }}
            >
              { item.text } 
            </Text>

            <Button 
              title="delete"
              color="#CA0B00"
              onPress={() => deleteHandlerChange(item)}
              style={{ flex: 1 }}
            />
          </View>
        </View>
      ))}
    </View>
  )
}

export default connect()(TodoList)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginHorizontal: 50,
    marginTop: 20,
    backgroundColor: '#eaea',
    padding: 17,
    borderRadius: 10,
  },
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
  }
})