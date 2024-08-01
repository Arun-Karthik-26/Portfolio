import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
function About() {
    return (
        <div className='about-container' id='about'>
          <div className='about-image'>
            <img src="download.jpeg" alt="" />
          </div>
          <div className="about-content">
           <div className='about-section'>
            <h1>About Me</h1>
            <hr className='divider'/>
            <p>I am Arun Karthik, a dedicated Full Stack Developer with a passion for 
                crafting seamless digital experiences. With a strong educational 
                background in Computer Science Engineering, I excel in 
                both front-end and back-end technologies. My achievements include winning 
                the coding competition and developing a successful 
                open-source project on GitHub.</p>
           </div>
           <div className="education-section">
            <div className='tit'>
              <h1 id='title'>Education</h1>
              <FontAwesomeIcon icon={faGraduationCap} id='edu-icon'/>
            </div>
              <div className="edu-section">
              <h1 id='current'>Studying</h1>
              <div>
                <h2>Bachelor of Engineering in Computer Science</h2>
                <p>Currently persuing at Kongu Engineering College, Erode, with a CGPA of <strong> 9.06 </strong>till the 3rd semester, expected to graduate in 2026.</p>
              </div>
            </div>
              <div className="edu-section">
                <h1>2022</h1>
                <div>
                <h2>Higher Secondary</h2>
                <p>Completed in Kalayana Sundaram Higher Secondary School,Thanjavur with <strong>93.33%</strong></p>
                </div>
              </div>
              <div className="edu-section">
                <h1>2020</h1>
                <div>
                <h2>Secondary School Leaving Certificate</h2>
                <p>Completed in Nav Bharat Matric Higher Secondary School with <strong>92.80%</strong></p>
                </div>
              </div>
           </div>
          </div>
        </div>
      );
}

export default About;
