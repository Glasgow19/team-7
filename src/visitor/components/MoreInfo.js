import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Header, Container, Image, Segment, Button } from 'semantic-ui-react';

import FormActions from '../actions/form';
import { loggedIn, getLoggedInUser, getToken } from '../AuthService';
import pollos from '../pollos.jpg';
import '../../stylesheet.css';
import logo from '/../gsc_logo.svg';

const EXPLANATION = 'EXPLANATION';
const FIND_EXHIBIT = 'FIND_EXHIBIT';
const OTHER = 'OTHER';

class MoreInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
        };
    }

    nextPath(path) {
        this.props.history.push(path);
    }

    render() {
        const { user } = this.state;
        const { updateUser } = this.props;

        return (
            <Container>
                <Segment textAlign="center">
                    
                    <div class = 'topbar'>
                        <img class = 'logo' src={logo}/>
                    </div>
                    <p class = 'Title'>Glasgow Science Center Help Portal</p>
                    <h1>Do you want to give more details?</h1>
                    <Button
                        fluid
                        content="Yes"
                        onClick={() => {
                            this.nextPath('/details');
                        }}
                    />
                    <Button
                        fluid
                        content="No"
                        onClick={() => {
                            this.nextPath('/helpsent');
                        }}
                    />
                </Segment>
            </Container>
        );
    }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(MoreInfo),
);
