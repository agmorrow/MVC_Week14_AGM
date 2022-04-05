// Create a post
async function createPost() {
  const title = document.querySelector('#postTitleField').value.trim();
  const comment = document.querySelector('#postContentField').value.trim();

  if (title && comment) {
    const response = await fetch('/api/posts/', {
      method: 'POST',
      body: JSON.stringify({
        title,
        comment
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector('#addPostBtn').addEventListener('click', createPost);