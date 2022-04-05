async function signupHandler(event) {
    event.preventDefault();
    const username = document.querySelector('#usernameField').value.trim();
    const password = document.querySelector('#passwordField').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            document.location.replace('/login')
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#sign-btn').addEventListener('click', signupHandler);