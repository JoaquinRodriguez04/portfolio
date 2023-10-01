// components
import WidgetPoint from '../widgets/WidgetPoint';

// challenges
import challenge1 from '../assets/imgs/chal1.png';
import challenge2 from '../assets/imgs/chal2.png';
import challenge3 from '../assets/imgs/chal3.png';
import challenge4 from '../assets/imgs/chal4.png';
import challenge5 from '../assets/imgs/chal5.png';
import challenge6 from '../assets/imgs/chal6.png';
import challenge7 from '../assets/imgs/chal7.png';

// widgets
import WidgetHtml from '../widgets/WidgetHtml';
import WidgetCss from '../widgets/WidgetCss';
import WidgetReact from '../widgets/WidgetReact';
import WidgetContext from '../widgets/WidgetContext';
import WidgetJson from '../widgets/WidgetJson';
import WidgetRedux from '../widgets/WidgetRedux';
import WidgetVite from '../widgets/WidgetVite';
import { useContext } from 'react';
import { PortContext } from '../context/portContext';

const PortChallenges = () => {

  const {theme} = useContext(PortContext)

  return (
    <section className='port-challenges-wrapper' id='Challenges'>
        <h2 className='port-challenges-title'>challenges<WidgetPoint/></h2>
        <p className='port-challenges-desc'>In this section you will find all the challenges I completed from the frontend mentor page!</p>
        <a 
        href='https://www.frontendmentor.io/challenges' 
        className='port-challenges-link'
        target='BLANK'>
          https://www.frontendmentor.io/challenges
        </a>
        <ul className='port-challenges-list'>
            <li className={`proyect-item ${theme && 'proyectItemDark'}`}>
              <div className='proyect-img-wrapper'>
                <img src={challenge1} className='proyect-img' alt="img-challenge-1" />
                <div 
                className='proyect-img-title-wrapper'
                data-desc='summary preview clone!'>
                  <p className='proyect-img-title'>summary card</p>
                </div>
              </div>
              <div className='proyect-item-desc-wrapper'>
                <div>
                  <div className='proyect-item-content'>
                    <a 
                    href="https://github.com/JoaquinRodriguez04/sumarry--challenge" 
                    className="proyect-item-title"
                    target='blank'>Summary-card</a>
                    <p className={`proyect-item-description ${theme && 'proyectItemDescDark'}`}>responsive card design challenge.</p>
                    <a  
                    href='https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV' 
                    className='proyect-item-link-chal'
                    target='BLANK'>
                      challenge link...
                    </a>
                  </div>
                  <div className="proyect-item-tech">
                    <WidgetHtml/>
                    <WidgetCss/>
                  </div>
                </div>
                <div className='proyect-icon-wrapper'>
                  <a 
                  href="https://github.com/JoaquinRodriguez04/sumarry--challenge"
                  target='blank'
                  className='pro-icon-link'>
                    <i className="bi bi-github"></i>
                    code
                  </a>
                  <a 
                  href="https://joaquinrodriguez04.github.io/sumarry--challenge/"
                  target='blank'
                  className='pro-icon-link'>
                    <i className="bi bi-link-45deg"></i>
                    view
                  </a>
                </div>
              </div>
            </li>
            <li className={`proyect-item ${theme && 'proyectItemDark'}`}>
              <div className='proyect-img-wrapper'>
                <img src={challenge2} className='proyect-img' alt="img-challenge-2" />
                <div 
                className='proyect-img-title-wrapper'
                data-desc='you can create the tasks you want!'>
                  <p className='proyect-img-title'>TaskNinja</p>
                </div>
              </div>
              <div className="proyect-item-desc-wrapper">
                <div>
                  <div className='proyect-item-content'>
                    <a 
                    href="https://joaquinrodriguez04.github.io/TaskNinja/" 
                    className="proyect-item-title"
                    target='blank'>
                      TaskNinja
                    </a>
                    <p className={`proyect-item-description ${theme && 'proyectItemDescDark'}`}>task management web app.</p>
                    <a  
                    href='https://www.frontendmentor.io/challenges/kanban-task-management-web-app-wgQLt-HlbB' 
                    className='proyect-item-link-chal'
                    target='BLANK'>
                      challenge link...
                    </a>
                  </div>
                  <div className="proyect-item-tech">
                    <WidgetReact/>
                    <WidgetContext/>
                    <WidgetCss/>
                    <WidgetVite/>
                  </div>
                </div>
                <div className='proyect-icon-wrapper'>
                  <a 
                  href="https://github.com/JoaquinRodriguez04/TaskNinja"
                  target='blank'
                  className='pro-icon-link'>
                    <i className="bi bi-github"></i>
                    code
                  </a>
                  <a 
                  href="https://joaquinrodriguez04.github.io/TaskNinja/"
                  target='blank'
                  className='pro-icon-link'>
                    <i className="bi bi-link-45deg"></i>
                    view
                  </a>
                </div>
              </div>
            </li>
            <li className={`proyect-item ${theme && 'proyectItemDark'}`}>
              <div className='proyect-img-wrapper'>
                <img src={challenge3} className='proyect-img' alt="img-challenge-3" />
                <div 
                className='proyect-img-title-wrapper'
                data-desc='you can create your markdown file and modify it whenever you want!'>
                  <p className='proyect-img-title'>Markdown</p>
                </div>
              </div>
              <div className="proyect-item-desc-wrapper">
                <div>
                  <div className='proyect-item-content'>
                    <a 
                    href="https://joaquinrodriguez04.github.io/markdown/" 
                    className="proyect-item-title"
                    target='blank'>
                      Markdown
                    </a>
                    <p className={`proyect-item-description ${theme && 'proyectItemDescDark'}`}>markdown editor app in the browser, where you can save your files and follow your document whenever you want.</p>
                    <a  
                    href='https://www.frontendmentor.io/challenges/inbrowser-markdown-editor-r16TrrQX9' 
                    className='proyect-item-link-chal'
                    target='BLANK'>
                      challenge link...
                    </a>
                  </div>
                  <div className="proyect-item-tech">
                    <WidgetReact/>
                    <WidgetContext/>
                    <WidgetCss/>
                    <WidgetVite/>
                  </div>
                </div>
                <div className='proyect-icon-wrapper'>
                  <a 
                  href="https://github.com/JoaquinRodriguez04/markdown"
                  target='blank'
                  className='pro-icon-link'>
                    <i className="bi bi-github"></i>
                    code
                  </a>
                  <a 
                  href="https://joaquinrodriguez04.github.io/markdown/"
                  target='blank'
                  className='pro-icon-link'>
                    <i className="bi bi-link-45deg"></i>
                    view
                  </a>
                </div>
              </div>
            </li>
            <li className={`proyect-item ${theme && 'proyectItemDark'}`}>
              <div className='proyect-img-wrapper'>
                <img src={challenge4} className='proyect-img' alt="img-challenge-4" />
                <div 
                className='proyect-img-title-wrapper'
                data-desc='clone of a hero website!'>
                  <p className='proyect-img-title'>snap app</p>
                </div>
              </div>
              <div className="proyect-item-desc-wrapper">
                <div>
                  <div className='proyect-item-content'>
                    <a 
                    href="https://joaquinrodriguez04.github.io/snap-app/" 
                    className="proyect-item-title"
                    target='blank'>
                      snap-app
                    </a>
                    <p className={`proyect-item-description ${theme && 'proyectItemDescDark'}`}>Responsive intro section with dropdown navigation.</p>
                    <a  
                    href='https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5' 
                    className='proyect-item-link-chal'
                    target='BLANK'>
                      challenge link...
                    </a>
                  </div>
                  <div className="proyect-item-tech">
                    <WidgetReact/>
                    <WidgetContext/>
                    <WidgetCss/>
                    <WidgetVite/>
                  </div>
                </div>
                <div className='proyect-icon-wrapper'>
                  <a 
                  href="https://github.com/JoaquinRodriguez04/snap-app"
                  target='blank'
                  className='pro-icon-link'>
                    <i className="bi bi-github"></i>
                    code
                  </a>
                  <a 
                  href="https://joaquinrodriguez04.github.io/snap-app/"
                  target='blank'
                  className='pro-icon-link'>
                    <i className="bi bi-link-45deg"></i>
                    view
                  </a>
                </div>
              </div>
            </li>
            <li className={`proyect-item ${theme && 'proyectItemDark'}`}>
              <div className='proyect-img-wrapper'>
                <img src={challenge5} className='proyect-img' alt="img-challenge-5" />
                <div 
                className='proyect-img-title-wrapper'
                data-desc='create your tasks!'>
                  <p className='proyect-img-title'>todo app</p>
                </div>
              </div>
              <div className="proyect-item-desc-wrapper">
                <div>
                  <div className='proyect-item-content'>
                    <a 
                    href="https://joaquinrodriguez04.github.io/Todo-app/" 
                    className="proyect-item-title"
                    target='blank'>
                      todo-app
                    </a>
                    <p className={`proyect-item-description ${theme && 'proyectItemDescDark'}`}>The classic task app with a few twists! includes a dark/light theme switch and navigation between completed, active and all.</p>
                    <a  
                    href='https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW' 
                    className='proyect-item-link-chal'
                    target='BLANK'>
                      challenge link...
                    </a>
                  </div>
                  <div className="proyect-item-tech">
                    <WidgetReact/>
                    <WidgetContext/>
                    <WidgetCss/>
                    <WidgetVite/>
                  </div>
                </div>
                <div className='proyect-icon-wrapper'>
                  <a 
                  href="https://github.com/JoaquinRodriguez04/Todo-app"
                  target='blank'
                  className='pro-icon-link'>
                    <i className="bi bi-github"></i>
                    code
                  </a>
                  <a 
                  href="https://joaquinrodriguez04.github.io/Todo-app/"
                  target='blank'
                  className='pro-icon-link'>
                    <i className="bi bi-link-45deg"></i>
                    view
                  </a>
                </div>
              </div>
            </li>
            <li className={`proyect-item ${theme && 'proyectItemDark'}`}>
              <div className='proyect-img-wrapper'>
                <img src={challenge6} className='proyect-img' alt="img-challenge-6" />
                <div 
                className='proyect-img-title-wrapper'
                data-desc='clone of a social media task panel!'>
                  <p className='proyect-img-title'>social media dashboard</p>
                </div>
              </div>
              <div className="proyect-item-desc-wrapper">
                <div>
                  <div className='proyect-item-content'>
                    <a 
                    href="https://joaquinrodriguez04.github.io/social-media-dashboard/" 
                    className="proyect-item-title"
                    target='blank'>
                      social-media-dashboard
                    </a>
                    <p className={`proyect-item-description ${theme && 'proyectItemDescDark'}`}>This design shows a representation of a social media dashboard that includes light/dark mode.</p>
                    <a  
                    href='https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H' 
                    className='proyect-item-link-chal'
                    target='BLANK'>
                      challenge link...
                    </a>
                  </div>
                  <div className="proyect-item-tech">
                    <WidgetHtml/>
                    <WidgetCss/>
                  </div>
                </div>
                <div className='proyect-icon-wrapper'>
                  <a 
                  href="https://github.com/JoaquinRodriguez04/social-media-dashboard"
                  target='blank'
                  className='pro-icon-link'>
                    <i className="bi bi-github"></i>
                    code
                  </a>
                  <a 
                  href="https://joaquinrodriguez04.github.io/social-media-dashboard/"
                  target='blank'
                  className='pro-icon-link'>
                    <i className="bi bi-link-45deg"></i>
                    view
                  </a>
                </div>
              </div>
            </li>
            <li className={`proyect-item ${theme && 'proyectItemDark'}`}>
              <div className='proyect-img-wrapper'>
                <img src={challenge7} className='proyect-img' alt="img-challenge-7" />
                <div 
                className='proyect-img-title-wrapper'
                data-desc='you can filter the job you want!'>
                  <p className='proyect-img-title'>Job listings</p>
                </div>
              </div>
              <div className="proyect-item-desc-wrapper">
                <div>
                  <div className='proyect-item-content'>
                    <a 
                    href="https://joaquinrodriguez04.github.io/jobsListings/" 
                    className="proyect-item-title"
                    target='blank'>
                      Job-listings
                    </a>
                    <p className={`proyect-item-description ${theme && 'proyectItemDescDark'}`}>In this application, 16 jobs are rendered where the user can make the filters according to their preferences.</p>
                    <a  
                    href='https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt' 
                    className='proyect-item-link-chal'
                    target='BLANK'>
                      challenge link...
                    </a>
                  </div>
                  <div className="proyect-item-tech">
                    <WidgetReact/>
                    <WidgetRedux/>
                    <WidgetCss/>
                    <WidgetJson/>
                    <WidgetVite/>
                  </div>
                </div>
                <div className='proyect-icon-wrapper'>
                  <a 
                  href="https://github.com/JoaquinRodriguez04/jobsListings"
                  target='blank'
                  className='pro-icon-link'>
                    <i className="bi bi-github"></i>
                    code
                  </a>
                  <a 
                  href="https://joaquinrodriguez04.github.io/jobsListings/"
                  target='blank'
                  className='pro-icon-link'>
                    <i className="bi bi-link-45deg"></i>
                    view
                  </a>
                </div>
              </div>
            </li>
            <a 
            href="https://www.frontendmentor.io/home"
            target='BLANK'
            className={`proyect-item proyect-frontend-mentor ${theme && 'proyectItemDark proyectFMDark beforeFMDK'}`}>
              <svg role="img" className='iconFM' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Frontend Mentor</title><path d="M12.1706 1.2719a.732.732 0 00-.7186.732v13.914a.732.732 0 00.732.732.732.732 0 00.7318-.732V2.004a.732.732 0 00-.7452-.732zm11.0741 4.1685a.7339.7339 0 00-.2764.063L16.686 8.307a.7329.7329 0 000 1.3361l6.2823 2.8134a.7378.7378 0 00.2993.0648.732.732 0 00.2973-1.401l-4.786-2.1443 4.786-2.1366a.7339.7339 0 00.3698-.9664.7339.7339 0 00-.69-.4327zm-22.499 5.032a.7316.7316 0 00-.7223.9149c1.736 6.677 7.7748 11.341 14.6822 11.341a.732.732 0 000-1.464 13.7055 13.7055 0 01-13.266-10.2449.7316.7316 0 00-.6939-.547z" fill={theme && '#8C949F'}/></svg>
              <p className='proyect-frontend-mentor-desc'>see more in Frontend Mentor</p>
            </a>
        </ul>
    </section>
  )
};

export default PortChallenges;
