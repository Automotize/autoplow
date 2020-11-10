import React from 'react';

import { HiMail } from 'react-icons/hi';

import Heading from '../../components/Heading';
import Button from '../../components/Button';

const ButtonsPage = () => {
  return (
    <div className="badges">
      <Heading>Primary</Heading>
      <div className="badges__demo">
        <Button size="xs">Primary</Button>
        <Button size="sm">Primary</Button>
        <Button size="base">Primary</Button>
        <Button size="lg">Primary</Button>
        <Button size="xl">Primary</Button>
      </div>
      <div className="u-margin-bottom-medium" />
      <Heading>Secondary</Heading>
      <div className="badges__demo">
        <Button bg="indigo-100" color="indigo-700" size="xs">
          Primary
        </Button>
        <Button bg="indigo-100" color="indigo-700" size="sm">
          Primary
        </Button>
        <Button bg="indigo-100" color="indigo-700" size="base">
          Primary
        </Button>
        <Button bg="indigo-100" color="indigo-700" size="lg">
          Primary
        </Button>
        <Button bg="indigo-100" color="indigo-700" size="xl">
          Primary
        </Button>
      </div>
      <div className="u-margin-bottom-medium" />
      <Heading>White</Heading>
      <div className="badges__demo">
        <Button
          bg="white"
          color="gray-700"
          borderColor="gray-300"
          borderSize={1}
          borderStyle="solid"
          size="xs"
        >
          Primary
        </Button>
        <Button
          bg="white"
          color="gray-700"
          borderColor="gray-300"
          borderSize={1}
          borderStyle="solid"
          size="sm"
        >
          Primary
        </Button>
        <Button
          bg="white"
          color="gray-700"
          borderColor="gray-300"
          borderSize={1}
          borderStyle="solid"
          size="base"
        >
          Primary
        </Button>
        <Button
          bg="white"
          color="gray-700"
          borderColor="gray-300"
          borderSize={1}
          borderStyle="solid"
          size="lg"
        >
          Primary
        </Button>
        <Button
          bg="white"
          color="gray-700"
          borderColor="gray-300"
          borderSize={1}
          borderStyle="solid"
          size="xl"
        >
          Primary
        </Button>
      </div>
      <div className="u-margin-bottom-medium" />
      <Heading>Left Icon</Heading>
      <div className="badges__demo">
        <Button iconPosition="left" Icon={HiMail} size="xs">
          Primary
        </Button>
        <Button iconPosition="left" Icon={HiMail} size="sm">
          Primary
        </Button>
        <Button iconPosition="left" Icon={HiMail} size="base">
          Primary
        </Button>
        <Button iconPosition="left" Icon={HiMail} size="lg">
          Primary
        </Button>
        <Button iconPosition="left" Icon={HiMail} size="xl">
          Primary
        </Button>
      </div>
      <div className="u-margin-bottom-medium" />
      <Heading>Right Icon</Heading>
      <div className="badges__demo">
        <Button iconPosition="right" Icon={HiMail} size="xs">
          Primary
        </Button>
        <Button iconPosition="right" Icon={HiMail} size="sm">
          Primary
        </Button>
        <Button iconPosition="right" Icon={HiMail} size="base">
          Primary
        </Button>
        <Button iconPosition="right" Icon={HiMail} size="lg">
          Primary
        </Button>
        <Button iconPosition="right" Icon={HiMail} size="xl">
          Primary
        </Button>
      </div>
    </div>
  );
};

export default ButtonsPage;
