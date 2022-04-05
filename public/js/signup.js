document.querySelector('#sign-btn').addEventListener('click', signUp);
// Allows new users to sign up
async function signUp(event) {
  event.preventDefault();
  const username = document.querySelector('#usernameField').value.trim();
  const password = document.querySelector('#passwordField').value.trim();
// If user provides username and password, allow them to create account
  if (username && password) {
    const response = await fetch('/api/users/', {
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
      document.location.replace('/login')
    } else {
      alert(response.statusText);
    }
  }
}