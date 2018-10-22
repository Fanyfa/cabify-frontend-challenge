import React, {Component} from "react";
import { withAppContext } from '../providers/App';
import iconArrow from '../images/arrow.svg';

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleList: false,
      value: ''
    };
  };

  handleClick = () => {
    const { visibleList } = this.state;
    this.setState({
      visibleList: !visibleList
    });
  }

  handleItemClick = (value) => {
    const { context, name } = this.props;
    this.setState({
      visibleList: false,
      value
    });
    context.setFormData(name, value);
  }

  render() {
    const { visibleList, value } = this.state;
    const { data, name, label, className } = this.props;
    return (
      <div className={`select formField-input col ${className} ${value !== '' ? 'active' : ''}`}>
        <div className="input" onClick={this.handleClick}>
          <input type="text" name={name} value={value} readOnly/>
          <img src={iconArrow} className="input__iconArrow"/>
          <label htmlFor={name}>{label}</label>
        </div>
        <ul className={`select__list ${visibleList === false ? 'select__list--hidden' : ''}`}>
          <li className="select__list__element" onClick={() => this.handleItemClick('')}>Empty Option</li>
          {data.map((item, i) => {
            return (
              <li key={i} className="select__list__element" onClick={() => this.handleItemClick(item.dial_code)}>
                <div className="select__list__nameContainer">
                  <div className="select__list__image" style={{ backgroundImage: `url('${require(`../images/flags/${item.code}.svg`)}')`}}></div>
                  <span className="select__list__name">
                    {item.name}
                  </span> 
                </div>
                <div className="select__list__prefix">{item.dial_code}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default withAppContext(Select);
