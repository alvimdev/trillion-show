import React from 'react';
import { Link } from 'react-router-dom';
import style from '../resources/styles/Home.module.css';
import img from '../resources/images/quiz.png';

function Home() {
    return (
        <section className={style.home_container}>
            <h1>Bem-vindo ao <span>Show do Trilhão</span></h1>
            <p>Comece o seu <span>Quiz</span> agora mesmo!</p>
            <Link className={style.btn} to='/quiz'>Start</Link>
            <img src={img} alt="quiz" />
        </section>
    );
}

export default Home;
