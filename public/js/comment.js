document.querySelector('#addCommentBtn').addEventListener('click', commentSection);
// Function for user to add comments to posts
async function commentSection() {
  const comment_text = document.querySelector('#commentField').value.trim();
  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  if (comment_text) {
    const response = await fetch('/api/comments/', {
      method: 'POST',
      body: JSON.stringify({
        comment_text,
        post_id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }

};
