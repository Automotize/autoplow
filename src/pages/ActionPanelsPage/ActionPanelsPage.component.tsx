import React from 'react';

import Text from '../../components/Text';
import Button from '../../components/Button';

import ActionPanel from '../../components/ActionPanel';

const ActionPanelsPage = () => {
  return (
    <div className="action-panels">
      <ActionPanel
        title="Delete your account"
        description="Once you delete your account, you will lose all data associated with it."
        bottom={
          <Button color="red-700" bg="red-100" size="sm">
            Delete Account
          </Button>
        }
      />
      <ActionPanel
        title="Continuous Integration"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, totam at reprehenderit maxime aut beatae ad."
        bottom={
          <Text color="indigo-600" size="sm" fontWeight={500}>
            Learn more about our CI features →
          </Text>
        }
      />
      <ActionPanel
        title="Action Panel"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatibus corrupti atque repudiandae nam."
        right={
          <Button color="white" bg="indigo-700" size="sm">
            Change Plan
          </Button>
        }
      />
      <ActionPanel
        title="Action Panel"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatibus corrupti atque repudiandae nam."
        right={
          <Button color="white" bg="indigo-700" size="sm">
            Change Plan
          </Button>
        }
        rightBottom={true}
      />
      <ActionPanel
        title="Action Panel"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatibus corrupti atque repudiandae nam."
        right={
          <Button color="white" bg="indigo-700" size="sm">
            Change Plan
          </Button>
        }
        rightTop={true}
      />
      <ActionPanel
        title="Action Panel"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatibus corrupti atque repudiandae nam."
        bottom={
          <Button
            color="gray-900"
            bg="white"
            size="sm"
            borderSize={1}
            borderColor="gray-300"
            borderStyle="solid"
          >
            Contact Sales
          </Button>
        }
        gray
      />
    </div>
  );
};

export default ActionPanelsPage;
