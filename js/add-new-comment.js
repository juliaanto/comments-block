const form = document.forms["comment-form"];
const addCommentButton = form["submit-button"];

form.onsubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const newComment = {};

  for (let [key, value] of formData.entries()) {
    newComment[key] = value;
  }

  if (newComment.date === "") {
    newComment.date = Date.now();
  } else {
    const userDate = new Date(newComment.date);
    newComment.date = new Date(userDate.getFullYear(), userDate.getMonth(), userDate.getDate()).getTime();
  }

  newComment.likesCount = 0;

  if (isFormValid(newComment)) {
    const updatedComments = [...comments, newComment];
    localStorage.setItem('comments', JSON.stringify(updatedComments));
    window.location.reload();
  }
}
