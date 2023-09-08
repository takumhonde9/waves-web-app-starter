import { Link } from 'react-router-dom';
import { Button } from '../components';
import { Paths } from '../constants';

/**
 * A page component that renders components for the not found page.
 */
function NotFoundPage() {
  return (
    <div className='v-stack gap-2'>
      <h1>Not found</h1>
      <span>We could not find what you are looking for.</span>
      <Link to={Paths.Root}>
        <div className='mt-3'>
          <Button>Go home</Button>
        </div>
      </Link>
    </div>
  );
}
NotFoundPage.displayName = 'Not Found Page';

export default NotFoundPage;
