import { FC } from 'react';
import Button from '../components/Button';
import Layout from '../components/Layout';
import { AppRoutes } from '../routes/Routes';

const NotFound: FC = () => {
  return (
    <Layout>
      <h2>Page not found...</h2>
      <Button href={AppRoutes.HOME} label="Back home" />
    </Layout>
  );
};

export default NotFound;
