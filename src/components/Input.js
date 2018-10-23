import React, {Component} from "react";
import { withAppContext } from '../providers/App';
import warning from '../images/warning.svg';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isActive: false,
      isFocus: false
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
      isActive: true,
      isFocus: true
    });
  }

  handleOnBlur = () => {
    this.setState({
      isActive: this.state.value !== '' ? true : false,
      isFocus: false
    });
  }

  getClassName = () => {
    const { className, isDisabled, isError } = this.props;
    const { isActive, isFocus } = this.state;
    return `formField-input col 
      ${className} 
      ${isActive ? 'active' : ''}
      ${isDisabled ? 'disabled active' : ''}
      ${isFocus ? 'focus' : ''}
      ${isError ? 'error' : ''}`;
  }

  render() {
    const { type, name, value, label } = this.props;
    return (
      <div className={this.getClassName()}>
        <div className="input">
          <input type={type} name={name} value={value} 
            onChange={this.handleOnChange}
            onFocus={this.handleOnFocus}
            onBlur={this.handleOnBlur}
          />
          <label htmlFor={name}>{label}</label>
          <img className="warning" src={warning}/>
        </div>
      </div>
    );
  }
}

export default withAppContext(Input);
