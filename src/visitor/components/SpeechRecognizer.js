import React, { Component } from 'react';
import SpeechRecognition from 'react-speech-recognition';
import { Button } from 'semantic-ui-react';

const SpeechRecognizer = ({
    transcript,
    startListening,
    stopListening,
    listening,
    interimTranscript,
}) => {
    if (listening)
        return (
            <div>
                <p className=".transcript">{transcript}</p>
                <Button size="massive" circular icon="microphone slash" onClick={stopListening} />
            </div>
        );
    else
        return (
            <div>
                <p className=".transcript">{transcript}</p>
                <Button size="massive" circular icon="microphone" onClick={startListening} />
            </div>
        );
};

export default SpeechRecognition({ continous: true, autoStart: false })(SpeechRecognizer);
