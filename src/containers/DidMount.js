import { connect } from 'react-redux';
import { fetchAll } from '../actions/index';
import Account from '../Account';

const mapDispatchToProps = (dispatch) => ({
    dispatch,
    fethAll: (array) => dispatch(fetchAll(array))
})

const mapStateToProps = state => ({
    list: state.account
})

export default connect(mapStateToProps, mapDispatchToProps)(Account)