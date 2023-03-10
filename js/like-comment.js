document.querySelector('.comments').addEventListener('click', (event) => {
  if (!event.target.closest('.comment__button_like')) {
    return;
  }

  const likedCommentIndex = event.target.closest('.comment').dataset.key;
  const currentComment = comments[likedCommentIndex];
  currentComment.isLiked ? currentComment.likesCount-- : currentComment.likesCount++;
  currentComment.isLiked = !currentComment.isLiked;
  comments.splice(likedCommentIndex, 1, currentComment);

  localStorage.setItem('comments', JSON.stringify(comments));
  updateComments();
})