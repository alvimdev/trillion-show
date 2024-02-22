import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import questions from '../resources/questions.json';
import style from '../resources/styles/Question.module.css';

function Quiz() {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (!loggedInUser) {
      navigate('/login');
    }
  }, [navigate]);

  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedOptionIndex) => {
    const currentQuestion = questions[questionIndex];
    if (currentQuestion.resposta === selectedOptionIndex + 1) {
      setScore(score + 1);
    }
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      // Fim do quiz, mostrar pontuação final e atualizar lastScore
      const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
      const users = JSON.parse(localStorage.getItem('users'));
      if (loggedInUser) {
        const userIndex = users.findIndex(user => user.nickname === loggedInUser.nickname);
        if (userIndex !== -1) {
          const updatedUser = {...users[userIndex], lastScore: score};
          users[userIndex] = updatedUser;
          localStorage.setItem('loggedInUser', JSON.stringify(updatedUser));
          localStorage.setItem('users', JSON.stringify(users));
        }
      }

      alert(`Game Over! Pontuação: ${score}`);
      setQuestionIndex(0);
      setScore(0);
    }
  };

  return (
    <div className={style.container}>
      {questionIndex < questions.length && (
        <div>
          <h2>{questionIndex + 1}) {questions[questionIndex].enunciado}</h2>
          <ul className={style.alternatives}>
            {questions[questionIndex].alternativas.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(index)}>
                {option}
              </button>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Quiz;
