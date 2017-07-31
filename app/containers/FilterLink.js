import { connect } from 'react-redux'
import { visibilityFilter } from '../actions'
import TodoFilter from '../components/TodoFilter'

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter,
        selectedFilter: state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onFilter: (filter) => {
            dispatch(visibilityFilter(filter));
        }
    }
}

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoFilter)

module.exports = FilterLink