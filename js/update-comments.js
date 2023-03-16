const comments = JSON.parse(localStorage.getItem('comments'));

if (!comments) {
  localStorage.setItem('comments', JSON.stringify(initialСomments));
  window.location.reload();
}

const commentsElement = document.querySelector('.comments');

updateComments();

function updateComments() {
  clearComments();
  showCommentsCount();
  showComments();
}

function clearComments() {
  commentsElement.innerHTML = '';
}

function showCommentsCount() {
  let commentsWord;

  switch((comments.length < 11 || comments.length > 14) && comments.length % 10) {
    case 1:
      commentsWord = 'комментарий';
      break;
    case 2:
    case 3:
    case 4:
      commentsWord = 'комментария';
      break;
    default:
      commentsWord = 'комментариев';
  }

  commentsElement.insertAdjacentHTML("afterbegin",
  `<p class="comments-count">${comments.length} ${commentsWord}</p>`);
}

function showComments() {
  for (const comment of comments) {
    commentsElement.insertAdjacentHTML("beforeend",
    `<div class="comment" data-key="${comments.indexOf(comment)}">
      <p class="comment__username">${comment.username}</p>
      <p class="comment__date">${formatDate(comment.date)}</p>
      <p class="comment__text">${comment.commentText}</p>
      <button class="comment__button comment__button_delete" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M436 60h-75V45c0-24.813-20.187-45-45-45H196c-24.813 0-45 20.187-45 45v15H76c-24.813 0-45 20.187-45 45 0 19.928 13.025 36.861 31.005 42.761L88.76 470.736C90.687 493.875 110.385 512 133.604 512h244.792c23.22 0 42.918-18.125 44.846-41.271l26.753-322.969C467.975 141.861 481 124.928 481 105c0-24.813-20.187-45-45-45zM181 45c0-8.271 6.729-15 15-15h120c8.271 0 15 6.729 15 15v15H181V45zm212.344 423.246c-.643 7.712-7.208 13.754-14.948 13.754H133.604c-7.739 0-14.305-6.042-14.946-13.747L92.294 150h327.412l-26.362 318.246zM436 120H76c-8.271 0-15-6.729-15-15s6.729-15 15-15h360c8.271 0 15 6.729 15 15s-6.729 15-15 15z" data-original="#000000"></path><path d="m195.971 436.071-15-242c-.513-8.269-7.67-14.558-15.899-14.043-8.269.513-14.556 7.631-14.044 15.899l15 242.001c.493 7.953 7.097 14.072 14.957 14.072 8.687 0 15.519-7.316 14.986-15.929zM256 180c-8.284 0-15 6.716-15 15v242c0 8.284 6.716 15 15 15s15-6.716 15-15V195c0-8.284-6.716-15-15-15zM346.927 180.029c-8.25-.513-15.387 5.774-15.899 14.043l-15 242c-.511 8.268 5.776 15.386 14.044 15.899 8.273.512 15.387-5.778 15.899-14.043l15-242c.512-8.269-5.775-15.387-14.044-15.899z" data-original="#000000"></path></g></svg>
      </button>
      <div class="comment__likes">
        <button class="comment__button comment__button_like" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="22" height="22" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class="">
            <g>
              <path fill=${comment.isLiked ? "#f44336" : "#3a0a0e"} d="M449.28 121.46a115.2 115.2 0 0 0-137.89-35.75c-21.18 9.14-40.07 24.55-55.39 45.05-15.32-20.5-34.21-35.91-55.39-45a115.2 115.2 0 0 0-137.89 35.7c-16.5 21.62-25.22 48.64-25.22 78.13 0 42.44 25.31 89 75.22 138.44 40.67 40.27 88.73 73.25 113.75 89.32a54.78 54.78 0 0 0 59.06 0c25-16.07 73.08-49.05 113.75-89.32 49.91-49.42 75.22-96 75.22-138.44 0-29.49-8.72-56.51-25.22-78.13z" data-original="#3a0a0e" class=""></path>
              <path fill=${comment.isLiked ? "#f44336" : "#f8f8f8"} d="M449.5 199.59c0 35.52-22.81 76.12-67.81 120.68-39 38.66-85.47 70.5-109.67 86a29.72 29.72 0 0 1-32 0c-24.2-15.54-70.63-47.38-109.67-86-45-44.56-67.81-85.16-67.81-120.68 0-24 7-45.74 20.09-63a90.93 90.93 0 0 1 48.15-32.44 89.35 89.35 0 0 1 23.42-3.1c30.48 0 65.64 15.24 91.06 58.58a12.49 12.49 0 0 0 21.56 0c32.3-55.06 80.31-64.76 114.48-55.48a90.93 90.93 0 0 1 48.15 32.44c13.1 17.26 20.05 39.04 20.05 63z" data-original="#f9595f" class=""></path>
            </g>
          </svg>
        </button>
        <p class="comment__likes-count">${comment.likesCount > 0 ? comment.likesCount : ''}</p>
      </div>
    </div>`);
  }
}
