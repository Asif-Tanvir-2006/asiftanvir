import styles from './Intro.module.css';
import useReveal from '../useReveal';
import img1 from '../../assets/me.webp';
import useImagePreload from '../PreloadHook';
function Intro() {
    const [ref, show] = useReveal();
      useImagePreload(img1);
    return (
        <div className={styles.wrapper} ref={ref}>
            <div className={`${styles.left} ${show ? styles.showLeft : styles.hiddenLeft}`}>
                <div className={styles.name}>
                    <span className={styles.yellow}>Hi,</span> I'm Asif Tanvir
                </div>

                <div className={styles.info}>
                    - 2nd Year B.Tech Student at IIEST, Shibpur
                </div>

                <div className={styles.info_main}>
                    Just a teenager who likes tinkering with stuff, hence my interest in Linux. I enjoy writing C++ code, Python too. Maybe a bit of bash scripting, but I'm not great at it. Oh, and ricing my desktop—I like that too. :p
                </div>

                <div className={styles.dash}></div>

                <div className={styles.socials}>
                    <div> <a href="https://www.linkedin.com/in/asif-tanvir-a68084302/">󰌻 </a> <a href="https://github.com/Asif-Tanvir-2006/">󰊤</a></div>
                    <div className={styles.smallImg}></div>
                </div>
            </div>

            <div className={`${styles.right} ${show ? styles.showRight : styles.hiddenRight}`}>
                <img
                    src={img1}
                    alt="Profile"
                    className={styles.img}
                    loading="lazy"
                    decoding="async"
                />

            </div>
        </div>
    );
}

export default Intro;
