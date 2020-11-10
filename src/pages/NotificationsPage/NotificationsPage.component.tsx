import React from 'react';

import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { HiOutlineInbox } from 'react-icons/hi';

import Button from '../../components/Button';

import Notification from '../../components/Notification';

const NotificationsPage = () => {
  return (
    <div className="notifications-container">
      <Notification
        Icon={IoIosCheckmarkCircleOutline}
        iconColor="green"
        title="Successfully saved!"
        description="Anyone with a link can now view this file."
      />
      <Notification
        title="Discussion archived"
        condensedLink={{ text: 'Undo', color: 'indigo', link: '' }}
      />
      <Notification
        Icon={HiOutlineInbox}
        iconColor="gray"
        title="Discussion moved"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
        bottomLinks={[
          { text: 'Undo', color: 'indigo-600', link: '' },
          { text: 'Dismiss', color: 'gray-700', link: '' },
        ]}
      />
      <Notification
        large={true}
        image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
        title="Emilia Gates"
        description="Sure! 8:30 works great!"
        rightLinks={[{ text: 'Reply', color: 'indigo-600', link: '' }]}
      />
      <Notification
        large={true}
        title="Receive notifications"
        description="Notifications may include alert, sounds, and badges."
        rightLinks={[
          { text: 'Undo', color: 'indigo-600', link: '' },
          { text: 'Dismiss', color: 'gray-700', link: '' },
        ]}
      />
      <Notification
        large={true}
        image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
        title="Emilia Gates"
        description="Sure! 8:30 works great!"
        BottomButtons={
          <>
            <Button size="sm">Accept</Button>
            <Button
              size="sm"
              bg="white"
              borderSize={1}
              borderStyle="solid"
              borderColor="gray-300"
              color="gray-500"
            >
              Decline
            </Button>
          </>
        }
      />
    </div>
  );
};

export default NotificationsPage;
