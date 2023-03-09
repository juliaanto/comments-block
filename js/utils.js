function formatDate(timestamp) {
  const commentDate = new Date(timestamp);
  const MONTH_NAMES = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  
  const now = new Date();
  const yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  
  let day;
  
  if (commentDate >= today && commentDate < tomorrow) {
    day = 'сегодня,';
  } else if (commentDate >= yesterday && commentDate < today) {
    day = 'вчера,';
  } else {
    day = `${commentDate.getDate()} ${MONTH_NAMES[commentDate.getMonth()]}`;
  }
  
  const hours = commentDate.getHours() < 10 ? "0" + commentDate.getHours() : commentDate.getHours();
  const minutes = commentDate.getMinutes() < 10 ? "0" + commentDate.getMinutes() : commentDate.getMinutes();

  return `${day} ${hours}:${minutes}`;
}