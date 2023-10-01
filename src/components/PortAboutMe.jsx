import certification1 from '../assets/imgs/certificate1.png';
import certification2 from '../assets/imgs/certificate2.png';
import WidgetPoint from '../widgets/WidgetPoint';

const PortAboutMe = () => {
  return (
    <section className='port-aboutMe-wrapper'>
        <h2 className='about-title'>About<WidgetPoint/></h2>
        <div className='about-content'>
          <p className='about-content-live-presentation'>Hello World!! My name is <span className='presentation-name'>Joaquín Rodríguez</span>, I am 18 years old and I live in Argentina, Buenos Aires. In the year 2022 I began to study programming on my own, I spent a couple of months as an <span className='presentation-autodidact'>autodidact</span>, and since I liked it so much I began to study at the National Technological University (UTN), I spent a few months building projects and I am currently looking for job offers.</p>
          <p className='about-content-live-focused'>I am focused on frontend development, achieving with a lot of dedication the best user experience and web application design.</p>
        </div>
        <div className='about-certifications-wrapper'>
          <div className='about-certificate'>
            <p className="about-certificate-title">certificate of completion: </p>
            <img src={certification1} className='about-certificate-img' alt="img-of-the-certificate" />
          </div> 
          <div className='about-certificate'>
            <p className="about-certificate-title">certificate of participation: </p>
            <img src={certification2} className='about-certificate-img' alt="img-of-the-certificate" />
          </div>
        </div>
    </section>
  )
};

export default PortAboutMe;
