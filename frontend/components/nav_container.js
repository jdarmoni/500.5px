import {connect} from "react-redux";
import Nav from './nav';
import {logout} from '../actions/session_actions';

const mapStateToProps = state => {
    const currentUser = state.entities.users[state.session.id];
    return {
        currentUser: currentUser
    }
};

const mapDispatchToProps = thunkCaller => ({
    logout: () => thunkCaller(logout())
});


export default connect(mapStateToProps, mapDispatchToProps)(Nav);