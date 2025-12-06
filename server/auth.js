// authetication.js
export function login(username, password) {
    // Simulate a login API call
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === 'user' && password === 'pass') {
                resolve({ token: 'fake-jwt-token' });
            } else {
                reject('Invalid credentials');
            }
        }, 1000);
    });
}
export function logout() {
    // Simulate a logout API call
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Logged out successfully');
        }, 500);
    });
}

// profile.js
export function fetchUserProfile(token) {
    // Simulate fetching user profile API call
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (token === 'fake-jwt-token') {
                resolve({ username: 'user', email: 'user@example.com' });
            } else {
                reject('Invalid token');
            }
        }, 1000);
    });
}
