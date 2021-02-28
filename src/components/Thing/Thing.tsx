import './Things.scss';

function Thing() {
  return (
    <div
      className="component Thing"
      onInput={(...args) => {
        console.log(args);
      }}
    >
      Conic Gradient
    </div>
  );
}

export default Thing;
