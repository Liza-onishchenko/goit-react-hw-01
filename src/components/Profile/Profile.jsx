import React from "react";
import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
          <img src={image} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.listStats}>
        <li>
            <span className={styles.itemStats}>Followers</span>
          <span className={styles.statsNumber}>{stats.followers}</span>
        </li>

        <li>
            <span className={styles.itemStats}>Views</span>     
          <span className={styles.statsNumber}>{stats.views}</span>   
        </li>

        <li>
            <span className={styles.itemStats}>Likes</span>     
          <span className={styles.statsNumber}>{stats.likes}</span>   
        </li>
      </ul>
    </div>
  );
};

export default Profile;
