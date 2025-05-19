import PageLayout from "../components/PageLayout";

const Home = () => {
  return (
    <PageLayout
      title="Bem-vindo à Página Inicial"
      paragraph="Explore nosso conteúdo incrível!"
      url="https://static.vecteezy.com/ti/fotos-gratis/p2/24584983-animal-gato-trabalhando-as-recepcao-conceito-do-ser-recepcionista-ai-gerado-imagem-foto.JPG"
      alt="Gato recepcionista"
      toLink1="/about"
      link1="Sobre"
      toLink2="/contact"
      link2="Contato"
      toLink3="/user/1"
      link3="Ver perfil do usuário 1"
    />
  );
};

export default Home;
