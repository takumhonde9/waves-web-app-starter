import { Link } from 'react-router-dom';
import { Container, Avatar } from '../../components';
import { Paths } from '../../constants';
import { useQuery } from '@apollo/client';
import { IProfile } from '../../types';
import { GET_PROFILE } from '../../lib';
import { useAuthContext } from '../../hooks';

import styles from './styles.module.css';

function NavigationBar() {
  const { user } = useAuthContext();

  const { loading, error, data } = useQuery<
    {
      profile: IProfile;
    },
    { id: number }
  >(GET_PROFILE, { variables: { id: user ? user.id : -1 } });

  if (error) {
    return <div className='error'>{error.message}</div>;
  }

  if (loading) {
    return <div className={styles['navigation-placeholder']} />;
  }
  return (
    <div className='bg-base-800 text-base-100 py-3 px-2 fixed t-0 l-0 r-0 z-15'>
      <Container>
        <nav className='h-stack justify-content-between align-items-center'>
          <Link className='text-decoration-none' to={Paths.Root}>
            <span className='font-weight-700 font-size-4'>Waves</span>
          </Link>
          <div className='h-stack align-items-center gap-3'>
            <Link to='/cart'>
              <span>cart (0)</span>
            </Link>
            {data && (
              <Link to={`/profile/${data.profile.id}`}>
                <Avatar
                  size='sm'
                  src={data.profile.image}
                  name={data.profile.username}
                />
              </Link>
            )}
          </div>
        </nav>
      </Container>
    </div>
  );
}
NavigationBar.displayName = 'Navigation Bar';

export default NavigationBar;
