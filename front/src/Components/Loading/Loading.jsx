import React from 'react';
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.shape}>
        <div className={styles.numRowContainer}>
          {[...Array(10)].map((_, index) => (
            <div key={index} className={styles.numRow}>0 1 0 1 1 0 0 1</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Loading;
