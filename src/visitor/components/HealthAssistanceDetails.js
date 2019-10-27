import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Container, Segment, Button } from 'semantic-ui-react';
import '../../stylesheet.css';
import logo from '/../gsc_logo.svg';

import FormActions from '../actions/form';

class HealthAssistanceDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonStates: {
                first: {
                    yes: false,
                },
                second: {
                    yes: false,
                },
                third: {
                    yes: false,
                },
            },
        };
    }

    nextPath(path) {
        this.props.history.push(path);
    }

    render() {
        const { buttonStates } = this.state;
        const { setHealthAssistanceDetails } = this.props;

        console.log(buttonStates);
        return (
            <Container>
                <Segment textAlign="center">
                    <div className="topbar">
                        <img className="logo" src={logo} />
                    </div>
                    <p className="Title">Glasgow Science Center Help Portal</p>
                    <h1>Are you hurt?</h1>
                    <Button.Group size="large">
                        <Button
                            active={buttonStates.first.yes}
                            color={buttonStates.first.yes ? 'red' : 'grey'}
                            onClick={() => {
                                this.setState({
                                    buttonStates: { ...buttonStates, first: { yes: true } },
                                });
                            }}
                        >
                            Yes
                        </Button>
                        <Button.Or />
                        <Button
                            active={!buttonStates.first.yes}
                            color={!buttonStates.first.yes ? 'green' : 'grey'}
                            onClick={() => {
                                this.setState({
                                    buttonStates: { ...buttonStates, first: { yes: false } },
                                });
                            }}
                        >
                            No
                        </Button>
                    </Button.Group>
                    <h1>Are you lost?</h1>
                    <Button.Group size="large">
                        <Button
                            active={buttonStates.second.yes}
                            color={buttonStates.second.yes ? 'red' : 'grey'}
                            onClick={() => {
                                this.setState({
                                    buttonStates: { ...buttonStates, second: { yes: true } },
                                });
                            }}
                        >
                            Yes
                        </Button>
                        <Button.Or />
                        <Button
                            active={!buttonStates.second.yes}
                            color={!buttonStates.second.yes ? 'green' : 'grey'}
                            onClick={() => {
                                this.setState({
                                    buttonStates: { ...buttonStates, second: { yes: false } },
                                });
                            }}
                        >
                            No
                        </Button>
                    </Button.Group>{' '}
                    <h1>Do you feel overwhelmed?</h1>
                    <Button.Group size="large">
                        <Button
                            active={buttonStates.third.yes}
                            color={buttonStates.third.yes ? 'red' : 'grey'}
                            onClick={() => {
                                this.setState({
                                    buttonStates: { ...buttonStates, third: { yes: true } },
                                });
                            }}
                        >
                            Yes
                        </Button>
                        <Button.Or />
                        <Button
                            active={!buttonStates.third.yes}
                            color={!buttonStates.third.yes ? 'green' : 'grey'}
                            onClick={() => {
                                this.setState({
                                    buttonStates: { ...buttonStates, third: { yes: false } },
                                });
                            }}
                        >
                            No
                        </Button>
                    </Button.Group>
                </Segment>
                <Segment textAlign="center">
                    <Button
                        icon="arrow right"
                        size="massive"
                        fluid
                        onClick={() => {
                            const healthDetails = {
                                hurt: buttonStates.first.yes,
                                lost: buttonStates.second.yes,
                                overwhelmed: buttonStates.third.yes,
                            };
                            setHealthAssistanceDetails(healthDetails);
                            this.nextPath('/helpsent');
                        }}
                    />
                </Segment>
            </Container>
        );
    }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
    setHealthAssistanceDetails: details =>
        dispatch(FormActions.setHealthAssistanceDetails(details)),
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(HealthAssistanceDetails),
);
