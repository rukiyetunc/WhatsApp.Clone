// Component.js
import React, { useState } from 'react';
import LaftMenu from './LeftMenu';

export default function Component() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Toggle between Chats and Contact components
  const toggleComponent = () => {
    setIsContactOpen(!isContactOpen);
  };

  return (
    <div>
      {isContactOpen ? (
        <Contact onClose={toggleComponent} />
      ) : (
        <LaftMenu onToggleComponent={toggleComponent} />
      )}
    </div>
  );
}
