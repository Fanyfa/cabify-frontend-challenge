import React, {Component} from "react";

class Select extends Component {
  render() {
    const { options } = this.props;
    return (
      <div className="select">
        <div className="input">
          <input type="text" name="prefix" />
          <label htmlFor="prefix">Prefix</label>
        </div>
        <ul className="select__list select__list--hidden">
          {options.map(option => {
            return <li>{option}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Select;
