async function updatePost() {
  const title = document.querySelector('#postTitleField').value.trim();
  const comment = document.querySelector('#postContentField').value.trim();
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1];
  if (title && comment) {
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
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

async function deletePost() {
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1];

  confirm("Are you sure you want to delete this Post?")
  if (confirm) {
    await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    document.location.replace('/dashboard');
  }
};

document.querySelector('#updateBtn').addEventListener('click', updatePost);
document.querySelector('#deleteBtn').addEventListener('click', deletePost);