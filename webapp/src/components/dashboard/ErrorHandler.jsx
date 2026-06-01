import React from 'react';
import { Alert } from 'antd';

export class ErrorHandler extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasError: false,
            errorMessage: ''
        };
    }
  
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        const defaultErrorMessage = 'Something went wrong. Please try again and ask your admin for assistance...';
        const errorMessage = typeof(error) == 'object' ? 
        error.message || defaultErrorMessage:
                                (typeof(error) == 'string' ? error : defaultErrorMessage);
        return { hasError: true , errorMessage: errorMessage};
    }
  
    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        //logErrorToMyService(error, errorInfo);
    }

    invokeError = (errorMessage)=>{
        if (errorMessage){
            this.setState({hasError: true, errorMessage: errorMessage});
        }
    }
  
    render() {
        if (this.state.hasError) {
            return (
                <Alert
                message="Error"
                description={this.state.errorMessage}
                type="error"
                showIcon
              />);
        }
        const childrenExtended = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, { invokeError: this.invokeError });
        });
        return (<>
            {childrenExtended}
        </>);
    }
};