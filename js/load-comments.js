const comments = JSON.parse(localStorage.getItem('comments'));

!comments && localStorage.setItem('comments', JSON.stringify(initialСomments));

document.getElementById('comments').innerHTML = comments[0].username;
