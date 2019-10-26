import React, { Component } from 'react';
import SpeechRecognition from 'react-speech-recognition';

const SpeechRecognizer = ({
    transcript,
    startListening,
    stopListening,
    listening,
    interimTranscript,
}) => {
    console.log(transcript);
    console.log(interimTranscript);

    if (listening)
        return (
            <div>
                <button onClick={stopListening}>Stop</button>
                <span>{transcript}</span>
            </div>
        );
    else
        return (
            <div>
                <button onClick={startListening}>Start</button>
                <span>{transcript}</span>
            </div>
        );
};

export default SpeechRecognition({ continous: true })(SpeechRecognizer);
