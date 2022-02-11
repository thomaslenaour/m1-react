import { FC } from 'react';

const Layout: FC = ({ children }) => {
  return <div className="main-container my-5">{children}</div>;
};

export default Layout;
