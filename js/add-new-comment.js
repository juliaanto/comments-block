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
    const userDate = new Date(newComment.date);
    newComment.date = new Date(userDate.getFullYear(), userDate.getMonth(), userDate.getDate()).getTime();
  }

  const updatedComments = [...comments, newComment];
  localStorage.setItem('comments', JSON.stringify(updatedComments));
}
