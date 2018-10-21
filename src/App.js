import React, { Component } from 'react';
import cabifyLogo from './images/cabify-logo.svg';
import './styles/App.css';
import Select from './components/Select';
import Input from './components/Input';
import prefixes from './data/Prefixes';
import BusinessCard from './components/BusinessCard';
import { withAppContext } from './providers/App'
import { sendFormData } from './services/formapi';

class App extends Component {

  handleOnSubmit = (event) => {
    event.preventDefault();
    const { fullname, jobdescription, prefix, phonenumber, email, website, address } = this.props.context;
    sendFormData({ fullname, jobdescription, prefix, phonenumber, email, website, address });
  }

  render() {
    const { context } = this.props;
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
            <BusinessCard />
          </div>
        </article>
        <article className="builder col col6">
          <form className="form" action="">
            <div className="row">
              <Input 
                className="col12"
                type="text" 
                name="fullname" 
                label="Full name"
              />
            </div>
            <div className="row row-separationMedium">
              <Input 
                className="col12"
                type="text" 
                name="jobdescription" 
                label="Job description"
              />
            </div>
            <div className="row row-separationMedium row-gutterMedium">
              <Select 
                className="col3"
                data={prefixes}
                name="prefix"
                label="Prefix"
              />
              <Input 
                className="col9"
                type="tel" 
                name="phonenumber" 
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
                label="Website"
              />
            </div>
            <div className="row row-separationMedium">
              <Input 
                className="col12"
                type="text" 
                name="address" 
                label="Address"
              />
            </div>
            <div className="row row-separationHuge">
              <input className={`button button-full button-primary ${context.getIfFormFullFilled() === false ? 'disabled' : ''}`} 
                type="submit" 
                value="Request"
                onClick={this.handleOnSubmit}
              />
            </div>
          </form>
        </article>
      </div>
    );
  }
}

export default withAppContext(App);
