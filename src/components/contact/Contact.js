import React from 'react';
import Sisi from './assets/sirine.png';
import Fedy from './assets/fedy.png';
import './contact.css'; 

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <h2>Contact Us</h2>
      <div className="contacts">
        <div className="contact-card">
          <img src={Sisi} alt="Sirine Ouesleti" className="contact-image" />
          <div className="contact-info">
            <p><strong>Local Committee Vice President IGV</strong></p>
            <p><strong>Name:</strong> Sirine Ouesleti</p>
            <p><strong>Email:</strong> ouesletisirine@aiesec.net</p>
            <p><strong>Phone:</strong> (+216) 25 715 804</p>
          </div>
        </div>
        <div className="contact-card">
          <img src={Fedy} alt="Fedy Rjab" className="contact-image" />
          <div className="contact-info">
            <p><strong>Local Committee Vice President IGT</strong></p>
            <p><strong>Name:</strong> Fedy Rjab</p>
            <p><strong>Email:</strong> fedy.rejab@aiesec.net</p>
            <p><strong>Phone:</strong> (+216) 25 097 170</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
