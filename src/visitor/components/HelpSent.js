import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Header, Container, Image, Segment, Button } from 'semantic-ui-react';
import FormActions from '../actions/form';
import '../../stylesheet.css';
import logo from '../gsc_logo.svg';
import Speech from 'react-speech';
import { createAssistanceRequest } from '../ApiService';

class HelpSent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
        };
    }

    componentDidMount() {
        const { assistanceRequestDetails } = this.props;
        console.log(assistanceRequestDetails);

        if (assistanceRequestDetails) {
            createAssistanceRequest({
                payload: { assistanceRequestDetails },
            }).then(createdAssistanceRequest => {
                console.log(createdAssistanceRequest);
                alert('done boi');
                if (window.socket) {
                    window.socket.emit('newAssistanceRequest', createdAssistanceRequest);
                }
            });
        }
    }

    nextPath(path) {
        this.props.history.push(path);
    }

    render() {
        return (
            <Container>
                <Segment textAlign="center">
                    <div className="topbar">
                        <img className="logo" src={logo} />
                    </div>
                    <p className="Title">Glasgow Science Center Help Portal</p>
                    <Speech text="Thank you. A staff member will be with you soon. Please stay in your current location." />
                    <h2> Thank You </h2>
                    <p size="big">A staff member will be with you soon</p>
                </Segment>
                <Segment textAlign="center">
                    <Button
                        fluid
                        size="huge"
                        onClick={() => {
                            this.props.clearFormStore();
                            this.nextPath('/home');
                        }}
                    >
                        Return to main menu
                    </Button>
                    <Button
                        fluid
                        size="huge"
                        color="grey"
                        onClick={() => {
                            this.nextPath('/feedback1');
                        }}
                    >
                        Did we solve your problem?
                    </Button>
                </Segment>
            </Container>
        );
    }
}

const mapStateToProps = state => ({ assistanceRequestDetails: state.form });
const mapDispatchToProps = dispatch => ({
    clearFormStore: () => dispatch(FormActions.clearFormStore()),
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(HelpSent),
);
