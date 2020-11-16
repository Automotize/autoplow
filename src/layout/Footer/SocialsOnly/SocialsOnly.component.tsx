import React from 'react';

import Text from '../../../components/Text';

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaDribbble,
} from 'react-icons/fa';

const SocialsOnly = () => {
  return (
    <footer className="footer-socials-only">
      <div className="footer-socials-only__content">
        <div className="footer-socials-only__copyright">
          <Text lineSpacing={6} size="base" color="gray-400">
            © 2020 Workflow, Inc. All rights reserved.
          </Text>
        </div>
        <div className="footer-socials-only__socials">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaGithub />
          <FaDribbble />
        </div>
      </div>
    </footer>
  );
};

export default SocialsOnly;
