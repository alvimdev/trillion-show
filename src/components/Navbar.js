import { Link } from 'react-router-dom';
import React from 'react';
import { FaUserAlt, FaDoorClosed } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate aqui

import styles from '../resources/styles/Navbar.module.css';
import logo from '../resources/images/brain.png';

function Navbar() {
    const navigate = useNavigate(); // Mova useNavigate para o corpo do componente
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    const users = JSON.parse(localStorage.getItem('users'));

    function logout() {
       if (loggedInUser) {
            localStorage.removeItem('loggedInUser');
            navigate('/login'); // Use navigate diretamente aqui
       }
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link to="/">
                    <img src={logo} alt="quizzr" height='120px'/>
                </Link>
            </div>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <abbr title='Sair/Entrar'><FaDoorClosed onClick={logout} /></abbr>
                </li>
                <li className={styles.item}>
                    <abbr title={loggedInUser ? (loggedInUser.username) + ' - ' + (users.find(u => (u.username === loggedInUser.username)).lastScore) : '...'}><FaUserAlt/></abbr>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
