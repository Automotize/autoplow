import React from 'react';

import Heading from '../../Heading';
import Text from '../../Text';

import Input from '../../Input';
import Button from '../../Button';

import TextArea from '../../TextArea';

import RadioButtonGroup from '../../RadioButtonGroup';

import { data } from './ContactSplitWithImage.data';

import { Props } from './ContactSplitWithImage.types';

const ContactSplitWithImage: React.FC<Props> = ({ description, image }) => {
  return (
    <div className="contact-split-with-image">
      <div className="contact-split-with-image__form-container">
        <div className="contact-split-with-image__form">
          <Heading size="h2" lineSpacing="9" fontWeight="800" color="black">
            Let's work together
          </Heading>
          <div className="contact-split-with-image__description">
            <Text size="lg" color="gray-500" lineSpacing={7}>
              {description}
            </Text>
          </div>

          <form>
            <div className="contact-split-with-image__double-input">
              <Input placeholder="" label="First Name" />
              <Input placeholder="" label="Last Name" />
            </div>
            <Input placeholder="" label="Email" />

            <Input placeholder="" label="Company" />
            <Input placeholder="" label="Phone" cornerHint="Optional" />
            <TextArea
              placeholder=""
              label="How can we help you?"
              cornerHint="Max. 500 characters"
              rows={4}
            />
            <RadioButtonGroup
              label="Expected budget"
              color="indigo"
              textColor="gray"
              data={data}
            />
            <TextArea
              placeholder=""
              label="How did you hear about us?"
              rows={4}
            />
            <div className="contact-split-with-image__submit-button">
              <Button size="base" full={false}>
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="contact-split-with-image__image">
        <img src={image} alt="" className="s" />
      </div>
    </div>
  );
};

export default ContactSplitWithImage;
