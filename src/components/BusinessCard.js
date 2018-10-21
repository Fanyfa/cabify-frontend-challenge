import React, {Component} from "react";
import { withAppContext } from '../providers/App';

class BusinessCard extends Component {
  render() {
    const { fullname, jobdescription, prefix, phonenumber, email, website, address } = this.props.context;
    return (
      <div className="businessCard-cardFront">
        <div>
          <p className="businessCard-cardFront-title">{fullname}</p>
          <p className="businessCard-cardFront-subtitle">{jobdescription}</p>
        </div>
        <div className="businessCard-cardFront-bottom">
          <p className="businessCard-icon-phone">{prefix} {phonenumber}</p>
          <p className="businessCard-icon-email">{email}</p>
          <p className="businessCard-icon-website">{website}</p>
          <p className="businessCard-icon-address">{address}</p>
        </div>
      </div>
    );
  }
}

export default withAppContext(BusinessCard);
