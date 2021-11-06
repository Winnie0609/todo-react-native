import React from 'react'
import { View } from "react-native"
import FilterLink from '../containers/FilterLink'
import { filterOptions } from '../actions/action'

function FilterBar() {

  return (
    <View>
      <FilterLink filter={filterOptions.SHOW_ALL}>
        All
      </FilterLink>

      <FilterLink filter={filterOptions.SHOW_COMPLETED}>
        Completed
      </FilterLink>

      <FilterLink filter={filterOptions.SHOW_ACTIVE}>
        Uncomplete
      </FilterLink>
    </View>
  )
}

export default FilterBar