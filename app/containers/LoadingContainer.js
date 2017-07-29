import { connect } from 'react-redux'
import Loading from '../components/Loading'

const mapStateToProps = state => {
    return {
        isVisible: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

const LoadingContent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Loading)

module.exports = LoadingContent