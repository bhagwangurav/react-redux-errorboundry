import React from "react";
class ErrorBoundry extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true
    };
  }

  componentDidCatch(error, log) {
    console.log(Error);
    console.log(log);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
