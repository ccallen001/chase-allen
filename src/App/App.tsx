import Header from '../components/Header/Header';
import Nav from '../components/Nav/Nav';
import View from '../views/View';

import './App.scss';

function App() {
  return (
    <div className="App" data-testid="App">
      <Header />
      <Nav />
      <View />
    </div>
  );
}

export default App;
