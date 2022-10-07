import React, {Component, PropsWithChildren} from "react";

export default class ErrorBoundary extends Component {
  public state: { error: any; errorInfo: any; hasError: boolean; };

  constructor(props: PropsWithChildren<{}>) {
	super(props);
	this.state = {error: null, errorInfo: null, hasError: false};
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
	this.setState({
	  error,
	  errorInfo,
	  hasError: true,
	})
  }

  render() {
	if (this?.state?.hasError) {
	  return <div className="bg-black w-screen h-screen flex items-center justify-center text-3xl font-bold">Something went wrong.</div>;
	}

	return (this?.props as any)?.children;
  }
}