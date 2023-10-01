// imgs
import proyect1 from '../assets/imgs/pro1.png';
import proyect2 from '../assets/imgs/pro2.png';
import proyect3 from '../assets/imgs/pro3.png';
import proyect4 from '../assets/imgs/pro4.png';
import proyect5 from '../assets/imgs/pro5.png';
import proyect6 from '../assets/imgs/pro6.png';

// widgets
import WidgetHtml from '../widgets/WidgetHtml';
import WidgetCss from '../widgets/WidgetCss';
import WidgetJs from '../widgets/WidgetJs';
import WidgetReact from '../widgets/WidgetReact';
import WidgetContext from '../widgets/WidgetContext';
import WidgetVite from '../widgets/WidgetVite';
import WidgetApi from '../widgets/WidgetApi';
import WidgetPoint from '../widgets/WidgetPoint';
import { useContext } from 'react';
import { PortContext } from '../context/portContext';

const PortProyects = () => {

  const {theme} = useContext(PortContext);

  return (
    <section className='port-proyects-wrapper' id='Proyects'>
      <h2 className='port-proyects-title'>proyects<WidgetPoint/></h2>
      <p className='port-proyects-desc'>In this section you will find the selection of my best projects!</p>
        <ul className='port-proyects-list'>
            <li className={`proyect-item ${theme && 'proyectItemDark'}`}>
              <div className='proyect-img-wrapper'>
                <img src={proyect1} className='proyect-img' alt="img-proyect-1" />
                <div 
                className='proyect-img-title-wrapper'
                data-desc='You can add whatever tasks you want!'>
                  <p className='proyect-img-title'>Things-to-do</p>
                </div>
              </div>
              <div className='proyect-item-desc-wrapper'>
                <div>
                  <div className='proyect-item-content'>
                    <a 
                    href="https://joaquinrodriguez04.github.io/things-to-do/" 
                    className="proyect-item-title"
                    target='blank'>Things-to-do</a>
                    <p className={`proyect-item-description ${theme && 'proyectItemDescDark'} `}>application to add tasks, the user can delete his task if he has already completed it.</p>
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
                  href="https://github.com/JoaquinRodriguez04/things-to-do"
                  target='blank'
                  className='pro-icon-link'>
                    <i className="bi bi-github"></i>
                    code
                  </a>
                  <a 
                  href="https://joaquinrodriguez04.github.io/things-to-do/"
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
                <img src={proyect2} className='proyect-img' alt="img-proyect-2" />
                <div 
                className='proyect-img-title-wrapper'
                data-desc='You can learn the description of the pokemon!!'>
                  <p className='proyect-img-title'>pokedex</p>
                </div>
              </div>
              <div className='proyect-item-desc-wrapper'>
                <div>
                  <div className='proyect-item-content'>
                    <a 
                    href="https://github.com/JoaquinRodriguez04/pokedex-api" 
                    className="proyect-item-title"
                    target='blank'>pokedex</a>
                    <p className={`proyect-item-description ${theme && 'proyectItemDescDark'} `}>pokemon filter app.</p>
                  </div>
                  <div className="proyect-item-tech">
                    <WidgetHtml/>
                    <WidgetCss/>
                    <WidgetJs/>
                    <WidgetApi/>
                  </div>
                </div>
                <div className='proyect-icon-wrapper'>
                  <a 
                  href="https://github.com/JoaquinRodriguez04/pokedex-api"
                  target='blank'
                  className='pro-icon-link'>
                    <i className="bi bi-github"></i>
                    code
                  </a>
                  <a 
                  href="https://joaquinrodriguez04.github.io/pokedex-api/"
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
                <img src={proyect3} className='proyect-img' alt="img-proyect-3" />
                <div 
                className='proyect-img-title-wrapper'
                data-desc='You can search for your favorite pokemon!'>
                  <p className='proyect-img-title'>seeker-pokemon</p>
                </div>
              </div>
              <div className="proyect-item-desc-wrapper">
                <div>
                  <div className='proyect-item-content'>
                    <a 
                    href="https://github.com/JoaquinRodriguez04/pokedex-api" 
                    className="proyect-item-title"
                    target='blank'>seeker pokemon</a>
                    <p className={`proyect-item-description ${theme && 'proyectItemDescDark'}`}>application to search pokemon.</p>
                  </div>
                  <div className="proyect-item-tech">
                    <WidgetReact/>
                    <WidgetContext/>
                    <WidgetCss/>
                    <WidgetApi/>
                  </div>
                </div>
                <div className='proyect-icon-wrapper'>
                  <a 
                  href="https://github.com/JoaquinRodriguez04/pokedex-api"
                  target='blank'
                  className='pro-icon-link'>
                    <i className="bi bi-github"></i>
                    code
                  </a>
                  <a 
                  href="https://joaquinrodriguez04.github.io/pokedex-api/"
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
                <img src={proyect4} className='proyect-img' alt="img-proyect-4" />
                <div 
                className='proyect-img-title-wrapper'
                data-desc='you can watch the characters of the series!'>
                  <p className='proyect-img-title'>the Rick and Morty</p>
                </div>
              </div>
              <div className="proyect-item-desc-wrapper">
                <div>
                  <div className='proyect-item-content'>
                    <a 
                    href="https://github.com/JoaquinRodriguez04/the-Rick-and-Morty" 
                    className="proyect-item-title"
                    target='blank'>the-Rick-and-Morty</a>
                    <p className={`proyect-item-description ${theme && 'proyectItemDescDark'}`}>application of pages of characters from the rick and morty series.</p>
                  </div>
                  <div className="proyect-item-tech">
                    <WidgetHtml/>
                    <WidgetCss/>
                    <WidgetJs/>
                    <WidgetApi/>
                  </div>
                </div>
                <div className='proyect-icon-wrapper'>
                  <a 
                  href="https://github.com/JoaquinRodriguez04/the-Rick-and-Morty"
                  target='blank'
                  className='pro-icon-link'>
                    <i className="bi bi-github"></i>
                    code
                  </a>
                  <a 
                  href="https://joaquinrodriguez04.github.io/the-Rick-and-Morty/"
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
                <img src={proyect5} className='proyect-img' alt="img-proyect-5" />
                <div 
                className='proyect-img-title-wrapper'
                data-desc='travel page clone!'>
                  <p className='proyect-img-title'>travelers</p>
                </div>
              </div>
              <div className='proyect-item-desc-wrapper'>
                <div>
                  <div className='proyect-item-content'>
                    <a 
                    href="https://github.com/JoaquinRodriguez04/Travelers---page" 
                    className="proyect-item-title"
                    target='blank'>
                      travelers-page
                    </a>
                    <p className={`proyect-item-description ${theme && 'proyectItemDescDark'}`}>Landing page about a mountain services sales company.</p>
                  </div>
                  <div className="proyect-item-tech">
                    <WidgetHtml/>
                    <WidgetCss/>
                    <WidgetJs/>
                  </div>
                </div>
                <div className='proyect-icon-wrapper'>
                  <a 
                  href="https://github.com/JoaquinRodriguez04/Travelers---page"
                  target='blank'
                  className='pro-icon-link'>
                    <i className="bi bi-github"></i>
                    code
                  </a>
                  <a 
                  href="https://joaquinrodriguez04.github.io/Travelers---page/"
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
                <img src={proyect6} className='proyect-img' alt="img-proyect-6" />
                <div 
                className='proyect-img-title-wrapper'
                data-desc='you can convert the unit of measurement you want!'>
                  <p className='proyect-img-title'>conversor</p>
                </div>
              </div>
              <div className='proyect-item-desc-wrapper'>
                <div>
                  <div className='proyect-item-content'>
                    <a 
                    href="https://github.com/JoaquinRodriguez04/conversor" 
                    className="proyect-item-title"
                    target='blank'>conversor-app
                    </a>
                    <p className={`proyect-item-description ${theme && 'proyectItemDescDark'}`}>Unit converter app.</p>
                  </div>
                  <div className="proyect-item-tech">
                    <WidgetHtml/>
                    <WidgetCss/>
                    <WidgetJs/>
                  </div>
                </div>
                <div className='proyect-icon-wrapper'>
                  <a
                  href="https://github.com/JoaquinRodriguez04/conversor"
                  target='blank'
                  className='pro-icon-link'>
                    <i className="bi bi-github"></i>
                    code
                  </a>
                  <a 
                  href="https://joaquinrodriguez04.github.io/conversor/"
                  target='blank'
                  className='pro-icon-link'>
                    <i className="bi bi-link-45deg"></i>
                    view
                  </a>
                </div>
              </div>
            </li>
        </ul>
    </section>
  )
};

export default PortProyects;
