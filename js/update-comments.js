const comments = JSON.parse(localStorage.getItem('comments'));
!comments && localStorage.setItem('comments', JSON.stringify(initialСomments));

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
  for (comment of comments) {
    const date = new Date(comment.date);
    const MONTH_NAMES = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const formattedDate = `${date.getDate()} ${MONTH_NAMES[date.getMonth()]}`;
    
    commentsElement.insertAdjacentHTML("beforeend",
    `<div class="comment" data-key="${comments.indexOf(comment)}">
      <p class="comment__username">${comment.username}</p>
      <p class="comment__date">${formattedDate}</p>
      <p class="comment__text">${comment.commentText}</p>
      <button class="comment__delete-button" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="16" height="16" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M436 60h-75V45c0-24.813-20.187-45-45-45H196c-24.813 0-45 20.187-45 45v15H76c-24.813 0-45 20.187-45 45 0 19.928 13.025 36.861 31.005 42.761L88.76 470.736C90.687 493.875 110.385 512 133.604 512h244.792c23.22 0 42.918-18.125 44.846-41.271l26.753-322.969C467.975 141.861 481 124.928 481 105c0-24.813-20.187-45-45-45zM181 45c0-8.271 6.729-15 15-15h120c8.271 0 15 6.729 15 15v15H181V45zm212.344 423.246c-.643 7.712-7.208 13.754-14.948 13.754H133.604c-7.739 0-14.305-6.042-14.946-13.747L92.294 150h327.412l-26.362 318.246zM436 120H76c-8.271 0-15-6.729-15-15s6.729-15 15-15h360c8.271 0 15 6.729 15 15s-6.729 15-15 15z" data-original="#000000"></path><path d="m195.971 436.071-15-242c-.513-8.269-7.67-14.558-15.899-14.043-8.269.513-14.556 7.631-14.044 15.899l15 242.001c.493 7.953 7.097 14.072 14.957 14.072 8.687 0 15.519-7.316 14.986-15.929zM256 180c-8.284 0-15 6.716-15 15v242c0 8.284 6.716 15 15 15s15-6.716 15-15V195c0-8.284-6.716-15-15-15zM346.927 180.029c-8.25-.513-15.387 5.774-15.899 14.043l-15 242c-.511 8.268 5.776 15.386 14.044 15.899 8.273.512 15.387-5.778 15.899-14.043l15-242c.512-8.269-5.775-15.387-14.044-15.899z" data-original="#000000"></path></g></svg>
      </button>
    </div>`);
  }
}