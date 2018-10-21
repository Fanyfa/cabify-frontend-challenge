import React, {Component} from "react";

const AppContext = React.createContext();

class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      jobdescription: '',
      prefix: '',
      phonenumber: '',
      email: '',
      website: '',
      address: '',
      setFormData: this.setFormData
    };
  };

  setFormData = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    const { children } = this.props; 
    return <AppContext.Provider value={this.state}>{children}</AppContext.Provider>
  }
}

export const withAppContext = WrappedComponent => {
  const withHOC = props => {
    return (
      <AppContext.Consumer>
        {context => <WrappedComponent {...props} context={context} />}
      </AppContext.Consumer>
    );
  };
  withHOC.WrappedComponent = WrappedComponent;
  return withHOC;
};

export default AppProvider;
