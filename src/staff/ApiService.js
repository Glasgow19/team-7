import decode from 'jwt-decode';
import apiUrl from './apiUrl';

export const getAssistanceRequests = async () => {
    const result = await fetch(`${apiUrl}/api/assistance-requests`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });

    const response = await result.json();
    return response.assistanceRequests;
};

export const getFeedbacks = async () => {
    const result = await fetch(`${apiUrl}/api/feedbacks`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });

    const response = await result.json();
    return response.feedbacks;
};

export const assist = async params => {
    const result = await fetch(`${apiUrl}/api/assistance-requests/assist`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    });

    const response = await result.json();
    return response;
};
