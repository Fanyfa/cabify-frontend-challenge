import React, {Component} from "react";
import { withAppContext } from '../providers/App';

class Input extends Component {
  handleOnChange = (e) => {
    const { context, name } = this.props;
    const value = e.currentTarget.value;
    context.setFormData(name, value);
  };

  render() {
    const { className, type, name, value, label } = this.props;
    return (
      <div className={`formField-input active col ${className}`}>
        <div className="input">
          <input type={type} name={name} value={value} 
          onChange={this.handleOnChange}
          />
          <label htmlFor={name}>{label}</label>
        </div>
      </div>
    );
  }
}

export default withAppContext(Input);

