import { useEffect, useRef, useState } from 'react';

import './Trivia.scss';

function Trivia() {
  const selectRef: any = useRef<HTMLSelectElement>();

  const [triviaArray, setTriviaArray] = useState<any>([]);
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10')
      .then((resp) => resp.json())
      .then((json) => setTriviaArray(json.results));
  }, []);

  function handleSubmit() {
    if (triviaArray?.[index]?.correct_answer === selectRef?.current?.value) {
      setMsg('Correct!');
      setScore(score + 1);
    } else {
      setMsg('Wrong.');
    }

    setTimeout(() => {
      setMsg('');
      setIndex(index + 1);
    }, 2000);
  }

  return (
    <div className="game Trivia">
      <h4 className="game-title">Trivia</h4>
      <div>
        <p>Question Number: {index + 1}</p>
        <p>Score: {score}</p>
        <p
          className="question"
          dangerouslySetInnerHTML={{ __html: triviaArray?.[index]?.question }}
        ></p>
        {!msg && (
          <select ref={selectRef}>
            {triviaArray?.[index]?.incorrect_answers
              .concat(triviaArray?.[index]?.correct_answer)
              .sort(() => Math.random() - 0.5)
              .map((incorrect_answer: string, i: number) => (
                <option
                  dangerouslySetInnerHTML={{ __html: incorrect_answer }}
                  key={i}
                ></option>
              ))}
          </select>
        )}
        <p
          className="msg"
          style={{ color: msg === 'Correct!' ? 'limegreen' : 'red' }}
        >
          {msg}
        </p>
        <button onClick={handleSubmit} disabled={!!msg}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Trivia;
