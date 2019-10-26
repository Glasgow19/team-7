import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Menu, Icon, Button, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { logout as cleanLocalStorage } from '../../AuthService';
import UserActions from '../../actions/user';

class Navigation extends Component {
    render() {
        const { user, logout } = this.props;

        const UserInfo = user
            ? () => (
                  <Menu.Item as="a">
                      Hi, &nbsp; <strong>{user.email}!</strong>
                  </Menu.Item>
              )
            : () => null;
        const LogoutButton = user
            ? () => (
                  <Menu.Item as="a">
                      <Button animated="vertical" onClick={() => logout()}>
                          <Button.Content hidden>Log out</Button.Content>
                          <Button.Content visible>
                              <Icon name="sign-out" />
                          </Button.Content>
                      </Button>
                  </Menu.Item>
              )
            : () => null;

        const LoginButton = !user
            ? () => (
                  <Menu.Item as={NavLink} exact to="/login">
                      Login
                  </Menu.Item>
              )
            : () => null;

        return (
            <Segment inverted>
                <Menu inverted pointing secondary>
                    <Container>
                        <Menu.Item as={NavLink} exact to="/" header>
                            Staff
                        </Menu.Item>
                        <Menu.Item as={NavLink} exact to="/page2">
                            Feedback
                        </Menu.Item>
                        <LoginButton />
                        <Menu.Menu position="right">
                            <UserInfo />
                            <LogoutButton />
                        </Menu.Menu>
                    </Container>
                </Menu>
            </Segment>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user.user,
});
const mapDispatchToProps = dispatch => ({
    logout: () => {
        cleanLocalStorage();
        dispatch(UserActions.logoutUser());
    },
});

const ConnectedNavigation = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Navigation);

export default withRouter(ConnectedNavigation);
