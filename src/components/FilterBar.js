import React from 'react'
import { View, StyleSheet } from "react-native"
import FilterLink from '../containers/FilterLink'
import { filterOptions } from '../actions/action'

function FilterBar() {

  return (
    <View style={styles.buttons}>
      <FilterLink filter={filterOptions.SHOW_ALL} style={styles.button}>
        All
      </FilterLink>

      <FilterLink filter={filterOptions.SHOW_COMPLETED} style={styles.button}>
        Completed
      </FilterLink>

      <FilterLink filter={filterOptions.SHOW_ACTIVE} style={styles.button}>
        Uncompleted
      </FilterLink>
    </View>
  )
}

export default FilterBar

const styles = StyleSheet.create({
  buttons: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 100,
    marginHorizontal: 100,
  },
})