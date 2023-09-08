import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { NavigationBar, Footer, Container } from '../../components';

import styles from './styles.module.css';
import { mergeStyles } from '../../utilities.ts';

function MainLayout() {
  return (
    <Fragment>
      <NavigationBar />
      <main className={mergeStyles(['px-2', styles.main])}>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </Fragment>
  );
}

export default MainLayout;
