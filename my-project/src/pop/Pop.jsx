import React, { useState, useEffect } from 'react';
// import Header from './Header';
import Popup from './Popup';

const Pop = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      {/* <Header /> */}
      <Popup show={showPopup} onClose={closePopup} />
      {/* Other components go here */}
    </div>
  );
};

export default Pop;
