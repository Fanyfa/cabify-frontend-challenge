import React, {Component} from "react";
import { withAppContext } from '../providers/App';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isActive: false
    };
  };

  handleOnChange = (e) => {
    const { context, name } = this.props;
    const value = e.currentTarget.value;
    context.setFormData(name, value);
    this.setState({
      value
    });
  }

  handleOnFocus = () => {
    this.setState({
      isActive: true
    });
  }

  handleOnBlur = () => {
    this.setState({
      isActive: this.state.value !== '' ? true : false
    });
  }

  render() {
    const { className, type, name, value, label } = this.props;
    const { isActive } = this.state;
    return (
      <div className={`formField-input col ${className} ${isActive ? 'active' : ''}`}>
        <div className="input">
          <input type={type} name={name} value={value} 
          onChange={this.handleOnChange}
          onFocus={this.handleOnFocus}
          onBlur={this.handleOnBlur}
          />
          <label htmlFor={name}>{label}</label>
        </div>
      </div>
    );
  }
}

export default withAppContext(Input);
