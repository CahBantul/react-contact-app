import React from 'react';

function ContactItemImage({ imageUrl }) {
  return (
    <div class="contact-item__image">
      <img src={imageUrl} alt="contact avatar" />
    </div>
  );
}

export default ContactItemImage;
