// imgs
import proyect1 from '../assets/imgs/pro1.png';
import proyect2 from '../assets/imgs/pro2.png';
import proyect3 from '../assets/imgs/pro3.png';
import proyect4 from '../assets/imgs/pro4.png';
import proyect5 from '../assets/imgs/pro5.png';

// widgets
import WidgetHtml from '../widgets/WidgetHtml';
import WidgetCss from '../widgets/WidgetCss';
import WidgetJs from '../widgets/WidgetJs';
import WidgetReact from '../widgets/WidgetReact';
import WidgetContext from '../widgets/WidgetContext';
import WidgetApi from '../widgets/WidgetApi';
import WidgetPoint from '../widgets/WidgetPoint';
import WidgetTailwind from '../widgets/WidgetTailwind';

// context
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
                <img src={proyect2} className='proyect-img' alt="img-proyect-2" />
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
                <img src={proyect3} className='proyect-img' alt="img-proyect-4" />
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
                <img src={proyect4} className='proyect-img' alt="img-proyect-6" />
                <div 
                className='proyect-img-title-wrapper'
                data-desc='you can convert the unit of measurement you want!'>
                  <p className='proyect-img-title'>book list app UI</p>
                </div>
              </div>
              <div className='proyect-item-desc-wrapper'>
                <div>
                  <div className='proyect-item-content'>
                    <a 
                    href="https://github.com/JoaquinRodriguez04/book-list" 
                    className="proyect-item-title"
                    target='blank'>book-list
                    </a>
                    <p className={`proyect-item-description ${theme && 'proyectItemDescDark'}`}>application in which the user can choose a book and filter it according to pages and genres.</p>
                  </div>
                  <div className="proyect-item-tech">
                    <WidgetReact/>
                    <WidgetTailwind/>
                  </div>
                </div>
                <div className='proyect-icon-wrapper'>
                  <a
                  href="https://github.com/JoaquinRodriguez04/book-list"
                  target='blank'
                  className='pro-icon-link'>
                    <i className="bi bi-github"></i>
                    code
                  </a>
                  <a 
                  href="https://joaquinrodriguez04.github.io/book-list/"
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
                data-desc='blog page about space stars!'>
                  <p className='proyect-img-title'>space-white</p>
                </div>
              </div>
              <div className='proyect-item-desc-wrapper'>
                <div>
                  <div className='proyect-item-content'>
                    <a 
                    href="space-white.vercel.app" 
                    className="proyect-item-title"
                    target='blank'>
                      space-white
                    </a>
                    <p className={`proyect-item-description ${theme && 'proyectItemDescDark'}`}>In this interactive blog you can observe some space stars, have fun!</p>
                  </div>
                  <div className="proyect-item-tech">
                    <WidgetHtml/>
                    <WidgetCss/>
                    <WidgetJs/>
                  </div>
                </div>
                <div className='proyect-icon-wrapper'>
                  <a 
                  href="https://vercel.com/joaquin-rodriguezs-projects/space-white/EEEKfYmZUPpR1nR8tKRuVXjojsBg/source"
                  target='blank'
                  className='pro-icon-link'>
                    <i className="bi bi-github"></i>
                    code
                  </a>
                  <a 
                  href="space-white.vercel.app"
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
