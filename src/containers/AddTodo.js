import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from "react-redux"
import { Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { addTodo, toggleTodo, deleteTodo } from '../actions/action'
import TodoList from './TodoList'

function AddTodo({ dispatch }) {
  const todos = useSelector(state => state.todos)
  const [inputText, setInputText] = useState('')

  function inputHandleChange(text) {
    setInputText(text)
  }

  function submitHandleChange() {
    const item = { text: inputText }
    dispatch(addTodo(item))
    setInputText('')
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={inputText}
          style={styles.input}
          placeholder="Add a task"
          onChangeText={inputHandleChange}  
        />
        <TouchableOpacity onPress={submitHandleChange}>
          <View style={styles.icon}>
            <Ionicons 
              name="md-add" 
              size={30}
              color="#000000"
            />
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </View>
    </View>
  )
}

export default connect()(AddTodo)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    // marginHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#eaeaea',
    height: 50,
    flex: 1,
    padding: 5
  },
  icon: {
    backgroundColor: '#eaeaea',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 10,
  }
})