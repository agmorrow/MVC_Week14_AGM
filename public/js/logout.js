async function logout() {
  const response = await fetch('/api/users/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
  });
  setTimeout(() => {
      document.location.reload();
  }, 1000);
}

document.getElementById('logout').addEventListener('click', logout);