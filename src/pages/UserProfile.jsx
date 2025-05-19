import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const UserProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) return <div>Carregando usuário...</div>;

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-2">Perfil de {user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Website: {user.website}</p>
    </div>
  );
};

export default UserProfile;
