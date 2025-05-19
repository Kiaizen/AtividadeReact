const Sidebar = () => {
  return (
    <aside className="bg-blue-600 text-white py-4 my-5 border-border rounded-2xl">
      <div className="container mx-auto px-4 text-center flex flex-col items-center gap-4">
        <span>Arranhador </span>
        <div className="w-20">
          <img
            src="https://m.media-amazon.com/images/I/51EJV9IsJBL.__AC_SX300_SY300_QL70_ML2_.jpg"
            alt=""
          />
        </div>
        <span>Playground</span>
        <div className="w-20">
          <img
            src="https://m.media-amazon.com/images/I/5114Dc5BEOL._AC_SX679_.jpg"
            alt=""
          />
        </div>
        <span>Comedouro</span>
        <div className="w-20">
          <img
            src="https://m.media-amazon.com/images/I/618IfwcrGlL._AC_SY879_.jpg"
            alt=""
          />
        </div>

        <span>Cama</span>
        <div className="w-20">
          <img
            src="https://m.media-amazon.com/images/I/61feb9v-wsL.__AC_SX300_SY300_QL70_ML2_.jpg"
            alt=""
          />
        </div>
        <span>Caixa de transporte</span>
        <div className="w-20">
          <img
            src="        https://m.media-amazon.com/images/I/61d4cVD7dQL.__AC_SX300_SY300_QL70_ML2_.jpg"
            alt=""
          />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
