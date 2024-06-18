import React, { useState } from 'react';

const quizQuestions = [
    {
        question: 'Що означає абревіатура "HTML"?',
        options: [
            'HyperText Markup Language',
            'Home Tool Markup Language',
            'Hyperlinks and Text Markup Language',
            'HyperText Markdown Language'
        ],
        answer: 'HyperText Markup Language'
    },
    {
        question: 'Яка компанія розробила мову програмування Java?',
        options: [
            'Microsoft',
            'Apple',
            'Sun Microsystems',
            'Google'
        ],
        answer: 'Sun Microsystems'
    },
    {
        question: 'Яка з наведених мов програмування є функціональною?',
        options: [
            'Python',
            'Java',
            'Haskell',
            'C++'
        ],
        answer: 'Haskell'
    },
    {
        question: 'Що таке Git?',
        options: [
            'Мова програмування',
            'Система контролю версій',
            'Редактор коду',
            'Фреймворк для розробки веб-додатків'
        ],
        answer: 'Система контролю версій'
    },
    {
        question: 'Яка з наведених баз даних є реляційною?',
        options: [
            'MongoDB',
            'Redis',
            'MySQL',
            'Cassandra'
        ],
        answer: 'MySQL'
    }
];

const QuizSite = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswerOptionClick = (answer) => {
        if (answer === quizQuestions[currentQuestion].answer) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quizQuestions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div>
            {showScore ? (
                <div>
                    <h2>Ваш результат: {score} із {quizQuestions.length}</h2>
                </div>
            ) : (
                <div>
                    <h2>{quizQuestions[currentQuestion].question}</h2>
                    <div>
                        {quizQuestions[currentQuestion].options.map((option, index) => (
                            <button key={index} onClick={() => handleAnswerOptionClick(option)}>
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuizSite;

