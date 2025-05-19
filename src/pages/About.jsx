import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";

const About = () => {
  return (
    <PageLayout
      title="Sobre Nós"
      paragraph="Este é uma Página de gatinhos. Porque gostei muito do codecamp"
      url="https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/75552.jpg?w=1900&h=1267"
      alt="Gato ranzinza"
      toLink1="/"
      link1="Home"
      toLink2="/contact"
      link2="Contato"
      toLink3="/user/2"
      link3="Ver perfil do usuário 2"
    />
  );
};

export default About;
