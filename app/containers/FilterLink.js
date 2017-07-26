import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
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
            dispatch(setVisibilityFilter(filter));
        }
    }
}

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoFilter)

export default FilterLink