import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.card}>
      <div className={styles["profile-info"]}>
        <img src={image} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles["stat-item"]}>
          <span className={styles["stat-label"]}>Followers</span>
          <span className={styles["stat-value"]}>{stats.followers}</span>
        </li>
        <li className={styles["stat-item"]}>
          <span className={styles["stat-label"]}>Views</span>
          <span className={styles["stat-value"]}>{stats.views}</span>
        </li>
        <li className={styles["stat-item"]}>
          <span className={styles["stat-label"]}>Likes</span>
          <span className={styles["stat-value"]}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
