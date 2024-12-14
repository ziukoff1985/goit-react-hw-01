// Імпортуємо компонент FriendListItem для відображення картки кожного окремого друга.
import FriendListItem from '../FriendListItem/FriendListItem';

// Імпортуємо модуль стилів для компонента FriendList.
import styles from './FriendList.module.css';

// Компонент FriendList отримує пропс friends — масив об'єктів, з даними друзів (з файлу friends.json).
const FriendList = ({ friends }) => {
  return (
    // Створюємо розмітку списку,
    // Використовуємо метод map для ітерації по масиву friends.
    // Для кожного друга рендеримо FriendListItem, передаючи всі його властивості через деструктуризацію об'єкта friend.
    <ul className={styles.list}>
      {friends.map(friend => (
        <li key={friend.id} className={styles.item}>
          <FriendListItem {...friend} />
        </li>
      ))}
    </ul>
  );
};

// Експортуємо компонент для використання в інших частинах застосунку.
export default FriendList;
