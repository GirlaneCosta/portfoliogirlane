import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/girl.jpg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Girlane oliveira" />
       <p className="title">Desenvolvedora Front-End</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="girlane.pdf" target="_blank" className="btn">
        Download curriculo
      </a>
    </aside>
  );
};

export default Sidebar;
