import React from 'react';
import styles from './ProfileCard.module.css';  // Importing the CSS Module

// ProfileCard component
const ProfileCard = ({ nombre, edad, bio, profileImage }) => {
  return (
    <div className={styles.card}>
      <img src={profileImage} alt={`${nombre}'s perfil`} className={styles.image} />
      <div className={styles.info}>
        <h2 className={styles.nombre}>{nombre}</h2>
        <p className={styles.edad}>Edad: {edad}</p>
        <p className={styles.bio}>{bio}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
