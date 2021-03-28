import { HashRouter } from 'react-router-dom';

import { AuthProvider } from '../contexts/AuthContext';

import Header from '../components/Header/Header';
import Nav from '../components/Nav/Nav';
import View from '../views/View';

import './App.scss';

function App() {
  return (
    <div className="App" data-testid="App">
      <HashRouter>
        <AuthProvider>
          <Header />
          <Nav />
          <View />
        </AuthProvider>
      </HashRouter>
    </div>
  );
}

export default App;
