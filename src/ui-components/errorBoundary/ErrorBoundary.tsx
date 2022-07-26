import React, { Component, ErrorInfo, ReactNode } from "react";
import "./errorBoundary.style.scss";
import Button from "ui-components/button/Button";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public onBackToHome = () => {
    this.setState({ hasError: false }, () => {
      window.localStorage.clear();
      window.location.reload();
    });
  };

  public render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div className="error-boundary-wrapper flex-center absolute-center">
          <div className="error-boundary-wrapper--text">
            Something went wrong... :(
          </div>
          <Button
            className="error-boundary-wrapper--button"
            onClick={this.onBackToHome}
          >
            Back to home
          </Button>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
