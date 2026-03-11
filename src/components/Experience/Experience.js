import { useEffect, useRef, useState } from 'react';
import styles from '../Education/Education.module.css';
import EducationCard from '../Education/EducationCard';
import TopicName from '../TopicName/TopicName';

function RevealRow({ children }) {
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
    <div
      ref={ref}
      className={`${styles.school_wrapper} ${
        visible ? styles.reveal : ''
      }`}
    >
      {children}
    </div>
  );
}

function Experience() {
  return (
    <div className={styles.wrapper} style={{ background: '#323647' }}>
      <TopicName title="Experience" />

      <RevealRow>
        <EducationCard
          title="EOFool, Question Setter"
          place="IIEST Shibpur, EOFool, Instruo 2025"
          subtitle="October 2024"
          info={[
            "Set questions for capture the flag event (EOFool)",
            "Ensured smooth conduction of the event",
          ]}
        />

        <EducationCard
          title="Winter Of OpenSource, Operator"
          place="IIEST Shibpur, CodeIIEST X GDG Event"
          subtitle="December 2024, 2025"
          info={[
            "Created a leaderboard website synced with Google Sheets (2024)",
            "Maintained repositories for contributors (2024, 2025)",
          ]}
        />
      </RevealRow>

      <RevealRow>
        <EducationCard
          title="GDG Cybersecurity Lead"
          place="IIEST Shibpur, GDG"
          subtitle="2025–Present"
          info={[
            "Led the Cybersecurity chapter",
            "Conducted CTF events and Linux workshops",
            "Demonstrated real-world security use cases",
          ]}
        />

        <EducationCard
          title="Game Development"
          place="IIEST Shibpur, CodeIIEST"
          subtitle="January 2025–Present"
          info={[
            "Helped build the foundation of a new chapter",
            "Demonstrated game physics using Python and Pygame",
          ]}
        />
      </RevealRow>
    </div>
  );
}

export default Experience;
