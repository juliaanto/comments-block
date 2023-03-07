const dateInputElement = document.getElementById('date');

dateInputElement.addEventListener('blur', (event) => {
  if (event.target.value === '') {
    dateInputElement.type = 'text';
  }
});
