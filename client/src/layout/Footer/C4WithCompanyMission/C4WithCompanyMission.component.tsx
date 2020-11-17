import React from 'react';

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaDribbble,
} from 'react-icons/fa';

import Text from '../../../components/Text';

const C4WithCompanyMission = () => {
  return (
    <footer className="footer1">
      <div className="footer1__container">
        <div className="footer1__top">
          <div className="footer1__company-info">
            <img
              src="https://tailwindui.com/img/logos/v1/workflow-mark-gray-300.svg"
              alt=""
              className="footer1__company-logo"
            />
            <div className="footer1__company-mission">
              <Text size="base" lineSpacing={6} color="gray-500">
                Making the world a better place through constructing elegant
                hierarchies.
              </Text>
            </div>
            <div className="footer1__socials">
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
              <FaGithub />
              <FaDribbble />
            </div>
          </div>
          <div className="footer1__index">
            <div>
              <Text size="sm" fontWeight={600} lineSpacing={5} color="gray-400">
                SOLUTIONS
              </Text>
              <ul>
                <li>
                  <Text size="sm" lineSpacing={6} color="gray-500">
                    Marketing
                  </Text>
                </li>
                <li>
                  <Text size="sm" lineSpacing={6} color="gray-500">
                    Analytis
                  </Text>
                </li>
                <li>
                  <Text size="sm" lineSpacing={6} color="gray-500">
                    Commerce
                  </Text>
                </li>
                <li>
                  <Text size="sm" lineSpacing={6} color="gray-500">
                    Insights
                  </Text>
                </li>
              </ul>
            </div>

            <div>
              <Text size="sm" fontWeight={600} lineSpacing={5} color="gray-400">
                SUPPORT
              </Text>
              <ul>
                <li>
                  <Text size="sm" lineSpacing={6} color="gray-500">
                    Pricing
                  </Text>
                </li>
                <li>
                  <Text size="sm" lineSpacing={6} color="gray-500">
                    Documentation
                  </Text>
                </li>
                <li>
                  <Text size="sm" lineSpacing={6} color="gray-500">
                    Guides
                  </Text>
                </li>
                <li>
                  <Text size="sm" lineSpacing={6} color="gray-500">
                    API Status
                  </Text>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer1__index">
            <div>
              <Text size="sm" fontWeight={600} lineSpacing={5} color="gray-400">
                COMPANY
              </Text>
              <ul>
                <li>
                  <Text size="sm" lineSpacing={6} color="gray-500">
                    About
                  </Text>
                </li>
                <li>
                  <Text size="sm" lineSpacing={6} color="gray-500">
                    Blog
                  </Text>
                </li>
                <li>
                  <Text size="sm" lineSpacing={6} color="gray-500">
                    Jobs
                  </Text>
                </li>
                <li>
                  <Text size="sm" lineSpacing={6} color="gray-500">
                    Press
                  </Text>
                </li>
                <li>
                  <Text size="sm" lineSpacing={6} color="gray-500">
                    Partners
                  </Text>
                </li>
              </ul>
            </div>

            <div>
              <Text size="sm" fontWeight={600} lineSpacing={5} color="gray-400">
                LEGAL
              </Text>
              <ul>
                <li>
                  <Text size="sm" lineSpacing={6} color="gray-500">
                    Claim
                  </Text>
                </li>
                <li>
                  <Text size="sm" lineSpacing={6} color="gray-500">
                    Privacy
                  </Text>
                </li>
                <li>
                  <Text size="sm" lineSpacing={6} color="gray-500">
                    Terms
                  </Text>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer1__bottom">
          <Text size="base" lineSpacing={6} color="gray-400">
            © 2020 Autoplow, Inc. All rights reserved.
          </Text>
        </div>
      </div>
    </footer>
  );
};

export default C4WithCompanyMission;
