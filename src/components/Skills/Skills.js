import styles from '../Intro/Intro.module.css';
import TopicName from '../TopicName/TopicName';
import useReveal from '../useReveal';

function Skills() {
    const [ref, show] = useReveal();

    return (
        <div className={styles.grand_wrapper}>
            <div className={styles.helper}>
                <TopicName title={"My_Skills"} />
            </div>

            <div className={styles.wrapper} style={{ backgroundColor: "#242734" }}>
                <div
                    ref={ref}
                    className={`${styles.left} ${show ? styles.reveal : styles.hidden}`}
                    style={{ minWidth: "80vw" }}
                >
                    <div className={styles.name}>
                        <span className={styles.yellow}>👨‍💻</span>
                    </div>

                    <div className={styles.info}>
                        Skills — the more you try to acquire, the more you realise how little you actually have.
                    </div>

                    <div className={styles.info_main} style={{ minWidth: "80%", lineHeight: "22px" }}>
                        I personally feel like I have still got a long way to go before I can comment on my skills. I genuinely enjoy grinding DSA on LeetCode, and solving adhoc questions on Codeforces. C++ is my preferred language of choice. Being the linux enthusiast I am, I have found comfort in using tools like Docker and Podman for creating conflict free applications packaged into an image. I do web development too, with React being my preferred Front-End Framework. For Backend, I am comfortable with springboot, flask, express. Aside from that I really like scratching my head dueling logic in python trying to make a game using pygame. Trying to make games was the sole reason I stepped into the world of coding in my early days. TLDR; HTML, CSS, JS, React, Flask, Express, MongoDB, SupaBase SpringBoot, Java, Python, C++, Docker, Linux - My TechStack.
                    </div>

                    <div className={styles.dash}></div>

                    <div className={styles.socials}>
                        <div style={{ maxWidth: "50vw" }}>
                             󰬷     󰌞 󰆼  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
