//import config from 'config';
import { authHeader } from '../helpers';
// todo: add URL into config file
const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
const apiUrl =  'http://3.122.7.162:5000';

export const userService = {
    login,
    logout,
	search
};

function login(username, credential) {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, credential })
    };

    return fetch(`${proxyUrl+ apiUrl}/v60/admin/session`, options)
        .then(handleResponse)
        .then(user => {
            // store user details and sessionId in local storage 
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function search() {
    const requestOptions = {
        method: 'GET',
        headers: Object.assign({},authHeader(),{ 'Content-Type': 'application/json' }),
        credentials: "same-origin"
        //credentials: 'include'
    };

    return fetch(`${proxyUrl + apiUrl}/v60/admin/search/user?keyword=test&alias=false`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        console.log("data:"+text.replace(/'/g, '"'))
        //replace single quote to double quote JSON response
        const data = text.replace(/'/g, '"') 
        if (!response.ok) {
            if (response.status === 401) {
                logout();
                //location.reload(true);
            }
            const error = data  || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}