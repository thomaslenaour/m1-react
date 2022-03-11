import { FC } from 'react';

const App: FC = () => {
  console.log('process.env', process.env);
  return <div>Hello World</div>;
};

export default App;
