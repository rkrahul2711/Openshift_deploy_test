
import { useErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error }) {
    const { resetBoundary } = useErrorBoundary();

    return (
        <div style={{alignItems: "center"}} role='alert'>
            <h2>Something went wrong:</h2>
            <pre style={{ color: 'red',fontSize:19 }}>{error.message}</pre>
            <button onClick={resetBoundary}>Try again</button>
        </div>
    );
}

export default ErrorFallback;

