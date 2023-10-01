import PortAboutMe from "./PortAboutMe";
import PortTech from "./PortTech";

const PortAboutContent = () => {
  return (
    <section className="port-about-content-wrapper" id='About'>
        <PortAboutMe/>
        <PortTech/>
    </section>
  )
};

export default PortAboutContent;
