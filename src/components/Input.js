import React, {Component} from "react";

class Input extends Component {
  render() {
    const { className, type, name, value, label } = this.props;
    return (
      <div className={`formField-input active col ${className}`}>
        <div className="input">
          <input type={type} name={name} value={value}/>
          <label htmlFor={name}>{label}</label>
        </div>
      </div>
    );
  }
}

export default Input;
