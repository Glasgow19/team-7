import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Header, Container, Image, Segment, Button } from 'semantic-ui-react';
import FormActions from '../actions/form';
import '../../stylesheet.css';
import logo from '/../gsc_logo.svg';

const HEALTH_AID = 'HEALTH';
const NAVIGATION_AID = 'NAVIGATION';

class Home extends Component {
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
        return (
            <Container>
                <Segment textAlign="center">
                <div class = 'topbar'>
                <img class = 'logo' src={logo}/>
            </div>
            <p class = 'Title'>Glasgow Science Center Help Portal</p>
                    <Button
                        class = "buttonbig"
                        icon="list"
                        fluid
                        content="Do you want a navigation aid or to request a exhibit guide?"
                        onClick={() => {
                            this.nextPath('/navhelp1');
                            this.props.setAidType(NAVIGATION_AID);
                        }}
                    />
                    <Button
                        fluid
                        class = "buttonbig"
                        icon="heart"
                        color="red"
                        content="Do you want health assistance?"
                        onClick={() => {
                            this.nextPath('/health-assistance-details');
                            this.props.setAidType(HEART);
                        }}
                    />
                </Segment>
            </Container>
        );
    }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
    setAidType: aidType => dispatch(FormActions.setAidType(aidType)),
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(Home),
);
