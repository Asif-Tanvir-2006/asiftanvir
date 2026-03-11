import { useEffect, useRef, useState } from 'react';
import styles from './Education.module.css';
import EducationCard from './EducationCard';
import TopicName from '../TopicName/TopicName';

function Education() {
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
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.wrapper}>
      <TopicName title="Education" />

      <div
        ref={ref}
        className={`${styles.school_wrapper} ${
          visible ? styles.reveal : ''
        }`}
      >
        <EducationCard
          title="Delhi Public School"
          place="Burdwan"
          subtitle="Central Board of Secondary Education"
          info={[
            "Completed 12th (2024) with 94%",
            "Completed 10th (2022) with 96.6%",
          ]}
        />

        <EducationCard
          title="Indian Institute of Engineering"
          place="Science and Technology, Shibpur"
          subtitle="B.Tech, Information Technology (2024–2028)"
          info={[
            "Completed Sem-I with 9.25 sgpa",
            "Completed Sem-II with 9.5 sgpa",
          ]}
        />
      </div>
    </div>
  );
}

export default Education;
