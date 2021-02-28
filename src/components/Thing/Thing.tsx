import './Things.scss';

function handleInput({ target }: any) {
  speechSynthesis.speak(new SpeechSynthesisUtterance(target.value));

  setTimeout(() => (target.value = ''), 500);
}

function Thing() {
  let timeout: any;

  return (
    <textarea
      className="component Thing"
      onInput={(ev) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => handleInput(ev), 2000);
      }}
    ></textarea>
  );
}

export default Thing;
