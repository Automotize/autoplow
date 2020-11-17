import React, { useState } from 'react';

import { CSSTransition } from 'react-transition-group';

import { Link } from 'react-router-dom';

import { FiMenu } from 'react-icons/fi';
import { VscClose } from 'react-icons/vsc';
import {
  HiOutlineCursorClick,
  HiOutlineShieldCheck,
  HiOutlineChartBar,
  HiOutlineViewGrid,
  HiRefresh,
} from 'react-icons/hi';

import Text from '../../../components/Text';

import Button from '../../../components/Button';

const SimpleHeader = () => {
  const [modal, setModal] = useState(false);
  return (
    <header className="header1">
      <div className="header1__container">
        <Link to="/">
          <img
            src="https://tailwindui.com/img/logos/v1/workflow-mark-on-white.svg"
            alt=""
            className="header1__logo"
          />
        </Link>
        <div className="header1__menu">
          <Link to="/contact">
            <Text size="sm" color="gray-500" lineSpacing={6} fontWeight={500}>
              Contact
            </Text>
          </Link>
          <Link to="/pricing">
            <Text size="sm" color="gray-500" lineSpacing={6} fontWeight={500}>
              Pricing
            </Text>
          </Link>
          <Text size="sm" color="gray-500" lineSpacing={6} fontWeight={500}>
            Docs
          </Text>
          <Text size="sm" color="gray-500" lineSpacing={6} fontWeight={500}>
            More
          </Text>
        </div>
        <div className="header1__menu-buttons">
          <Button bg="white" color="gray-500" size="sm">
            Sign In
          </Button>
          <Button bg="blue-600" color="white" size="sm">
            Sign Up
          </Button>
        </div>
        <div className="header1__mobile-menu" onClick={() => setModal(!modal)}>
          <FiMenu />
        </div>
      </div>
      <CSSTransition
        in={modal}
        classNames="header1-modal-animations"
        unmountOnExit
        timeout={150}
      >
        <div className="header1-modal">
          <div className="header1-modal__container">
            <div className="header1-modal__top">
              <div className="header1-modal__items">
                <Link to="/">
                  <img
                    src="https://tailwindui.com/img/logos/v1/workflow-mark-on-white.svg"
                    alt=""
                    className="header1__logo"
                  />
                </Link>
                <VscClose
                  className="header1-modal__exit"
                  onClick={() => setModal(!modal)}
                />
              </div>
            </div>
            <div className="header1-modal__features">
              <div className="header1-modal__feature" tabIndex={1}>
                <HiOutlineChartBar className="color-blue-600" />
                <Text
                  size="base"
                  fontWeight={500}
                  color="gray-900"
                  lineSpacing={6}
                >
                  Analytics
                </Text>
              </div>
              <div className="header1-modal__feature" tabIndex={1}>
                <HiOutlineCursorClick className="color-blue-600" />
                <Text
                  size="base"
                  fontWeight={500}
                  color="gray-900"
                  lineSpacing={6}
                >
                  Engagement
                </Text>
              </div>
              <div className="header1-modal__feature" tabIndex={1}>
                <HiOutlineShieldCheck className="color-blue-600" />
                <Text
                  size="base"
                  fontWeight={500}
                  color="gray-900"
                  lineSpacing={6}
                >
                  Security
                </Text>
              </div>
              <div className="header1-modal__feature" tabIndex={1}>
                <HiOutlineViewGrid className="color-blue-600" />
                <Text
                  size="base"
                  fontWeight={500}
                  color="gray-900"
                  lineSpacing={6}
                >
                  Integrations
                </Text>
              </div>
              <div className="header1-modal__feature" tabIndex={1}>
                <HiRefresh className="color-blue-600" />
                <Text
                  size="base"
                  fontWeight={500}
                  color="gray-900"
                  lineSpacing={6}
                >
                  Automations
                </Text>
              </div>
            </div>
            <div className="header1-modal__bottom">
              <div className="header1-modal__menu">
                <Link onClick={() => setModal(!modal)} to="/pricing">
                  <Text
                    size="base"
                    lineSpacing={6}
                    fontWeight={500}
                    color="gray-900"
                  >
                    Pricing
                  </Text>
                </Link>
                <Link onClick={() => setModal(!modal)} to="/contact">
                  <Text
                    size="base"
                    lineSpacing={6}
                    fontWeight={500}
                    color="gray-900"
                  >
                    Contact
                  </Text>
                </Link>
                <Text
                  size="base"
                  lineSpacing={6}
                  fontWeight={500}
                  color="gray-900"
                >
                  Enterprise
                </Text>
                <Text
                  size="base"
                  lineSpacing={6}
                  fontWeight={500}
                  color="gray-900"
                >
                  Blog
                </Text>
                <Text
                  size="base"
                  lineSpacing={6}
                  fontWeight={500}
                  color="gray-900"
                >
                  Help Center
                </Text>
                <Text
                  size="base"
                  lineSpacing={6}
                  fontWeight={500}
                  color="gray-900"
                >
                  Guides
                </Text>
                <Text
                  size="base"
                  lineSpacing={6}
                  fontWeight={500}
                  color="gray-900"
                >
                  Security
                </Text>
                <Text
                  size="base"
                  lineSpacing={6}
                  fontWeight={500}
                  color="gray-900"
                >
                  Events
                </Text>
              </div>
              <div className="header1-modal__buttons">
                <Button full={true} bg="blue-600" color="white">
                  Sign Up
                </Button>
                <div className="header1-modal__sign-in">
                  <Text size="base" fontWeight={500} color="gray-500">
                    Existing Customer?
                  </Text>
                  <Text size="base" fontWeight={500} color="blue-600">
                    Sign In
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </header>
  );
};

export default SimpleHeader;
