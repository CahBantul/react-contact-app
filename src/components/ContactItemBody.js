import React from 'react';

function ContactItemBody({ name, tag }) {
  return (
    <div class="contact-item__body">
      <h3 class="contact-item__title">{name}</h3>
      <p class="contact-item__username">@{tag}</p>
    </div>
  );
}

export default ContactItemBody;
