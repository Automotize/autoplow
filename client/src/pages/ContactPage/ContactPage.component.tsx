import React from 'react';

import { ContactSplitWithImage } from '../../components/ContactSections';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <ContactSplitWithImage
        description="
            We’d love to hear from you! Send us a message using the form opposite, or email us."
        image="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
      />
    </div>
  );
};

export default ContactPage;
