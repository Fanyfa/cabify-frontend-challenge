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
      website: 'www.cabify.com',
      address: '',
      emailError: false,
      setFormData: this.setFormData,
      getIfFormFullFilled: this.getIfFormFullFilled,
      setEmailError: this.setEmailError
    };
  };

  setFormData = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  getIfFormFullFilled = () => {
    const { fullname, jobdescription, prefix, phonenumber, email, website, address } = this.state;
    return fullname !== '' && 
    jobdescription !== '' && 
    prefix !== '' && 
    phonenumber !== '' && 
    email !== '' && 
    website !== '' && 
    address !== '' ? true : false;
  }

  setEmailError = (value) => {
    this.setState({
      emailError: value
    })
  } 

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
