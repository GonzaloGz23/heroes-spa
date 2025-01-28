import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';

export const LoginPage = () => {

  const { login } = useContext(AuthContext); // 'login' es una función que se encuentra en el contexto (AuthProvider);
  const navigate = useNavigate();

  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/'; // Se obtiene la última ruta visitada y se guarda en la variable 'lastPath'

    login('Gonzalo Gómez'); // Se llama a la función 'login' que se encuentra en el contexto (AuthProvider) y se le pasa un nombre como argumento

    navigate(lastPath, {
      replace: true, // Reemplaza la página actual en el historial
    });
  }

  return (
    <div className="container">
      <h1>Login</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={onLogin}
      >
        Login
      </button>
    </div>
  )
}
