$(document).ready(function() {
	const usernameField = $('#usernameField');
	const passwordField = $('#passwordField');
	const signupBtn = $('#signupBtn');
	signupBtn.on('click', async function(event) {
		event.preventDefault();
		await $.post('/api/users/signup', {
			username: usernameField.val(),
			password: passwordField.val(),
		});

		window.location.href = '/dashboard';
	});
});