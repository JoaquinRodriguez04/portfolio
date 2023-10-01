import { useContext } from "react";
import { PortContext } from "../context/portContext";

const PortFooter = () => {

  const {theme} = useContext(PortContext);
  
  return (
    <footer className="port-footer-wrapper">
      <h2 className={`footer-name ${theme && 'footerNameDark'}`}>Joaquín Rodriguez - portfolio</h2> 
      <p className="footer-desc">the design was created with <span className="footer-desc-react">react</span> and <span className="footer-desc-clear-css">clean css</span>, the font family is <span className="footer-desc-heebo">Heebo</span>, all the projects I teach were created with self-taught experience. I hope you liked this tour, if you have any questions you can email me, thank you very much for your time.
      </p>
      <div className="footer-link-wrapper">
        <p className="footer-desc-link">you can visit my playlist:</p>
        <a 
          href="https://open.spotify.com/playlist/5VpgebrdB8xTfRmzHPA2c8?si=7b4e543bcba647cc"
          target="BLANK"
          className={`footer-link ${theme && 'footerLinkDark'}`}>spotify list
        </a>
      </div>
    </footer>
  )
};

export default PortFooter;
