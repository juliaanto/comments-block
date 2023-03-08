document.querySelector('.comments').addEventListener('click', (event) => {
  const deletedCommentIndex = event.target.closest('.comment').dataset.key;
  comments.splice(deletedCommentIndex, 1);

  localStorage.setItem('comments', JSON.stringify(comments));
  updateComments();
})