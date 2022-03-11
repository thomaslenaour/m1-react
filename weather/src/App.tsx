import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes/Routes';

const App: FC = () => {
  console.log('process.env', process.env);

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
