// styles
import './App.css';

// components
import PortMainApp from './components/PortMainApp';
import CursorTrack from './components/CursorTrack';
import { PortProvider } from './context/portContext';
import BubblesWrapper from './components/BubblesWrapper';

function App() {

  return (
    <PortProvider>
      <BubblesWrapper/>
      <CursorTrack/>
      <PortMainApp/>
    </PortProvider>
  )
};

export default App;
