import { Container } from '../../components';
import { useAppContext } from '../../hooks';

/**
 * Requirements.
 *
 * 1. Ensure that the Footer is stuck to the bottom
 * and always visible.
 *
 * 2. You cannot add your name manually to the footer.
 *    Instead find a way to use your name that you entered
 *    in the AppContext props.
 */

function Footer() {
  const { authorName } = useAppContext();

  return (
    <div className='bg-base-800 text-base-100 py-3 px-2 fixed b-0 l-0 r-0 z-15'>
      <Container>
        <footer>
          <small className='font-size-2 font-weight-300'>
            Created by {authorName}
          </small>
        </footer>
      </Container>
    </div>
  );
}
Footer.displayName = 'Footer';

export default Footer;
