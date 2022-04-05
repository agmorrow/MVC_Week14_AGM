// $(document).ready(function () {
// 	const usernameField = $('#usernameField');
// 	const passwordField = $('#passwordField');
// 	const signupBtn = $('#signupBtn');
// 	const signinBtn = $('#signinBtn');
// 	const viewPostBtn = $('.viewPostBtn');
// 	const postTitleField = $('#postTitleField');
// 	const postContentField = $('#postContentField');
// 	const addPostBtn = $("#addPostBtn");
// 	const postCommentField = $('#postCommentField');
// 	const addCommentBtn = $('#addCommentBtn');
// 	const updateBtn = $('.updateBtn');
// 	const deleteBtn = $('.deleteBtn');
	
// 	signupBtn.on('submit', async function (event) {
// 		event.preventDefault();
// 		debugger
// 		try {
// 		await $.post('/api/users/signup', {
// 			username: usernameField.val(),
// 			password: passwordField.val(),
// 		});
// 		window.location.href = '/dashboard';
// 		} catch (e) {
// 			alert('You must provide a valid username, email, and password')
// 		}
// 	});

// 	signinBtn.on('submit', async function (event) {
// 		event.preventDefault();
// 		try {
// 		await $.post('/api/users/login', {
// 			username: usernameField.val().trim(),
// 			password: passwordField.val().trim(),
// 		});
// 		window.location.href = '/dashboard';
// 		} catch {
// 			alert('Invalid username or password')
// 			window.location.reload();
// 		}
// 	});
	
// 	viewPostBtn.on('click', function (event) {
// 		event.preventDefault();
// 		const postId = $(this).attr('data-id');
// 		window.location.href = `/api/posts/${postId}`;
// 	})
	
// 	addPostBtn.on('click', async function (event) {
// 		event.preventDefault();
// 		await $.post('/api/posts', {
// 			title: postTitleField.val(),
// 			content: postContentField.val(),			
// 		});
// 		window.location.reload();
// 	});

// 	addCommentBtn.on('click', async function (event) {
// 		event.preventDefault();
// 		await $.post('/api/comments', {
// 			text: postCommentField.val(),
// 			blog_id: event.target.getAttribute('data-postId'),			
// 		});
// 		window.location.reload();
// 	});

// 	updateBtn.on('click', async function () {
// 		const postId = $(this).attr('data-postId');
// 		const title = $('.postTitle').val();
// 		const content = $('.postContent').val();
// 		await $.ajax({
// 			url: '/api/posts/' + postId,
// 			method: 'PUT',
// 			contentType: 'application/json',
// 			data: JSON.stringify({title, content}), // access in body
// 			success: function(result) {
// 				window.location.reload();
// 			},
// 			error: function(request,msg,error) {
// 				// handle failure
// 			}
// 		});		
// 	})
// 	deleteBtn.on('click', async function() {
// 		const postId = $(this).attr('data-postId');
// 		await $.ajax({
// 			url: '/api/posts/' + postId,
// 			method: 'DELETE',
// 			contentType: 'application/json',
// 			success: function(result) {
// 				window.location.href = "/dashboard"
// 			},
// 			error: function(request,msg,error) {
// 				// handle failure
// 			}
// 		});		
// 	})
// });


