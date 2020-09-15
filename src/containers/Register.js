import { connect } from 'react-redux';
import { addAccount } from '../actions/index';
import Register from '../Register';

const mapDispatchToProps = (dispatch) => ({
    dispatch,
    onFinish: (item) => dispatch(addAccount(item))
  })

function mapStateToProps(state) {
    return {
        array: state.item
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)