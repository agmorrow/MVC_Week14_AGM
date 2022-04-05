document.querySelector('#login-btn').addEventListener('click', loginFormHandler);
// Sign in function
async function loginFormHandler(event) {
	event.preventDefault();
	const username = document.querySelector('#usernameField').value.trim();
	const password = document.querySelector('#passwordField').value.trim();
	if (username && password) {
		const response = await fetch('/api/users/login', {
			method: 'POST',
			body: JSON.stringify({
				username,
				password

			}),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (response.ok) {

			document.location.replace('/dashboard')
			// if username or password is incorrect, send the user an error
		} else {
			alert(response.statusText);
		}
	}
};