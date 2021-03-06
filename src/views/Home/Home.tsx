import store from '../../store/store';

import './Home.scss';

function Home() {
  console.log(store.getState());
  store.dispatch({ type: 'incrementCount' });
  store.dispatch({ type: 'setUser', payload: 'Fake Chase' });
  console.log(store.getState());

  return (
    <div className="view Home">
      <h3>Home</h3>
      <p className="msg">
        <span className="hand">👋</span> Hey, I'm Chase!
      </p>
    </div>
  );
}

export default Home;
