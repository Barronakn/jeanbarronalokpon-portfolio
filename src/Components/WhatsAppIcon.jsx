import React from 'react';
import wathsApp from "../assets/sociaux/whatsapp.png";
import { Link } from 'react-router-dom';

const WhatsAppIcon = () => {
    return (
        <div className='icon icon-whatsapp fixed bottom-4 right-4'>
            <Link className="hover:underline" to="https://wa.me/22961225071">
              <img loading="lazy" className="" src={wathsApp} alt="wathsApp-icon" />
            </Link>
        </div>
    );
};

export default WhatsAppIcon;