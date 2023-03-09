const form = document.forms["comment-form"];
const addCommentButton = form["submit-button"];

form.onsubmit = () => {
  const formData = new FormData(form);
  const newComment = {};

  for (let entry of formData.entries()) {
    newComment[entry[0]] = entry[1];
  }

  if (newComment.date === "") {
    newComment.date = Date.now();
  } else {
    newComment.date = new Date(newComment.date).getTime();
  }

  const updatedComments = [...comments, newComment];
  localStorage.setItem('comments', JSON.stringify(updatedComments));
}
