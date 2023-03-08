const comments = JSON.parse(localStorage.getItem('comments'));
!comments && localStorage.setItem('comments', JSON.stringify(initialСomments));

const commentsElement = document.querySelector('.comments');

showCommentsCount();
showComments();

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
    `<div class="comment">
      <p class="comment__username">${comment.username}</p>
      <p class="comment__date">${formattedDate}</p>
      <p class="comment__text">${comment.commentText}</p>
    </div>`);
  }
}
