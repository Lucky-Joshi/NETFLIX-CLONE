function redirectToNetflix(action) {
    let url;
    if (action === 'signup') {
        url = 'https://www.netflix.com/signup';
    } else if (action === 'login') {
        url = 'https://www.netflix.com/login';
    }
    window.location.href = url;
}