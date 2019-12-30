export const UserService = {
    register,
    login,
    logout
};

function register(username, email, password, picture) {
    var user = {
        'username': username,
        'email': email,
        'password': password,
        'picture': picture
    };

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    };

    return fetch('http://localhost:8000/api/user', requestOptions)
        .then(handleResponse)
        .then(data => {
            // login successful if there's a user in the response
            if (data.id) {
                user.id = data.id;
                // store user details and basic auth credentials in local storage 
                // to keep user logged in between page refreshes
                user.authdata = window.btoa(username + ':' + password);
                localStorage.setItem('user', JSON.stringify(user));
                return user;
            }
            return Promise.reject(data.error);
        });
}

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'username': username,
            'password': password
        })
    };

    return fetch('http://localhost:8000/api/authenticate', requestOptions)
        .then(handleResponse)
        .then(data => {
            // login successful if there's a user in the response
            if (data.user) {
                // store user details and basic auth credentials in local storage 
                // to keep user logged in between page refreshes
                data.user.authdata = window.btoa(username + ':' + password);
                localStorage.setItem('user', JSON.stringify(data.user));
                return data.user;
            }
            return Promise.reject(data.error);
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
