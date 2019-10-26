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
