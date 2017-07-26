import { connect } from 'react-redux'
import { clearCompleted } from '../actions'
import TodoFooter from '../components/TodoFooter'

const mapStateToProps = state => {
    return {
        itemsLeft: state.todos.filter(item => item.completed === false).length,
        enableClearCompleted: state.todos.filter(item => item.completed === true).length > 0
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClearCompleted: () => {
            dispatch(clearCompleted())
        }
    }
}

const FooterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoFooter)

export default FooterContainer