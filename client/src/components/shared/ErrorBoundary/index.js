import * as React from "react";

type Props = {
  children: React.Node
};

class ErrorBoundary extends React.Component<Props> {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // TODO: log error to a service
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return children;
  }
}

export default ErrorBoundary;
