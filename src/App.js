import './App.css';
import Education from './components/Education/Education';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Conclusion  from './components/Conclusion/Conclusion';
import Experience from './components/Experience/Experience';
import CPStats from './components/Cp/Cpstats';
import Spacer from './components/Spacer/Spacer';
import ScrollIndicator from './components/Scroll/ScrollIndicator';
function App() {
  return (
    <>
      <ScrollIndicator></ScrollIndicator>
      <Header></Header>
      <Spacer></Spacer>
      <Intro></Intro>
      <Education></Education>
      <Projects></Projects>
      <CPStats></CPStats>
      <Experience></Experience>
      <Skills></Skills>
      <Conclusion></Conclusion>
    </>
          
  );
}

export default App;
