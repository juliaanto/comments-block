document.querySelector('.comments').addEventListener('click', (event) => {
  if (!event.target.closest('.comment__button_like')) {
    return;
  }

  const likedCommentIndex = event.target.closest('.comment').dataset.key;
  comments[likedCommentIndex].isLiked = !comments[likedCommentIndex].isLiked;
  comments.splice(likedCommentIndex, 1, comments[likedCommentIndex]);

  localStorage.setItem('comments', JSON.stringify(comments));
  updateComments();
})