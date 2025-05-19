import PageLayout from "../components/PageLayout";

const Contact = () => {
  return (
    <PageLayout
      title="Nosso contato"
      paragraph="Pode mandar email para kiaizenx@gmail.com"
      url="https://www.petz.com.br/blog/wp-content/uploads/2022/08/por-que-gatos-nao-gostam-de-carinho-na-barriga-final.jpg"
      alt="Gato contato"
      toLink1="/about"
      link1="Sobre"
      toLink2="/"
      link2="Home"
      toLink3="/user/3"
      link3="Ver perfil do usuário 3"
    />
  );
};

export default Contact;
