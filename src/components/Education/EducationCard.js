import styles from './Education.module.css';

function EducationCard({ title, place, subtitle, info }) {
  return (
    
    <div className={styles.school}>
      {title},
      <br />
      {place}
      <br />
      <span className={styles.greyed}>{subtitle}</span>

      <div className={styles.small_info}>
        {info.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
    </div>
  );
}

export default EducationCard;
