import decode from 'jwt-decode';
import apiUrl from './apiUrl';

export const storeToken = token => localStorage.setItem('token', token);
export const getToken = () => localStorage.getItem('token');
export const logout = () => localStorage.removeItem('token');

export const login = async (email, password) => {
    const result = await fetch(`${apiUrl}/api/users/login`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });

    const response = await result.json();
    if (result.ok) {
        storeToken(response.token);
    }
    return Promise.resolve({ wasSuccessfull: result.ok, payload: response });
};

export const register = async (email, password) => {
    const result = await fetch(`${apiUrl}/api/users`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });

    const response = await result.json();
    if (result.ok) {
        storeToken(response.token);
    }
    return Promise.resolve({ wasSuccessfull: result.ok, payload: response });
};

export const loggedIn = () => !!getToken();

export const getLoggedInUser = () => {
    if (getToken()) return decode(getToken());
    return null;
};

export const fetchWithAuth = (url, method, body) => {
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };

    if (loggedIn()) {
        headers.Authorization = `Bearer ${this.getToken()}`;
    }
    return fetch(`${apiUrl}/${url}`, {
        method,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body,
    });
};
