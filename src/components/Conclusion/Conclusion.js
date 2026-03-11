import styles from "./Conclusion.module.css"
function Conclusion() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.connect}>
                <div className={styles.header}>Connect With Me!</div>
                <div className={styles.socials}>
                    <div className={styles.small_icon}> <a href="https://www.linkedin.com/in/asif-tanvir-a68084302/">󰌻</a> </div>
                    <div className={styles.small_icon}><a href="mailto:asiftanvir2006@gmail.com">󰊫 </a></div>
                    <div className={styles.small_icon}><a href="https://github.com/Asif-Tanvir-2006/">󰊤</a> </div>
                </div>
                <div className={styles.made}>
                    ❤️ Made with love by Asif
                </div>
            </div>
        </div>
    )
}

export default Conclusion;