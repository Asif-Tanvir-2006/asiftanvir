import styles from './Project.module.css'
import ProjCard from './ProjCard'
import TopicName from '../TopicName/TopicName';
import img1 from '../../assets/dev1.png'
import img2 from '../../assets/dev2.jpg'
import img3 from '../../assets/dev3.png'

function Project() {
    return (

        <div className={styles.wrapper}>
            <TopicName title="Projects"></TopicName>
            <center>
                <ProjCard title={"Blogs Website"} image={img1} tags={["Web", "HTML", "CSS", "JS"]} info={"A simple Blogs made using the Hugo Framework."} links={[
                    { label: " GitHub", url: "https://github.com/Asif-Tanvir-2006/asiftanvir.github.io/" },
                    { label: " Live", url: "https://asiftanvir-github-io.vercel.app/" }
                ]}></ProjCard>
                <ProjCard title={"PDF Toolkit"} image={img2} tags={["Python", "Kivy", "KivyMD", "Linux"]} info={"An all in one PDF Toolkit for debian based distros like ubuntu, mint."} links={[
                    { label: " GitHub", url: "github.com/Asif-Tanvir-2006/Linux_debian_PDF_Toolkit" }
                    // { label: " Live", url: "https://..." }
                ]}></ProjCard>
                <ProjCard title={"Infinite Shooter"} image={img3} tags={["Python", "Pygame", "GameDev"]} info={"A 2d infinite shooter game made in python using pygame."} links={[
                    { label: " GitLab", url: "https://gitlab.com/Asif-Tanvir-2006/gunner_python" }
                    // { label: " Live", url: "https://..." }
                ]}></ProjCard>
            </center>

        </div>
    )
}
export default Project;