const comment = JSON.parse(localStorage.getItem('comments'))[0];

document.getElementById('comments').innerHTML = comment.username;
