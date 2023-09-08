import { Routes, Route } from 'react-router-dom';
import { Paths } from './constants';
import { MainLayout } from './layouts';
import { HomePage, NotFoundPage, ProfilePage } from './pages';

import './styles.css';

export default function App() {
  // const [data, loading, error] = useQuery(ApiEndpoint.Posts);

  return (
    <Routes>
      <Route path={Paths.Root} element={<MainLayout />}>
        <Route path='' element={<HomePage />} />
        <Route path='profile/:id' element={<ProfilePage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
