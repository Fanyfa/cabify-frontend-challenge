import React, {Component} from "react";

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleList: false
    };
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    const { visibleList } = this.state;
    this.setState({
      visibleList: !visibleList
    });
  }

  render() {
    const { visibleList } = this.state;
    const { options, name, label } = this.props;
    return (
      <div className="select">
        <div className="input">
          <input type="text" name={name} onClick={this.handleClick}/>
          <label htmlFor={name}>{label}</label>
        </div>'
        <ul className={`select__list ${visibleList === false ? 'select__list--hidden' : ''}`}>
          {options.map(option => {
            return <li className="select__list__element">
              <span className="select__list__name">{option.name}</span> 
              <span className="select__list__prefix">{option.prefix}</span>
            </li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Select;
