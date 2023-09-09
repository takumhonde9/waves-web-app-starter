import { ErrorFallback, LoadingFallback } from '../../components';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Content } from './ui';

/**
 * A page component that renders components for the home page.
 */
function HomePage() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<LoadingFallback />}>
        <Content />
      </Suspense>
    </ErrorBoundary>
  );
}
HomePage.displayName = 'Home Page';

export default HomePage;
