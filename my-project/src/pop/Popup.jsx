import React from 'react';
import './Popup.css'; // Import the CSS file for styling

const Popup = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button hover:bg-black text-yellow-300" onClick={onClose}> × </button>
        <div>

        <img src="https://www.panaceaclinic.in/assets/uploads/news/facility_165.jpg" alt="Popup" className="popup-image" />
        <div className='btn'>
        <a  href="https://api.whatsapp.com/send/?phone=7396183700&text&type=phone_number&app_absent=0" target='_blank'><button className=' e bg-green-600 text-center m-auto font-bold rounded-lg p-3 hover:bg-black hover:text-yellow-300'><h1 className=' text-xs text-center '> Emergency Call Us</h1></button></a>
        <a  href="https://api.whatsapp.com/send/?phone=7396183700&text&type=phone_number&app_absent=0" target='_blank'><button className=' a bg-yellow-300 text-center m-auto font-bold rounded-lg p-3 hover:bg-black hover:text-yellow-300'><h1 className=' text-xs text-center '> Book Appointment Now</h1></button></a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
