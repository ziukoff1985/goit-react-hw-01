// Імпортуємо модуль стилів для компонента Profile
import styles from './Profile.module.css';

// Компонент отримує пропси (username, tag, location, avatar, stats):
// - username: ім'я користувача.
// - tag: унікальний тег користувача.
// - location: місцезнаходження.
// - avatar: URL аватара користувача.
// - stats: об'єкт з даними про followers, views і likes.
const Profile = ({ name, tag, location, image, stats }) => {
  return (
    // Головний контейнер профілю */}
    <div className={styles.card}>
      {/* Контейнер описової частини профілю */}
      <div className={styles['profile-info']}>
        <img src={image} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      {/* Секція статистики користувача. */}
      <ul className={styles.stats}>
        <li className={styles['stat-item']}>
          <span className={styles['stat-label']}>Followers</span>
          <span className={styles['stat-value']}>{stats.followers}</span>
        </li>
        <li className={styles['stat-item']}>
          <span className={styles['stat-label']}>Views</span>
          <span className={styles['stat-value']}>{stats.views}</span>
        </li>
        <li className={styles['stat-item']}>
          <span className={styles['stat-label']}>Likes</span>
          <span className={styles['stat-value']}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

// Експортуємо компонент для використання в інших частинах застосунку.
export default Profile;
