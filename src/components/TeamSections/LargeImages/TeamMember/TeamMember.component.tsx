import React from 'react';

import { FaTwitter, FaLinkedin } from 'react-icons/fa';

import Text from '../../../Text';

import { Props } from './TeamMember.types';

const TeamMember: React.FC<Props> = ({
  name,
  jobTitle,
  image,
  color,
  linkedInLink,
}) => {
  return (
    <div className="team-sections-large-images__team-member">
      <img src={image} className="team-sections-large-images__image" />
      <Text size="lg" lineSpacing={6} fontWeight={500} color="black">
        {name}
      </Text>
      <Text size="lg" lineSpacing={6} fontWeight={500} color={`${color}-600`}>
        {jobTitle}
      </Text>
      <div className="team-sections-large-images__icons">
        <a href={linkedInLink} target="_blank">
          <FaLinkedin className="color-gray-400" />
        </a>
      </div>
    </div>
  );
};

export default TeamMember;
