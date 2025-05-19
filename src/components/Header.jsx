import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4 shadow">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Atividade de fixação React</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">
            Início
          </Link>
          <Link to="/about" className="hover:underline">
            Sobre
          </Link>
          <Link to="/contact" className="hover:underline">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
