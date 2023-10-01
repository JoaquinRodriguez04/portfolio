// components
import PortHeader from './PortHeader';
import PortHero from './PortHero';
import PortAboutContent from './PortAboutContent';
import PortProyects from './PortProyects';
import PortChallenges from './PortChallenges';
import PortForm from './PortForm';
import PortFooter from './PortFooter';
import { useContext } from 'react';
import { PortContext } from '../context/portContext';

const PortMainApp = () => {
    const {theme} = useContext(PortContext);

  return (
    <main className={`app-container ${theme && 'appDark'}`}>
      <div className="header-wrapper">
        {/* header */}
        <PortHeader/>
      </div>
      <div className='content-wrapper'>
        {/* hero */}
        <PortHero/>
        {/* presentation/about */}
        <PortAboutContent/>
        {/* proyects */}
        <PortProyects/>
        {/* challenges */}
        <PortChallenges/>
        {/* contact form */}
        <PortForm/>
        {/* footer */}
        <PortFooter/>
      </div>
    </main>
  )
};

export default PortMainApp;
