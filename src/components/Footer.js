import {FaInstagram, FaLinkedin, FaGithub, FaArrowAltCircleRight} from 'react-icons/fa';
import React from 'react';

import styles from '../resources/styles/Footer.module.css';

function Footer(){
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li className={styles.item}>
                    <a href="https://www.instagram.com/alvim_brn" rel="noopener noreferrer" target="_blank"><FaInstagram/></a>
                </li>
                <li className={styles.item}>
                    <a href="https://www.linkedin.com/in/bernardo-alvim" rel="noopener noreferrer" target="_blank"><FaLinkedin/></a>
                </li>
                <li className={styles.item}>
                    <a href="https://github.com/alvimdev" rel="noopener noreferrer" target="_blank"><FaGithub/></a>
                </li>
                <li className={styles.item}>
                <a href="https://tinyurl.com/portifolio-alvim" rel="noopener noreferrer" target="_blank"><FaArrowAltCircleRight/></a>
                </li>
            </ul>
            <p className={styles.copy_right}>
                <span> Alvim </span> &copy; 2022
            </p>
        </footer>
    )
}

export default Footer