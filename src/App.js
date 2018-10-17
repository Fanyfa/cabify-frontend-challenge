import React, { Component } from 'react';
import cabifyLogo from './images/cabify-logo.svg';
import './styles/App.css';
import Select from './components/Select';
import Input from './components/Input';


const tempOptions = [
  {
    name: 'Spain',
    prefix: '+34'
  },
  {
    name: 'Chile',
    prefix: '+56'
  },
  {
    name: 'Perú',
    prefix: '+51'
  },
  {
    name: 'México',
    prefix: '+521'
  }
];


class App extends Component {
  render() {
    return (
      <div className="mainWrapper row">
        <article className="businessCard col col6">
          <figure className="businessCard-badge">
            <a className="businessCard-badge-logo" href="http://www.cabify.com">
              <img src={cabifyLogo} alt="Cabify" />
            </a>
          </figure>
          <h1 className="title-main">Request your business card</h1>
          <div className="businessCard-cards">
            <div className="businessCard-cardBack" />
            <div className="businessCard-cardFront">
              <div>
                <p className="businessCard-cardFront-title">Laura Sánchez</p>
                <p className="businessCard-cardFront-subtitle">Fronte</p>
              </div>
              <div className="businessCard-cardFront-bottom">
                <p className="businessCard-icon-phone">+34 </p>
                <p className="businessCard-icon-email"></p>
                <p className="businessCard-icon-website">www.cabify.com</p>
                <p className="businessCard-icon-address">Calle Pradillo 42. CP: 28002. Madrid</p>
              </div>
            </div>
          </div>
        </article>
        <article className="builder col col6">
          <form className="form" action="">
            <div className="row">
              <Input 
                className="col12"
                type="text" 
                name="fullname" 
                value="Laura Sánchez"
                label="Full name"
              />
            </div>
            <div className="row row-separationMedium">
              {/* you probably need to add active/focus/disabled classNames */}
              <Input 
                className="col12"
                type="text" 
                name="jobdescription" 
                value="Fronted"
                label="Job description"
              />
            </div>
            <div className="row row-separationMedium row-gutterMedium">
              <div className="formField-input col col3">
                <Select 
                  options={tempOptions}
                  name="prefix"
                  label="Prefix"
                />
              </div>
              <Input 
                className="col9"
                type="tel" 
                name="ponenumber" 
                label="Phone number"
              />
            </div>
            <div className="row row-separationMedium">
              <Input 
                className="col12"
                type="email" 
                name="email" 
                label="Email"
              />
            </div>
            <div className="row row-separationMedium">
              <Input 
                className="col12"
                type="text" 
                name="website" 
                value="www.cabify.com"
                label="Website"
              />
            </div>
            <div className="row row-separationMedium">
              <Input 
                className="col12"
                type="text" 
                name="address" 
                value="Calle Pradillo 42. CP: 28002. Madrid"
                label="Address"
              />
            </div>
            <div className="row row-separationHuge">
              <input className="button button-full button-primary disabled" type="submit" value="Request" />
            </div>
          </form>
        </article>
      </div>
    );
  }
}

export default App;
