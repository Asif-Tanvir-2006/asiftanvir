import styles from './Project.module.css';
import useReveal from '../useReveal';

function ProjCard({ title, links, info, image, tags = [] }) {
    const [ref, show] = useReveal();

    return (
        <div
            ref={ref}
            className={`${styles.reveal} ${show ? styles.show : ''}`}
        >
            <div className={styles.box}>
                <div
                    className={styles.left}
                    style={{ backgroundImage: `url(${image})` }}
                />

                <div className={styles.right}>
                    <div className={styles.title}>{title}</div>

                    <div className={styles.tags}>
                        {tags.map((tag, i) => (
                            <div key={i} className={styles.tag}>
                                {tag}
                            </div>
                        ))}
                    </div>

                    <div className={styles.info}>{info}</div>

                    <div className={styles.tags}>
                        {links.map((link, i) => (
                            <a
                                key={i}
                                href={link.url}
                                className={styles.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjCard;
