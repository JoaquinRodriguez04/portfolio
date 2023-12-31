// context
import { useContext } from 'react';
import { PortContext } from '../context/portContext';

// imports icons
import iconhtml from '../assets/icons/iconHtml.svg';
import iconcss from '../assets/icons/iconCss.svg';
import iconjs from '../assets/icons/iconJs.svg';
import iconReact from '../assets/icons/iconReact.svg';
import iconRedux from '../assets/icons/iconRedux.svg';
import iconGit from '../assets/icons/iconGit.svg';
import iconGithub from '../assets/icons/iconGithub.svg';
import iconNpm from '../assets/icons/iconNpm.svg';
import iconJson from '../assets/icons/iconJson.svg';
import iconApi from '../assets/icons/iconApi.png';
import iconVisual from '../assets/icons/iconVisual.svg';
import iconVite from '../assets/icons/iconVite.svg';
import iconTailwind from '../assets/icons/iconTailwind.svg';
import iconNext from '../assets/icons/iconNextjs.svg';
import iconVercel from '../assets/icons/iconVercel.svg';

// iconsModeDark
import iconGithubWhite from '../assets/icons/iconGithubWhite.svg';
import iconNextWhite from '../assets/icons/iconNextjsWhite.svg';
import iconVercelWhite from '../assets/icons/iconVercelWhite.svg';


const PortTech = () => {
    
    const {theme} = useContext(PortContext);

  return (
    <section className='port-tech-wrapper'>
        <h2 className='port-tech-title'>dev skills:</h2>
        <div className="tech-imgs-wrapper">
            <div className='tech-img-target'>
                <img src={iconhtml} className='tech-img' alt="icon-html" />
                <span className='tech-imgs-span'>HTML5</span>    
            </div>
            <div className='tech-img-target'>
                <img src={iconcss} className='tech-img' alt="icon-css" />
                <span className='tech-imgs-span'>CSS3</span>    
            </div>
            <div className='tech-img-target'>
                <img src={iconjs} className='tech-img' alt="icon-js" />
                <span className='tech-imgs-span'>JavaScript</span>    
            </div>
            <div className='tech-img-target'>
                <img src={iconReact} className='tech-img' alt="icon-reactJS" />
                <span className='tech-imgs-span'>reactJS</span>    
            </div>
            <div className='tech-img-target'>
                {theme
                ? <img src={iconNextWhite} className='tech-img' alt="icon-nextJSWhite" />
                : <img src={iconNext} className='tech-img' alt="icon-nextJS" />
                }
                <span className='tech-imgs-span'>nextJS</span>    
            </div>
            <div className='tech-img-target'>
                <img src={iconTailwind} className='tech-img' alt="icon-react" />
                <span className='tech-imgs-span'>tailwind</span>    
            </div>
            <div className='tech-img-target'>
                <img src={iconVite} className='tech-img' alt="icon-vite" />
                <span className='tech-imgs-span'>vite</span>
            </div>
            <div className='tech-img-target'>
                <img src={iconRedux} className='tech-img' alt="icon-redux" />
                <span className='tech-imgs-span'>redux</span>    
            </div>
            <div className='tech-img-target'>
                <img src={iconGit} className='tech-img' alt="icon-git" />
                <span className='tech-imgs-span'>git</span>    
            </div>
            <div className='tech-img-target'>
                {theme
                ? <img src={iconGithubWhite} className='tech-img' alt="icon-GithubWhite" />
                : <img src={iconGithub} className='tech-img' alt="icon-Github" />
                }
                <span className='tech-imgs-span'>github</span>
            </div>
            <div className='tech-img-target'>
                {theme
                ? <img src={iconVercelWhite} className='tech-img' alt="icon-vercelWhite" />
                : <img src={iconVercel} className='tech-img' alt="iicon-vercel" />
                }
                <span className='tech-imgs-span'>vercel</span>
            </div>
            <div className='tech-img-target'>
                <img src={iconJson} className='tech-img' alt="icon-json" />
                <span className='tech-imgs-span'>JSON</span>
            </div>
            <div className='tech-img-target'>
                <img src={iconApi} className='tech-img' alt="icon-api" />
                <span className='tech-imgs-span'>api rest</span>
            </div>
            <div className='tech-img-target'>
                <img src={iconNpm} className='tech-img' alt="icon-npm" />
                <span className='tech-imgs-span'>npm</span>
            </div>
            <div className='tech-img-target'>
                <img src={iconVisual} className='tech-img' alt="icon-visual" />
                <span className='tech-imgs-span'>visual Studio</span>
            </div>
        </div>
    </section>
  )
};

export default PortTech;
