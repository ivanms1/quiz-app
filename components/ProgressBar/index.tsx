import React from 'react';

import styles from './ProgressBar.module.css';

interface ProgressBarProps {
  total: number;
  progress: number;
}

const ProgressBar = ({ total, progress }: ProgressBarProps) => {
  return (
    <div className={styles.ProgressBar}>
      <div
        className={styles.Progress}
        style={{ width: `${(progress * 100) / total}%` }}
      />
    </div>
  );
};

export default ProgressBar;
