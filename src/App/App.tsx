import Header from '../components/Header/Header';
import Nav from '../components/Nav/Nav';
import View from '../views/View';

import { useAuth } from '../contexts/AuthContext';

import './App.scss';

function App() {
  const { userIsLoading } = useAuth();

  return userIsLoading ? null : (
    <div className="App" data-testid="App">
      <Header />
      <Nav />
      <View />
    </div>
  );
}

export default App;
