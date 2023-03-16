function isFormValid(formData) {
  const emptyFieldMessage = 'Заполните это поле.';

  const isUsernameEmpty = formData['username'].trim().length === 0;
  isUsernameEmpty && showMessage('username', emptyFieldMessage);

  const isCommentTextEmpty = formData['commentText'].trim().length === 0;
  isCommentTextEmpty && showMessage('commentText', emptyFieldMessage);

  const isFormValid = !isUsernameEmpty && !isCommentTextEmpty;
  
  return isFormValid;
}

function showMessage(elementId, messageText) {
  const element = document.getElementById(elementId);
  
  if (!element.parentNode.querySelector('.form-field__message')) {
    element.insertAdjacentHTML('afterend', `
    <p class="form-field__message">${messageText}</p>
  `)
  }
  
  element.classList.add('form-field__input_invalid');
  
  element.oninput = function() {
    if (this.classList.contains('form-field__input_invalid')) {
      this.classList.remove('form-field__input_invalid');
      this.nextElementSibling.remove();
    }
  }
}
