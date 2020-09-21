import { connect } from 'react-redux';
import { addAccount, login, actLogin } from '../actions/index';
import Register from '../Register';

const mapDispatchToProps = (dispatch) => ({
    dispatch,
    onFinish: (item) => dispatch(addAccount(item)),
    onSubmit: (item) => dispatch(login(item))
  })

function mapStateToProps(state) {
    return {
        array: state.item
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)