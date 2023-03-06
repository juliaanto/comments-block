const addCommentFormElement = document.querySelector('.comment-form');
const addCommentButton = document.querySelector('.submit-button');

addCommentButton.addEventListener('click', () => {
  const formData = new FormData(addCommentFormElement);
  const newComment = {};

  for (let entry of formData.entries()) {
    newComment[entry[0]] = entry[1];
  }

  const updatedComments = [...comments, newComment];
  localStorage.setItem('comments', JSON.stringify(updatedComments));
  window.location.reload();
});
