import React from "react";

class ErrorBoundry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasErrorr) {
      return <h1>Oops. That's not good!</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
