import { connect } from 'react-redux'
import { setFilteredTodo } from '../actions/action'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.filteredTodo
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setFilteredTodo(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
