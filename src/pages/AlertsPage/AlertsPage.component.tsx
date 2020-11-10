import React from 'react';

import {
  IoIosWarning,
  IoMdCloseCircle,
  IoIosCheckmarkCircle,
  IoIosInformationCircle,
} from 'react-icons/io';

import Alert from '../../components/Alert';

const AlertsPage = () => {
  return (
    <div className="alerts">
      <Alert
        Icon={IoIosWarning}
        title="Attention needed"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
        color="yellow"
      />
      <Alert
        Icon={IoMdCloseCircle}
        title="There were 2 errors with your submission"
        list={[
          'Your password must be at least 8 characters',
          'Your password must included at least one pro wrestling finishing move',
        ]}
        color="red"
      />
      <Alert
        Icon={IoIosCheckmarkCircle}
        title="Order completed"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
        color="green"
        actions={[
          { text: 'View Status', link: '' },
          { text: 'Dismiss', link: '' },
        ]}
      />
      <Alert
        Icon={IoIosInformationCircle}
        title="A new software update is available. See what’s new in version 2.0.4."
        color="blue"
        rightLink={{ text: 'Details →', link: '' }}
      />
      <Alert
        Icon={IoIosWarning}
        title="You have no credits left. Upgrade your account to add more credits."
        accent={true}
        color="yellow"
      />
      <Alert
        Icon={IoIosCheckmarkCircle}
        title="Successfully uploaded"
        color="green"
        close={true}
      />
    </div>
  );
};

export default AlertsPage;
