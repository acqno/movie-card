// this is the errorboundary component
// it catches any errors in within a component and re-renders with fallback message

import React from 'react';

class ErrorBoundary extends React.Component {
    state = { hasError: false };

    componentDidCatch(error, errorInfo) {

    }

    render() {
        return (
            <div>Error Boundary</div>
        );
    };
}

export default ErrorBoundary;