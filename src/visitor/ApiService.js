import decode from 'jwt-decode';
import apiUrl from './apiUrl';

export const createAssistanceRequest = async ({ payload }) => {
    const connectionId = window.socket.id;
    const result = await fetch(`${apiUrl}/api/assistance-requests`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ payload: JSON.stringify(payload), connectionId }),
    });

    const response = await result.json();
    return response;
};

export const createFeedback = async feedback => {
    console.log(feedback);
    const result = await fetch(`${apiUrl}/api/feedbacks`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ feedback }),
    });
    console.log(result);

    const response = await result.json();
    return response;
};
