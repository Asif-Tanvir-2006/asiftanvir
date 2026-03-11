import styles from './Header.module.css';

function Header() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <div className={styles.desktop}>
                    <button>Asif Tanvir</button>
                    {/* <button>Projects</button> */}
                    {/* <button>CP Profile</button> */}
                </div>

                
            </div>

            <div className={styles.right}>
                <button>󱪙  <span style={{marginLeft:"5px"}}><a href="https://drive.google.com/file/d/1nhXS6-Vk54CXmCRBJPTt7Xr9UHVHQgH2/view?usp=sharing">Resume</a></span></button>
            </div>
        </div>
    );
}

export default Header;
