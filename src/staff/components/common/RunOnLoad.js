import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Image, Menu } from 'semantic-ui-react';
import { loggedIn, getLoggedInUser, getToken } from '../../AuthService.js';
import UserActions from '../../actions/user';

class RunOnLoad extends Component {
    constructor(props) {
        super(props);
        if (loggedIn()) {
            props.updateUser({
                fullName: getLoggedInUser().fullName,
                email: getLoggedInUser().email,
            });
        }
    }

    render() {
        return null;
    }
}

const mapStateToProps = state => {
    return {};
};
const mapDispatchToProps = dispatch => ({
    updateUser: user => dispatch(UserActions.updateUser(user)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RunOnLoad);
