import { BrowserRouter } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';

import Routes from './routes/Routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
