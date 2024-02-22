import React, { useState } from 'react';
import style from '../resources/styles/Auth.module.css';
import { useNavigate } from 'react-router-dom'; // Importe o useNavigate para navegação

function Login() {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Estado para armazenar mensagens de erro
  const navigate = useNavigate(); // Instância useNavigate para navegação

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificação de login
    const user = users.find(u => (u.username === username || u.email === username) && u.password === password);

    if (user) {
      // Login bem-sucedido, armazenar informações de login no localStorage e redirecionar para a página do quiz
      localStorage.setItem('loggedInUser', JSON.stringify(user)); // Armazenar informações do usuário no localStorage
      navigate('/quiz');
    } else {
      // Login falhou, exibir mensagem de erro
      setError('Credenciais inválidas ou inexistentes. Por favor, tente novamente ou visite a página de registro.');
    }
  };

  return (
    <section className={style.section}>
      <div className={style.card}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Usuário ou Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          {error && <p className={style.error}>{error}</p>} {/* Exibir mensagem de erro se houver */}
        </form>
        <p>Ainda sem conta? 
          <a href="/register">Cadastre-se já</a>
        </p>
      </div>
    </section>
  );
};

export default Login;
