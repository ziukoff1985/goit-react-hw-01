// Імпортуємо модуль стилів для компонента FriendListItem.
import styles from './FriendListItem.module.css';

// Компонент отримує три пропси з об'єкта (...friend):
// - avatar: URL зображення аватара друга.
// - name: ім'я друга.
// - isOnline: статус друга (true або false).
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    // Відмальовуємо картку друга
    <div className={styles.card}>
      <img src={avatar} alt="Avatar" width="110" className={styles.image} />
      <p className={styles.name}>{name}</p>
      <p className={isOnline ? styles.online : styles.offline}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

// Експортуємо компонент для використання у FriendList.
export default FriendListItem;
