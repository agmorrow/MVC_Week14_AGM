$(document).ready(function() {
	const usernameField = $('#usernameField');
	const passwordField = $('#passwordField');
	const signinBtn = $('#signinBtn');
	const logoutBtn = $('#logout');
	signinBtn.on('click', async function(event) {
		event.preventDefault();
		await $.post('/api/users/login', {
			username: usernameField.val().trim(),
			password: passwordField.val().trim(),
		});
		window.location.href = '/dashboard';
	});
	logoutBtn.on('click', async function() {
		await $.post('/api/users/logout');
		window.location.href = '/';
	});
});