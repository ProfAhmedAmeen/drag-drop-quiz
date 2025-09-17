import React, { useState } from "react";

interface Question {
  id: number;
  text: string;
  options: string[];
  answer: string;
}

const DragDropQuiz: React.FC = () => {
  const [score, setScore] = useState(0);

  const questions: Question[] = [
    {
      id: 1,
      text: "مثال سؤال",
      options: ["أ", "ب", "ج", "د"],
      answer: "أ"
    }
  ];

  return (
    <div>
      <h1>Drag & Drop Quiz</h1>
      {questions.map((q) => (
        <div key={q.id}>
          <p>{q.text}</p>
          <ul>
            {q.options.map((opt, idx) => (
              <li key={idx}>{opt}</li>
            ))}
          </ul>
        </div>
      ))}
      <p>Score: {score}</p>
    </div>
  );
};

export default DragDropQuiz;