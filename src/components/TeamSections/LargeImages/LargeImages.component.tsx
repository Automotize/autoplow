import React from 'react';

import Heading from '../../Heading';

import Text from '../../Text';

import TeamMember from './TeamMember';

import { Props } from './LargeImages.types';

const LargeImages: React.FC<Props> = ({ color, title, description, data }) => {
  return (
    <div className="team-sections-large-images">
      <div className="team-sections-large-images__content">
        <div className="team-sections-large-images__details">
          <Heading
            size="h2"
            lineSpacing="9"
            fontWeight="800"
            letterSpacing="tight"
          >
            {title}
          </Heading>
          <div className="team-sections-large-images__description">
            <Text size="xl" color="gray-500" lineSpacing={7}>
              {description}
            </Text>
          </div>
        </div>

        <div className="team-sections-large-images__grid">
          {data.map(({ id, ...otherProps }) => (
            <TeamMember key={id} color={color} {...otherProps} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LargeImages;
