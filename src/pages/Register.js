import React, { useState } from 'react';
import style from '../resources/styles/Auth.module.css';
import { useNavigate } from 'react-router-dom'; // Importe o useNavigate para navegação

function Register() {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const [name, setName] = useState('');
        const [password, setPassword] = useState('');
        const [username, setUsername] = useState('');
        const [email, setEmail] = useState('');
        const [error, setError] = useState('');
        const navigate = useNavigate();

        const handleSubmit = (e) => {
            e.preventDefault();

            if (users.find(u => (u.username === username || u.email === email))) {
                // Credenciasi iguais
                setError('Credenciais já existentes. Por favor, tente novamente.');
            
            } else {
                // Criar novo usuário
                const newUser = {
                    name: name, // Você pode ajustar isso de acordo com os dados que deseja salvar
                    username: username,
                    email: email, // Suponha que o email seja o mesmo que o username
                    password: password,
                    lastScore: 0
                };

                // Adicionar novo usuário ao JSON local 'users'
                const updatedUsers = [...users, newUser];
                localStorage.setItem('users', JSON.stringify(updatedUsers));

                // Definir o novo usuário como o usuário logado
                localStorage.setItem('loggedInUser', JSON.stringify(newUser));

                // Redirecionar para a página do quiz
                navigate('/quiz');
            }
        };

        return (
        <section className={style.section}>
            <div className={style.card}>
            <h1>Registro</h1>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <input
                type="text"
                placeholder="Usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Criar conta</button>
                {error && <p className={style.error}>{error}</p>} {/* Exibir mensagem de erro se houver */}
            </form>
            <p>Já tem conta? 
                <a href="/login">Faça Login</a>
            </p>
            </div>
        </section>
    );
};

export default Register;
