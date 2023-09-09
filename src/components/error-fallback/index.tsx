import { ErrorFallbackProps } from './types.ts';

function ErrorFallback({ error }: ErrorFallbackProps) {
  // Call resetErrorBoundary() to reset the error-fallback boundary and retry the render.

  return (
    <div role='alert'>
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
    </div>
  );
}
ErrorFallback.displayName = 'Error Fallback';

export default ErrorFallback;
