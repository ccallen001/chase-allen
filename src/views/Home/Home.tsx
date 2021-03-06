import store from '../../store/store';

import './Home.scss';

function Home() {
  console.log(store.getState());
  store.dispatch({ type: 'incrementCount' });
  store.dispatch({ type: 'setUser', payload: 'Fake Chase' });
  console.log(store.getState());

  return <div className="view Home">Home</div>;
}

export default Home;
