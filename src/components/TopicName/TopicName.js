import { useEffect, useRef, useState } from 'react';
import styles from './TopicName.module.css';

function TopicName({ title }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.topic_name} ${
        visible ? styles.reveal : ''
      }`}
    >
      <div className={styles.left}>
        <div>{title}</div>
      </div>

      <div className={styles.right}>
        <div className={styles.yellow_line}>
          <div className={styles.line}></div>
        </div>
        <div className={styles.bulge}></div>
      </div>
    </div>
  );
}

export default TopicName;
